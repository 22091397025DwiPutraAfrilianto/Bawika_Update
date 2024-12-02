import React, { useState, useRef } from "react";
import cublaksuweng from "../assets/cubleksuweng.png";
import gambangsuling from "../assets/gambangsuling.png";
import gundulpacul from "../assets/gundulpacul.png";
import menthok from "../assets/menthok.png";
import CublakCublakSuweng from "../assets/music/Cublak Cublak Suweng.mp3";
import GundulPacul from "../assets/music/gundul pacul.mp3";
import Gambangsuling from "../assets/music/gambang suling.mp3";
import Menthok from "../assets/music/menthok.mp3";

const songsData = [
  {
    id: 1,
    title: "Gundul Pacul",
    artist: "Raden Cajetanus Hardjosoebroto",
    src: GundulPacul,
    cover: gundulpacul,
  },
  {
    id: 4,
    title: "Cublak Cublak Suweng",
    artist: "Syekh Maulana Ainul Yakin",
    src: CublakCublakSuweng,
    cover: cublaksuweng,
  },
  {
    id: 3,
    title: "Gambang Suling",
    artist: "Ki Narto Sabdo",
    src: Gambangsuling,
    cover: gambangsuling,
  },
  {
    id: 2,
    title: "Menthok Menthok",
    artist: "RC Hardjasoebrata",
    src: Menthok,
    cover: menthok,
  },
];

const TembangPlayer2 = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipHandler = (direction) => {
    let newIndex = currentSongIndex + direction;
    if (newIndex < 0) newIndex = songsData.length - 1;
    if (newIndex >= songsData.length) newIndex = 0;
    setCurrentSongIndex(newIndex);
    setIsPlaying(false);
    setTimeout(() => audioRef.current.play(), 200);
    setIsPlaying(true);
  };

  const volumeChangeHandler = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="flex flex-col items-center w-full p-4 bg-yellow-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">DETAIL TEMBANG JAWA </h1>

      {/* Album Cover */}
      <img
        src={songsData[currentSongIndex].cover}
        alt="Album cover"
        className="w-48 h-48 rounded-full mb-4 shadow-md"
      />

      {/* Song Info */}
      <h2 className="text-xl font-semibold">
        {songsData[currentSongIndex].title}
      </h2>
      <p className="text-gray-600">{songsData[currentSongIndex].artist}</p>

      {/* Audio */}
      <audio
        ref={audioRef}
        src={songsData[currentSongIndex].src}
        onEnded={() => skipHandler(1)}
      ></audio>

      {/* Controls */}
      <div className="flex items-center space-x-4 mt-6">
        <button
          className="p-2 bg-gray-300 rounded-full shadow-md"
          onClick={() => skipHandler(-1)}
        >
          ⏮
        </button>
        <button
          className="p-3 bg-oren-500 text-white rounded-full shadow-md"
          onClick={playPauseHandler}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button
          className="p-2 bg-gray-300 rounded-full shadow-md"
          onClick={() => skipHandler(1)}
        >
          ⏭
        </button>
      </div>

      {/* Volume Slider */}
      <div className="mt-4 w-2/45">
        <label className="text-sm text-gray-500">Volume</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={volumeChangeHandler}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default TembangPlayer2;
