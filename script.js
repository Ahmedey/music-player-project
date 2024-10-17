const audioElement = document.createElement("audio");
document.body.appendChild(audioElement);

// Selecting Dom elements

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-bar");
const volumeSlider = document.getElementById("volume");
const speedSelect = document.getElementById("speed");

// Song data

const songs = [
  {
    title: "Song 1",
    artist: "artist 1",
    cover: "https://via.placeholder.com/250/2196F3/FFFFFF",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },

  {
    title: "Song 2",
    artist: "artist 2",
    cover: "https://via.placeholder.com/250/8C4156/FFFFFF",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },

  //   {
  //     title: "local song",
  //     artist: "Ahmed",
  //     cover: "https://via.placeholder.com/250/8C5141/FFFFFF",
  //     src:"./local song"
  //   },
];

let songIndex = 0;
let isPlaying = false;
let speed = 1;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audioElement.src = song.src;
}

loadSong(songs[songIndex]);

function playSong() {
  playBtn.querySelector("i").classList.remove("fa-play");
  playBtn.querySelector("i").classList.add("fa-pause");

  audioElement.play();
  isPlaying = true;
}

function pauseSong() {
  playBtn.querySelector("i").classList.remove("fa-pause");
  playBtn.querySelector("i").classList.add("fa-play");
  audioElement.pause();
  isPlaying = false;
}

//next song

function nextSong() {
  pauseSong();

  setTimeout(() => {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
  }, 300);
}

function prevSong() {
  pauseSong();

  setTimeout(() => {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
  }, 300);
}
//all about events
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// next song event

nextBtn.addEventListener("click", () => {
  nextSong();
});
