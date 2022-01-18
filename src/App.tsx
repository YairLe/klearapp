import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import FirstStage from "./components/Stages/FirstStage";
import SecondStage from "./components/Stages/SecondStage";
import ThirdStage from "./components/Stages/ThirdStage";

const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/stages/1" element={<FirstStage />} />
        <Route path="/stages/2" element={<SecondStage />} />
        <Route path="/stages/3" element={<ThirdStage />} />
        <Route path="*" element={<Navigate replace to="/stages/1" />}></Route>
      </Routes>
    </div>
  );
};

export default App;
