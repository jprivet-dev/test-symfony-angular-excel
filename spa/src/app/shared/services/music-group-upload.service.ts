import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MusicGroupFileUploadModel } from '@shared/music-group-file-upload.model';

@Injectable({
  providedIn: 'root',
})
export class MusicGroupUploadService {
  constructor(private http: HttpClient) {}

  upload(file: File): Observable<MusicGroupFileUploadModel> {
    const formData = new FormData();
    formData.append('file', file);

    console.log(formData);
    return this.http.post<MusicGroupFileUploadModel>(
      'https://localhost/api/music-groups/upload',
      formData
    );
  }
}
