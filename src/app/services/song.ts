import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../models/song.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SongService {

  private API_URL = 'http://localhost:3000/api/songs';

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.API_URL);
  }

  getSongsByMood(mood: string): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.API_URL}/mood/${mood}`);
  }
}

