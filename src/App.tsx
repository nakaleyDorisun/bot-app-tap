import "./App.css";

import { Routes, Route } from "react-router-dom";

import {
  TimerContextProvider,
  UserContextProvider,
  ValterTokenProvider,
} from "./Context/Context";
import { ValterHamster } from "./Components/ValterHamster/ValterHamster";
import { Header } from "./Components/Header/Header";
import Login from "./Pages/Login";

function App() {
  return (
    <TimerContextProvider>
      <ValterTokenProvider>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/logged" element={<ValterHamster />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </UserContextProvider>
      </ValterTokenProvider>
    </TimerContextProvider>
  );
}

export default App;
