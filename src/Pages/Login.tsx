import { Card } from "antd";

import styles from "./Login.module.css";
import { useContext, useState } from "react";
import { ThemeContext, UserContext } from "../Context/Context";

import { Link } from "react-router-dom";

const Login = () => {
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPassWordValue] = useState("");
  const [userNameWarning, setUserNameWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);

  const loginHandler = () => {
    if (loginValue && passwordValue) {
      userContext?.setUser({ login: loginValue, password: passwordValue });
      setLoginValue("");
      setPassWordValue("");
    } else {
      setUserNameWarning((p) => !p);
      setPasswordWarning((p) => !p);
    }
  };

  const nightTogglerClass = themeContext?.nigthTheme ? styles.nightTheme : "";
  const nightTogglerClassCard = themeContext?.nigthTheme
    ? styles.main + " " + styles.nightThemeCard
    : styles.main;

  return (
    <div className={nightTogglerClass}>
      <Card
        title="Please log in Valter Hamster"
        extra={<a href="#">Sing in</a>}
        style={themeContext?.nigthTheme ? { color: "white" } : {}}
        className={nightTogglerClassCard}
      >
        {userNameWarning && passwordWarning ? (
          <div style={{ color: "red" }}>Введите логин и пароль</div>
        ) : (
          ""
        )}
        <p>Login:</p>
        <input
          type="text"
          value={loginValue}
          onChange={(e) => {
            setUserNameWarning(false);
            setLoginValue(e.target.value);
          }}
        />
        <p>Password</p>
        <input
          type="password"
          value={passwordValue}
          onChange={(e) => {
            setPasswordWarning(false);
            setPassWordValue(e.target.value);
          }}
        />
        <Link to={loginValue && passwordValue ? "/logged" : ""}>
          <button onClick={() => loginHandler()}>Login</button>
        </Link>
      </Card>
    </div>
  );
};

export default Login;
