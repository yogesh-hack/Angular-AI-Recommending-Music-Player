import { Component, signal } from '@angular/core';
import { Search } from './components/search/search';
import { Player } from './components/player/player';
import { Playlist } from './components/playlist/playlist';
import { Song } from './models/song.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Search, Player, Playlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('AI Music Player');
  selectedTrack?: Song;

  onTrackSelected(track: Song) {
    this.selectedTrack = track;
  }
}
