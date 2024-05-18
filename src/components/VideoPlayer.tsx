import React from "react";
import ReactPlayer from "react-player";
import dd from "../videos/videoplayback.mp4";
const VideoPlayer = () => {
  return (
    <ReactPlayer
      width="768px"
      height="432px"
      url="https://www.youtube.com/watch?v=p7HKvqRI_Bo"
      controls={true}
      light={false}
      pip={true}
    />
  );
};

export default VideoPlayer;
