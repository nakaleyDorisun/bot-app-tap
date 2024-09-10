import { FC, useContext, useEffect } from "react";
import { TimerContext, ValterTokenContext } from "../../Context/Context";
import styles from "./Timer.module.css";

export const Timer: FC = () => {
  const timerContext = useContext(TimerContext);
  const valterTokenContext = useContext(ValterTokenContext);
  const danger = timerContext && timerContext.seconds < 6;
  const hideTimer = timerContext && timerContext.seconds < 0;

  function dispMinutes() {
    if (timerContext) {
      return Math.floor(timerContext.seconds / 60)
        .toString()
        .padStart(2, "0");
    } else return "1";
  }
  function dispSeconds() {
    if (timerContext) {
      return (timerContext.seconds % 60).toString().padStart(2, "0");
    } else return "2";
  }

  useEffect(() => {
    const timer = setInterval(() => {
      timerContext?.setSeconds((p) => p - 1);
      console.log(timerContext?.seconds, "from useEffect");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timerContext && timerContext?.seconds <= 0) {
      valterTokenContext?.setValterToken((p) => p - 1);
      return () => {
        valterTokenContext?.setValterToken(0);
      };
    }
  }, [timerContext?.seconds]);

  return (
    <div className={danger ? styles.danger + " " + styles.root : styles.root}>
      {hideTimer ? null : `${dispMinutes()} : ${dispSeconds()}`}
    </div>
  );
};
