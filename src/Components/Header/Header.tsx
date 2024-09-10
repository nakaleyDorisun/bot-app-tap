import { FC, useContext } from "react";
import {
  ThemeContext,
  TimerContext,
  UserContext,
  ValterTokenContext,
} from "../../Context/Context";
import { SwitchTheme } from "../../UI/UI Components/Switch";

import styles from "./Header.module.css";

import { NightModelIcon } from "../../UI/UI Components/NightModelIcon";
import { Balance } from "../Balance/Balance";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  const timerContext = useContext(TimerContext);
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);
  const valterTokenContext = useContext(ValterTokenContext);
  const nightTogglerClass = themeContext?.nigthTheme
    ? styles.root + " " + styles.nigthTheme
    : styles.root;

  return (
    <header className={nightTogglerClass}>
      <div className={styles.wrp1}>
        <div>{userContext?.user.login}</div>

        <Balance />
      </div>
      <div className={styles.wrp}>
        <NightModelIcon />
        <SwitchTheme />
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: 24 }}
          to="/"
        >
          <p
            onClick={() => {
              valterTokenContext?.setValterToken(0);
              timerContext?.setSeconds(12);
              userContext?.setUser({ login: "", password: "" });
            }}
          >
            LOG OUT
          </p>
        </Link>
      </div>
    </header>
  );
};
