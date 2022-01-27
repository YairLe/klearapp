import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Steps.module.css";
interface IProps {
  children: React.ReactNode;
  numberOfSteps: number;
}

const Steps: React.FC<IProps> = (props: IProps) => {
  const { children, numberOfSteps } = props;
  const history = useNavigate();

  const [stepCounter, setCurrentStepCounter] = useState(1);
  const goBackHandler = () => {
    setCurrentStepCounter(stepCounter - 1);
  };
  const goNextHandler = () => {
    setCurrentStepCounter(stepCounter + 1);
  };

  useEffect(() => {
    history(`/stages/${stepCounter}`);
  }, [stepCounter, history]);

  return (
    <div>
      {children}
      <div className={styles.buttonDiv}>
        {stepCounter !== 1 && (
          <button className={styles.button} onClick={goBackHandler}>
            Back
          </button>
        )}
        {stepCounter}/{numberOfSteps}
        {stepCounter !== numberOfSteps && (
          <button
            disabled={false}
            className={styles.button}
            onClick={goNextHandler}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Steps;
