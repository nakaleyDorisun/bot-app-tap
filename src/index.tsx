import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./Context/Context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter basename="/bot-app-tap/">
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </HashRouter>
);
