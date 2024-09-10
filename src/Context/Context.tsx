import React, { Dispatch, FC, SetStateAction, createContext } from "react";
import { useState } from "react";

// Интерфейсы

interface IUser {
  login: string | null;
  password: string | null;
}

interface IUserContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<{ login: string; password: string }>>;
}

interface IContextTheme {
  nigthTheme: boolean;
  setNightTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IValterTokenContext {
  valterToken: number;
  setValterToken: React.Dispatch<React.SetStateAction<number>>;
}

interface ITimerContext {
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

export interface IProps {
  children: React.ReactNode;
}

// Создание контекстов

export const UserContext = React.createContext<IUserContext | null>(null);

export const ThemeContext = React.createContext<IContextTheme | null>(null);

export const ValterTokenContext =
  React.createContext<IValterTokenContext | null>(null);

export const TimerContext = createContext<ITimerContext | null>(null);

// создание оберток провайдеров

export const ThemeContextProvider: FC<IProps> = ({ children }) => {
  const [nigthTheme, setNightTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ nigthTheme, setNightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ValterTokenProvider: FC<IProps> = ({ children }) => {
  const [valterToken, setValterToken] = useState(0);

  return (
    <ValterTokenContext.Provider value={{ valterToken, setValterToken }}>
      {children}
    </ValterTokenContext.Provider>
  );
};

export const TimerContextProvider: FC<IProps> = ({ children }) => {
  const [seconds, setSeconds] = useState(12);

  return (
    <TimerContext.Provider value={{ seconds, setSeconds }}>
      {children}
    </TimerContext.Provider>
  );
};

export const UserContextProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState({ login: "", password: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
