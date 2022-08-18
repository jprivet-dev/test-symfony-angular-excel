import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-music-group-data-modal',
  templateUrl: './music-group-data-modal.component.html',
  styleUrls: ['./music-group-data-modal.component.scss'],
})
export class MusicGroupDataModalComponent {
  constructor(private activeModal: NgbActiveModal) {}

  dismiss(): void {
    this.activeModal.dismiss();
  }

  close(): void {
    this.activeModal.close();
  }
}
