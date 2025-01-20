"use client";

interface VideoPlayerProps {
  webmSrc: string;
  mp4Src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  webmSrc,
  mp4Src,
  className,
}) => {
  return (
    <div className="relative w-screen h-screen">
      <video
        poster="/img/hero.png"
        className={className}
        playsInline
        loop
        muted
        autoPlay
        preload="auto"
      >
        <source
          src={webmSrc}
          type="video/webm"
        />
        <source
          src={mp4Src}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
