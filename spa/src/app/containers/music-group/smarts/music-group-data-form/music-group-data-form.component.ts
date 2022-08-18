import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MusicGroupDataService } from '@shared/services/music-group-data.service';
import { Subscription } from 'rxjs';
import { ToastService } from '@shared/services/toast.service';
import { MusicGroupData } from '@shared/music-group-data.model';

@Component({
  selector: 'app-music-group-data-form',
  templateUrl: './music-group-data-form.component.html',
  styleUrls: ['./music-group-data-form.component.scss'],
})
export class MusicGroupDataFormComponent implements OnInit, OnDestroy {
  @Input() data!: MusicGroupData;
  @Output() submitEvent = new EventEmitter();
  errorMessage: string = '';
  updateMode: boolean = false;
  private createSubscription: Subscription = new Subscription();
  private updateSubscription: Subscription = new Subscription();

  form = this.formBuilder.group({
    nomDuGroupe: ['', [Validators.required]],
    origine: '',
    ville: '',
    anneeDebut: '',
    anneeSeparation: '',
    fondateurs: '',
    membres: 0,
    courantMusical: '',
    presentation: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private dataService: MusicGroupDataService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.updateMode = true;
      this.form.patchValue(this.data);
    }
  }

  get nomDuGroupe(): any {
    return this.form.get('nomDuGroupe');
  }

  nomDuGroupeIsInvalid(): any {
    return (
      !this.nomDuGroupe?.valid &&
      (this.nomDuGroupe?.dirty || this.nomDuGroupe?.touched)
    );
  }

  // TODO: gérer la validation des autres champs comme 'nomDuGroupe'.

  onSubmit(): void {
    this.errorMessage = '';

    if (this.updateMode) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.createSubscription = this.dataService
      .create(this.form.value)
      .subscribe(
        (data) => {
          this.form.reset();
          this.toastService.success(
            `Le groupe "${data.nomDuGroupe}" a bien été créé.`
          );
          this.submitEvent.emit();
        },
        (error) => {
          this.errorMessage = error.error.message;
        }
      );
  }

  update() {
    this.updateSubscription = this.dataService
      .update(this.data.id, this.form.value)
      .subscribe(
        (data) => {
          this.form.reset();
          this.toastService.success(
            `Le groupe "${data.nomDuGroupe}" a bien été mis à jour.`
          );
          this.submitEvent.emit();
        },
        (error) => {
          this.errorMessage = error.error.message;
        }
      );
  }

  ngOnDestroy(): void {
    this.createSubscription.unsubscribe();
  }
}
