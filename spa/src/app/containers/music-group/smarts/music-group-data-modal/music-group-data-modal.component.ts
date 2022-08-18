import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MusicGroupData } from '@shared/music-group-data.model';

@Component({
  selector: 'app-music-group-data-modal',
  templateUrl: './music-group-data-modal.component.html',
  styleUrls: ['./music-group-data-modal.component.scss'],
})
export class MusicGroupDataModalComponent implements OnInit {
  // TODO: Nous avons là un composant hybride smart/presentational. Réfléchir à une approche plus propre entre la modal et le formulaire.

  @Input() data!: MusicGroupData;
  updateMode: boolean = false;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.data) {
      this.updateMode = true;
    }
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }

  close(): void {
    this.activeModal.close();
  }
}
