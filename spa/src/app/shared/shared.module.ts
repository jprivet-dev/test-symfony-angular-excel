import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicGroupFileUploadFormComponent } from './presentationals/music-group-file-upload-form/music-group-file-upload-form.component';
import { ToastsComponent } from './smarts/toasts/toasts.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MusicGroupFileUploadFormComponent, ToastsComponent],
  imports: [CommonModule, NgbToastModule],
  exports: [MusicGroupFileUploadFormComponent, ToastsComponent],
})
export class SharedModule {}
