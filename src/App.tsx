import React from "react";

import { ImageContext } from "./context/Image";

import Layout from "./components/Layout";
import Upload from "./views/Upload";
import Loading from "./views/Loading";
import Preview from "./views/Preview";
import "./App.css";

const App: React.FC = () => {
  const { image, isLoading } = React.useContext(ImageContext);

  return (
    <Layout>
      {!image.file && !isLoading && <Upload />}
      {isLoading && <Loading />}
      {image.url && !isLoading && <Preview img={image.url} />}
    </Layout>
  );
};

export default App;
