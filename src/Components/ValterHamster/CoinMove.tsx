import { FC } from "react";
import coin from "../../UI/coin.png";
import styles from "./CoinMove.module.css";
import "./CoinMove.css";

interface IProps {
  s: string;
}

export const CoinMove: FC<IProps> = ({ s }) => {
  return <img src={coin} className={s}></img>;
};
