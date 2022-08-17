import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-music-group-data-modal',
  templateUrl: './music-group-data-modal.component.html',
  styleUrls: ['./music-group-data-modal.component.scss'],
})
export class MusicGroupDataModalComponent {
  @Input() name: string = '';

  constructor(public activeModal: NgbActiveModal) {}
}
