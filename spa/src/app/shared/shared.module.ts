import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicGroupFileUploadFormComponent } from './presentationals/music-group-file-upload-form/music-group-file-upload-form.component';

@NgModule({
  declarations: [MusicGroupFileUploadFormComponent],
  imports: [CommonModule],
  exports: [MusicGroupFileUploadFormComponent],
})
export class SharedModule {}
