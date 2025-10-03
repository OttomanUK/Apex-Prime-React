import React from "react";
import newVideo from "../videos/video.mp4";

export function VideoComponent() {
  return (
    <div>
      <video src={newVideo} autoPlay muted loop playsInline />
    </div>
  );
}
