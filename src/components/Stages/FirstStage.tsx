import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IState } from "../../interfaces/stateInterface";
import { influencerActions } from "../../store/influencer-slice";
import styles from "./FirstStage.module.css";

const FirstStage: React.FC = () => {
  const history = useNavigate();
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

  const submitNameHadler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history("/stages/2");
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Welcome!</h1>
        <h5>How should we call you?</h5>
      </div>
      <form onSubmit={submitNameHadler} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          id="name"
          onChange={inputChanged}
        />
        <div className={styles.divEnding}>
          <p>1/3</p>
          <button type="submit" className={styles.button}>
            next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstStage;
