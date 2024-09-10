import { FC } from "react";
import icon from "../night-icon1.png";
import "./NightModelIcon.css";

export const NightModelIcon: FC = () => {
  return (
    <div>
      <img src={icon} alt="" className="main" />
    </div>
  );
};
