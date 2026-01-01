import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],   // 🔥 REQUIRED
  templateUrl: './player.html',
})
export class Player implements OnChanges {

  @Input() currentTrack?: Song;

  audio = new Audio();
  isPlaying = false;

  currentTime = 0;
  duration = 0;
  volume = 70;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentTrack'] && this.currentTrack) {
      this.loadAndPlay();
    }
  }

  loadAndPlay() {
    this.audio.pause();
    this.audio.currentTime = 0;

    this.audio.src = this.currentTrack!.url;
    this.audio.load();

    this.audio.onloadedmetadata = () => {
      this.duration = this.audio.duration;
    };

    this.audio.ontimeupdate = () => {
      this.currentTime = this.audio.currentTime;
    };

    this.audio.play().then(() => {
      this.isPlaying = true;
    });
  }

  togglePlay() {
    if (!this.currentTrack) return;
    this.isPlaying ? this.audio.pause() : this.audio.play();
    this.isPlaying = !this.isPlaying;
  }

  seek(e: any) {
    this.audio.currentTime = e.target.value;
  }

  formatTime(sec: number): string {
    if (!sec) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
  }
}
