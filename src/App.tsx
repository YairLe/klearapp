import React from "react";
import styles from "./App.module.css";
import AllSteps from "./components/Steps/AllSteps";

const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <AllSteps />
    </div>
  );
};

export default App;
