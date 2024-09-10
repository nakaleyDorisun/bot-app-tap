import React, { useContext } from "react";
import { Switch } from "antd";
import { ThemeContext } from "../../Context/Context";

export const SwitchTheme: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Switch
      defaultChecked
      onChange={() => {
        themeContext?.setNightTheme((p) => !p);
      }}
    />
  );
};
