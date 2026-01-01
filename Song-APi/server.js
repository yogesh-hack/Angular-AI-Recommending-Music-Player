import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Sample Song Data (OWN DATA)
const songs = [
  {
  id: 1,
  title: 'Chill Vibes',
  artist: 'AI Beats',
  mood: 'relax',
  duration: '3:45',
  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
},
{
  id: 2,
  title: 'Morning Energy',
  artist: 'Neural Flow',
  mood: 'happy',
  duration: '4:02',
  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
}
,
  {
    id: 3,
    title: 'Deep Focus',
    artist: 'MindWave',
    mood: 'focus',
    duration: '5:10',
    url: 'https://example.com/music/focus.mp3'
  },
  {
    id: 4,
    title: 'Night Drive',
    artist: 'SynthX',
    mood: 'chill',
    duration: '4:30',
    url: 'https://example.com/music/night.mp3'
  },
  {
    id: 5,
    title: 'Rainy Mood',
    artist: 'Echo AI',
    mood: 'sad',
    duration: '3:55',
    url: 'https://example.com/music/rain.mp3'
  },
  {
    id: 6,
    title: 'Workout Boost',
    artist: 'Pulse AI',
    mood: 'workout',
    duration: '3:20',
    url: 'https://example.com/music/workout.mp3'
  },
  {
    id: 7,
    title: 'LoFi Study',
    artist: 'BrainFog',
    mood: 'study',
    duration: '5:45',
    url: 'https://example.com/music/lofi.mp3'
  },
  {
    id: 8,
    title: 'Peaceful Piano',
    artist: 'Calm Labs',
    mood: 'relax',
    duration: '6:10',
    url: 'https://example.com/music/piano.mp3'
  },
  {
    id: 9,
    title: 'Party Time',
    artist: 'BeatDrop',
    mood: 'party',
    duration: '3:33',
    url: 'https://example.com/music/party.mp3'
  },
  {
    id: 10,
    title: 'Late Night Coding',
    artist: 'DevTune',
    mood: 'focus',
    duration: '4:50',
    url: 'https://example.com/music/coding.mp3'
  }
];

// 🔹 Health Check
app.get('/', (req, res) => {
  res.send('🎵 AI Music API is running');
});

// 🔹 Get all songs
app.get('/api/songs', (req, res) => {
  res.json(songs);
});

// 🔹 Get song by ID
app.get('/api/songs/:id', (req, res) => {
  const song = songs.find(s => s.id === Number(req.params.id));

  if (!song) {
    return res.status(404).json({ message: 'Song not found' });
  }

  res.json(song);
});

// 🔹 Get songs by mood (AI-like filter 😄)
app.get('/api/songs/mood/:mood', (req, res) => {
  const moodSongs = songs.filter(
    s => s.mood.toLowerCase() === req.params.mood.toLowerCase()
  );

  res.json(moodSongs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
