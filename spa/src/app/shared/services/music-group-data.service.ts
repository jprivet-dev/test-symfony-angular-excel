import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { MusicGroupData } from '@shared/music-group-data.model';

@Injectable({
  providedIn: 'root',
})
export class MusicGroupDataService {
  private dataSubject = new BehaviorSubject<MusicGroupData[]>([]);
  readonly data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  read(): Observable<MusicGroupData[]> {
    return this.http.get<MusicGroupData[]>(
      'https://localhost/api/music-groups/data'
    );
  }

  load(): Observable<MusicGroupData[]> {
    return this.read().pipe(tap((response) => this.dataSubject.next(response)));
  }
}
