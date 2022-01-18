import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IState } from "../../interfaces/stateInterface";
import { influencerActions } from "../../store/influencer-slice";
import styles from "./SecondStage.module.css";

const SecondStage: React.FC = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const { name: pickedNameFromStore, selected } = useSelector(
    (state: IState) => state.influencer
  );

  const goBackHandler = () => {
    history("/stages/1");
  };
  const continueHandler = () => {
    history("/stages/3");
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      influencerActions.setSelected({
        value: event.target.checked,
        name: event.target.id,
      })
    );
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Hi {pickedNameFromStore}!</h1>
        <p>What are your expertise?</p>
      </div>
      <form>
        <div className={styles.checkedDiv}>
          <input
            onChange={changeInput}
            type="checkbox"
            id="lifestyle"
            name="lifestyle"
            checked={selected.lifestyle}
          />
          <label htmlFor="lifestyle">Lifestyle</label>
        </div>

        <div className={styles.checkedDiv}>
          <input
            onChange={changeInput}
            type="checkbox"
            id="beauty"
            name="beauty"
            checked={selected.beauty}
          />
          <label htmlFor="beauty">Beauty</label>
        </div>

        <div className={styles.checkedDiv}>
          <input
            onChange={changeInput}
            type="checkbox"
            id="food"
            name="food"
            checked={selected.food}
          />
          <label htmlFor="food">Food</label>
        </div>
      </form>
      <div className={styles.footer}>
        <button className={styles.button} onClick={goBackHandler}>
          Back
        </button>
        <div>2/3</div>
        <button className={styles.button} onClick={continueHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SecondStage;
