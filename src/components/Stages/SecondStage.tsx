import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../interfaces/stateInterface";
import { influencerActions } from "../../store/influencer-slice";
import InputStages from "./InputStages";
import styles from "./SecondStage.module.css";

const SecondStage: React.FC = () => {
  const dispatch = useDispatch();

  const { name: pickedNameFromStore, selected } = useSelector(
    (state: IState) => state.influencer
  );

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      influencerActions.setSelected({
        value: event.target.checked,
        name: event.target.id,
      })
    );
  };

  const options = ["lifestyle", "beauty", "food"];

  const inputProp = {
    type: "checkbox",
    onChange: changeInput,
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Hi {pickedNameFromStore}!</h1>
        <p>What are your expertise?</p>
      </div>
      <form>
        <>
          {options.map((option) => {
            const elementToEnter = {
              ...inputProp,
              id: option,
              name: option,
              checked: selected[option],
            };
            return (
              <div key={option} className={styles.checkedDiv}>
                <InputStages inputProp={elementToEnter} />
                <label htmlFor={option}>{option}</label>
              </div>
            );
          })}
        </>
      </form>
    </div>
  );
};

export default SecondStage;
