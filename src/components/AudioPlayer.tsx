import { useEffect, useRef, useState } from 'react';

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2;
      audio.loop = true;
      // Try to play muted on load (allowed by browsers)
      audio.play().catch(() => {
        // Auto-play might fail silently if not muted
      });
    }
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      const newMuted = !audio.muted;
      audio.muted = newMuted;
      if (!newMuted) {
        audio.volume = 0.2;
        audio.play().catch(() => {});
      }
      setIsMuted(newMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMute}
        className="bg-black/70 text-white border border-white rounded-full px-4 py-2 shadow-md hover:bg-white hover:text-black transition"
      >
        {isMuted ? '🔇 Get space experience' : '🔊 Back to Earth'}
      </button>
      <audio ref={audioRef} src="/audio/space-music.mp3" autoPlay muted />
    </div>
  );
};
