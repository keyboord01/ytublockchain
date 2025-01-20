"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const playVideo = () => {
      videoElement
        .play()
        .then(() => {
          window.dispatchEvent(new Event("video-playing"));
        })
        .catch((error) => {
          console.error("Error attempting to play video:", error);
        });
    };

    const handleCanPlayThrough = () => {
      window.dispatchEvent(new Event("video-loaded"));
      playVideo();
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    playVideo();

    return () => {
      videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
  );
};

export default VideoPlayer;
