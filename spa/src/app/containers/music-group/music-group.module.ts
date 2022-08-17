import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicGroupRoutingModule } from './music-group-routing.module';
import { MusicGroupComponent } from './music-group.component';
import { MusicGroupUploadComponent } from './smarts/music-group-upload/music-group-upload.component';
import { SharedModule } from '@shared/shared.module';
import { MusicGroupDataComponent } from './smarts/music-group-data/music-group-data.component';

@NgModule({
  declarations: [MusicGroupComponent, MusicGroupUploadComponent, MusicGroupDataComponent],
  imports: [CommonModule, MusicGroupRoutingModule, SharedModule],
})
export class MusicGroupModule {}
