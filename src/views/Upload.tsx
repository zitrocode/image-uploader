import React from "react";
import { ImageContext } from "../context/Image";

import { Drop } from "../components/Drop";

const Upload: React.FC = () => {
  const { handleOpenImage } = React.useContext(ImageContext);

  const handleLoadImage = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const seletedImage = ev.target.files?.[0] || null;
    handleOpenImage(seletedImage);
  };

  return (
    <>
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png...</p>
      <Drop />
      <div className="or">
        <p>Or</p>
      </div>
      <div className="input-group">
        <label htmlFor="file">Choose a file</label>
        <input
          type="file"
          id="file"
          onChange={handleLoadImage}
          accept=".jpeg,.jpg,.png"
          hidden
        />
      </div>
    </>
  );
};

export default Upload;
