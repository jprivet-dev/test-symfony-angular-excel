import { Component, OnDestroy } from '@angular/core';
import { MusicGroupDataService } from '@shared/services/music-group-data.service';
import { Subscription } from 'rxjs';
import { MusicGroupData } from '@shared/music-group-data.model';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-music-group-data',
  templateUrl: './music-group-data.component.html',
  styleUrls: ['./music-group-data.component.scss'],
})
export class MusicGroupDataComponent implements OnDestroy {
  readonly data$ = this.dataService.data$;
  private deleteSubscription: Subscription = new Subscription();

  constructor(
    private dataService: MusicGroupDataService,
    private toastService: ToastService
  ) {}

  year(date: string): string {
    // TODO: cette donnée doit être renvoyée directement par l'API. Voir avec le serializer.
    return date ? date.split('-')[0] : '';
  }

  membres(membres: number): string {
    return membres > 0 ? membres.toString() : '';
  }

  delete(data: MusicGroupData): void {
    if (confirm(`Souhaitez-vous supprimer le groupe "${data.nomDuGroupe}" ?`)) {
      this.deleteSubscription = this.dataService.delete(data).subscribe(() => {
        this.toastService.success(
          `Le groupe "${data.nomDuGroupe}" a bien été supprimé`
        );
      });
    }
  }

  ngOnDestroy(): void {
    this.deleteSubscription.unsubscribe();
  }
}
