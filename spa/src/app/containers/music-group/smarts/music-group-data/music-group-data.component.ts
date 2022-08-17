import { Component } from '@angular/core';
import { MusicGroupDataService } from '@shared/services/music-group-data.service';

@Component({
  selector: 'app-music-group-data',
  templateUrl: './music-group-data.component.html',
  styleUrls: ['./music-group-data.component.scss'],
})
export class MusicGroupDataComponent {
  readonly data$ = this.dataService.data$;

  constructor(private dataService: MusicGroupDataService) {}

  year(date: string): string {
    // TODO: cette donnée doit être renvoyée directement par l'API. Voir avec le serializer.
    return date ? date.split('-')[0] : '';
  }

  membres(membres: number): string {
    return membres > 0 ? membres.toString() : '';
  }
}
