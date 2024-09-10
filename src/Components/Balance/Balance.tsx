import { FC, useContext } from "react";
import { ThemeContext, ValterTokenContext } from "../../Context/Context";
import coin from "../../UI/coin.png";

import styles from "./Balance.module.css";

export const Balance: FC = ({}) => {
  const themeContext = useContext(ThemeContext);
  const valterTokenContext = useContext(ValterTokenContext);
  return (
    <div className={styles.wrpBalance}>
      <p
        className={styles.balance}
        style={themeContext?.nigthTheme ? { color: "white" } : {}}
      >
        Вальтер токен: {valterTokenContext?.valterToken}
      </p>
      <img src={coin} className={styles.coinStatic} />
    </div>
  );
};
