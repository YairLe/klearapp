import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../interfaces/stateInterface";
import { influencerActions } from "../../store/influencer-slice";
import styles from "./FirstStage.module.css";
import InputStages from "./InputStages";

const FirstStage: React.FC = () => {
  const pickedNameFromStore = useSelector(
    (state: IState) => state.influencer.name
  );
  const [name, setName] = useState(pickedNameFromStore);
  const dispatch = useDispatch();

  const inputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () => dispatch(influencerActions.setName(name)),
      500
    );
    return () => clearTimeout(timeoutId);
  }, [name, dispatch]);

  const inputProp = {
    type: "text",
    placeholder: "name",
    value: name,
    required: true,
    id: "name",
    onChange: inputChanged,
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Welcome!</h1>
        <h5>How should we call you?</h5>
      </div>
      <InputStages inputProp={inputProp} />

      <div className={styles.divEnding}></div>
    </div>
  );
};

export default FirstStage;
