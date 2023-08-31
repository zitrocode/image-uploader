import ReactDOM from "react-dom/client";
import { ImageProvider } from "./context/Image.tsx";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <ImageProvider>
    <App />
  </ImageProvider>
);
