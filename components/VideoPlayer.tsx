import React, { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.playsInline = true;
      video.muted = true;
      video.loop = true;

      const handleCanPlay = () => {
        video
          .play()
          .then(() => {
            setIsLoaded(true);
          })
          .catch((error: Error) => console.error(error));
      };

      video.addEventListener("canplay", handleCanPlay);
      return () => video.removeEventListener("canplay", handleCanPlay);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className={`${className ?? ""} transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        preload="auto"
        playsInline
        muted
        loop
      >
        <source
          src={src}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
