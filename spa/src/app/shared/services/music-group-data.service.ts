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

  delete(data: MusicGroupData): Observable<null> {
    return this.http
      .delete<null>(`https://localhost/api/music-groups/data/${data.id}`)
      .pipe(
        tap(() =>
          this.dataSubject.next(
            this.dataSubject.value.filter((d) => d.id !== data.id)
          )
        )
      );
  }
}
