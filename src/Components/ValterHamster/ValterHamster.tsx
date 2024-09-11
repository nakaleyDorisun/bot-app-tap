import { FC, useContext, useEffect, useState } from "react";

import valter1 from "../../UI/1.png";
import valter2 from "../../UI/2.png";
import valter3 from "../../UI/3.png";

import styles from "./ValterHamster.module.css";
import { Balance } from "../Balance/Balance";

import {
  ThemeContext,
  TimerContext,
  ValterTokenContext,
} from "../../Context/Context";

import { Timer } from "../Timer/Timer";
import { CoinMove } from "./CoinMove";

const coinMove1 = "coinMove1";
const coinMove2 = "coinMove2";

export const ValterHamster: FC = () => {
  const themeContext = useContext(ThemeContext);
  const timerContext = useContext(TimerContext);
  const valterTokenContext = useContext(ValterTokenContext);
  const [valetToggle, setValterToggle] = useState(false);

  const valterToggleHandler = () => {
    timerContext?.setSeconds(12);
    setValterToggle((p) => !p);
    valterTokenContext?.setValterToken((p) => p + 1);
  };

  const nightTogglerClass = themeContext?.nigthTheme
    ? styles.flex + " " + styles.nightTheme
    : styles.flex;

  return (
    <div className={nightTogglerClass}>
      {timerContext && timerContext?.seconds >= 0 ? (
        valetToggle ? (
          <div className={styles.wrpImg}>
            <img
              className={styles.main}
              src={valter1}
              onClick={() => {
                valterToggleHandler();
              }}
            />
            <CoinMove s={coinMove1} />
          </div>
        ) : (
          <div className={styles.wrpImg}>
            <img
              src={valter2}
              className={styles.main}
              onClick={() => {
                valterToggleHandler();
              }}
            />
            <CoinMove s={coinMove2} />
          </div>
        )
      ) : (
        <div className={styles.wrpImg}>
          <img
            className={styles.main}
            src={valter3}
            onClick={() => {
              valterToggleHandler();
            }}
          />
        </div>
      )}
      <Balance />
      <Timer />
    </div>
  );
};
