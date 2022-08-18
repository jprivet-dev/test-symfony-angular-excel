import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MusicGroupDataService } from '@shared/services/music-group-data.service';
import { Subscription } from 'rxjs';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-music-group-data-form',
  templateUrl: './music-group-data-form.component.html',
  styleUrls: ['./music-group-data-form.component.scss'],
})
export class MusicGroupDataFormComponent implements OnDestroy {
  errorMessage: string = '';
  private createSubscription: Subscription = new Subscription();

  @Output() submitEvent = new EventEmitter();

  form = this.formBuilder.group({
    nomDuGroupe: ['', [Validators.required]],
    origine: '',
    ville: '',
    anneeDebut: '',
    anneeSeparation: null,
    fondateurs: '',
    membres: null,
    courantMusical: '',
    presentation: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private dataService: MusicGroupDataService,
    private toastService: ToastService
  ) {}

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

  ngOnDestroy(): void {
    this.createSubscription.unsubscribe();
  }
}
