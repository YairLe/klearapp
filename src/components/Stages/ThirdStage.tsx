import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IState } from "../../interfaces/stateInterface";
import { influencerActions } from "../../store/influencer-slice";
import styles from "./ThirdStage.module.css";

const ThirdStage: React.FC = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [brand, setBrand] = useState("");
  const brands = useSelector((state: IState) => state.influencer.brands);

  const goBackHandler = () => {
    history("/stages/2");
  };

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };

  const addBrandButtonHandler = () => {
    dispatch(influencerActions.setNewBrand(brand));
  };
  return (
    <div>
      <div className={styles.header}>
        <h1>One last thing</h1>
        <p>Have you collaborated with brands in the past?</p>
      </div>
      <input
        onChange={changeInputHandler}
        className={styles.input}
        type="text"
        placeholder="Enter brand name"
        required
        id="brand"
      />
      <button
        disabled={brand === "" ? true : false}
        onClick={addBrandButtonHandler}
        className={styles.btn}
      >
        Add
      </button>
      <div className={styles.divEnding}>
        <button onClick={goBackHandler} className={styles.backButton}>
          Back
        </button>
        <div>3/3</div>
      </div>
      <div>
        {brands.length > 0 &&
          brands.map((brand, index) => (
            <div key={brand + index}>
              {`@ ${brand}`}
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ThirdStage;
