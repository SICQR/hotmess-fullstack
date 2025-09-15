import { useRef, useEffect, useState } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const streamUrl = process.env.NEXT_PUBLIC_RADIO_STREAM_URL;

  useEffect(() => {
    // If streaming URL changes, reset player
    if (audioRef.current) {
      audioRef.current.src = streamUrl;
    }
  }, [streamUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded">
      <button onClick={togglePlay} className="px-3 py-1 bg-blue-500 text-white rounded">
        {playing ? 'Pause' : 'Play'}
      </button>
      <span className="text-sm">Live Stream</span>
      <audio ref={audioRef} src={streamUrl} preload="none" hidden />
    </div>
  );
}