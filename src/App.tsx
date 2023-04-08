import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layout/Header/Header";
import Menu from "./Components/Layout/Menu/Menu";
import Main from "./Components/Layout/Main/Main";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/Store";

function App() {
  const theme = useSelector((store: RootState) => store.themeReducer.theme);
  return (
    <div className={`App ${theme}`}>
      <Header />
      <Menu />
      <Main />
    </div>
  );
}

export default App;
