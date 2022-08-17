import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MusicGroupData } from '@shared/music-group-data.model';

@Injectable({
  providedIn: 'root',
})
export class MusicGroupDataService {
  constructor(private http: HttpClient) {}

  read(): Observable<MusicGroupData[]> {
    return this.http.get<MusicGroupData[]>(
      'https://localhost/api/music-groups/data'
    );
  }
}
