import React from "react";
import { ImageContext } from "../context/Image";

import image from "../assets/image.svg";

export const Drop: React.FC = () => {
  const { handleOpenImage } = React.useContext(ImageContext);

  const handleDragOver = (ev: React.DragEvent) => {
    ev.preventDefault();
  };

  const handleDrop = (ev: React.DragEvent) => {
    ev.preventDefault();
    const selectedImage = ev.dataTransfer.files[0] || null;
    handleOpenImage(selectedImage);
  };

  return (
    <div
      className="drop-content"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      draggable
    >
      <img src={image} />
      <p>Drag & drop your image here</p>
    </div>
  );
};
