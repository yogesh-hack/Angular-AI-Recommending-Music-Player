import { Injectable } from '@angular/core';
import { Song } from '../models/song.model';

@Injectable({ providedIn: 'root' })
export class AIRecommendationService {

  recommend(songs: Song[], mood: string): Song[] {
    return songs
      .filter(song => song.mood === mood)
      .sort((a, b) => b.energy - a.energy)
      .slice(0, 5);
  }
}
