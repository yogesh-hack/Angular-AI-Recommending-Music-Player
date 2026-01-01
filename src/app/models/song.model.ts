export interface Song {
  id: number;
  title: string;
  artist: string;
  mood: 'relax' | 'happy' | 'focus' | 'sad' | 'workout';
  bpm: number;
  energy: number; // 1–10
  url: string;
}
