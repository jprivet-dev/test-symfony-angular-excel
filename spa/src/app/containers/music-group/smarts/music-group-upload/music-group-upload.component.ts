import { Component, OnDestroy } from '@angular/core';
import { MusicGroupUploadService } from '@shared/services/music-group-upload.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-music-group-upload',
  templateUrl: './music-group-upload.component.html',
  styleUrls: ['./music-group-upload.component.scss'],
})
export class MusicGroupUploadComponent implements OnDestroy {
  private invalidMessageSubject = new BehaviorSubject<string | null>(null);
  readonly invalidMessage$ = this.invalidMessageSubject.asObservable();

  successMessage: string = '';

  private subscription: Subscription = new Subscription();

  constructor(private uploadService: MusicGroupUploadService) {}

  onFileSelected(file: File): void {
    this.invalidMessageSubject.next(null);

    this.subscription = this.uploadService.upload(file).subscribe(
      (response) => {
        console.log(response);
        this.successMessage = `Le fichier ${response.filename} a bien été téléchargé.`;
      },
      (error: HttpErrorResponse) => {
        this.invalidMessageSubject.next(error.error.message);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
