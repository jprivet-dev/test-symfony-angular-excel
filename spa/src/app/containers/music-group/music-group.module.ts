import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicGroupRoutingModule } from './music-group-routing.module';
import { MusicGroupComponent } from './music-group.component';
import { MusicGroupUploadComponent } from './smarts/music-group-upload/music-group-upload.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MusicGroupComponent, MusicGroupUploadComponent],
  imports: [CommonModule, MusicGroupRoutingModule, SharedModule],
})
export class MusicGroupModule {}
