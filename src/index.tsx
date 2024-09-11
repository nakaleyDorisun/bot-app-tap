import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./Context/Context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename="/bot-app-tap">
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>
);
