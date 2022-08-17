import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicGroupRoutingModule } from './music-group-routing.module';
import { MusicGroupComponent } from './music-group.component';

@NgModule({
  declarations: [MusicGroupComponent],
  imports: [CommonModule, MusicGroupRoutingModule],
})
export class MusicGroupModule {}
