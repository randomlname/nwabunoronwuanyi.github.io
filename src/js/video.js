import React, { useRef, useEffect } from 'react';

const Video = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const checkTime = () => {
        if (video.currentTime >= 45) {
            video.currentTime = 0;
            video.play();
        }
        };

        video.addEventListener('timeupdate', checkTime);

        return () => {
        video.removeEventListener('timeupdate', checkTime);
        };
    }, []);

  return (
    <div>
        <video ref={videoRef} id="video1" autoPlay muted className="background-video">
            <source src={`${process.env.PUBLIC_URL}/backgroundVideo.mp4`} type="video/mp4"/>
        </video>
    </div>
  );
}

export default Video;