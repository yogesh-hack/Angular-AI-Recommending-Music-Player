import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Song } from '../../models/song.model';
import { CommonModule } from '@angular/common';
import { SongService } from '../../services/song';
import { AIRecommendationService } from '../../services/ai-recommendation.service';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist.html',
})
export class Playlist implements OnInit {

  tracks: Song[] = [];
  currentTrack?: Song;

  @Output() trackSelected = new EventEmitter<Song>();

  constructor(
    private songService: SongService,
    private ai: AIRecommendationService
  ) { }

  recommended: Song[] = [];
  detectMood(hour: number) {
    if (hour < 10) return 'focus';
    if (hour < 18) return 'happy';
    return 'relax';
  }

  ngOnInit() {
    this.songService.getSongs().subscribe(songs => {
      this.tracks = songs;
      const mood = this.detectMood(new Date().getHours());
      this.recommended = this.ai.recommend(songs, mood);

    });
  }


  playTrack(track: Song) {
    this.currentTrack = track;
    this.trackSelected.emit(track);
  }

  getMoodColor(mood: string) {
    return {
      relax: 'bg-blue-600',
      happy: 'bg-green-600',
      focus: 'bg-purple-600',
      sad: 'bg-red-600',
      workout: 'bg-orange-600',
    }[mood] || 'bg-zinc-600';
  }

}
