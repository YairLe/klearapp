import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FirstStage from "../Stages/FirstStage";
import SecondStage from "../Stages/SecondStage";
import ThirdStage from "../Stages/ThirdStage";
import Steps from "./Steps";

const AllSteps: React.FC = () => {
  const allSteps = [<FirstStage />, <SecondStage />, <ThirdStage />];

  return (
    <div>
      <Routes>
        {allSteps.map((step, index) => {
          return (
            <Route
              key={index}
              path={`/stages/${index + 1}`}
              element={<Steps numberOfSteps={allSteps.length}>{step}</Steps>}
            />
          );
        })}
        <Route path="*" element={<Navigate replace to="/stages/1" />}></Route>
      </Routes>
    </div>
  );
};
export default AllSteps;
