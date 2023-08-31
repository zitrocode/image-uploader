import checkIcon from "../assets/circle-check.svg";

const Preview: React.FC<{ img: string }> = ({ img }) => {
  const handleClipboard = () => {
    navigator.clipboard.writeText(img);
  };

  return (
    <>
      <div className="icon-content">
        <img src={checkIcon} alt="Icon success" />
      </div>
      <h1>Uploaded Successfully!</h1>
      <div className="image-preview">
        <img src={img} alt="image preview" />
      </div>
      <div className="preview-control">
        <input type="text" value={img} disabled />
        <button onClick={handleClipboard}>Copy Link</button>
      </div>
    </>
  );
};

export default Preview;
