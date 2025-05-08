import React from "react";
import BmiCalculator from "../components/BMI/BmiCalculator";
import BmiContents from "../components/BMI/bmiContents";

const BMI = () => {
  return (
    <>
      <BmiContents></BmiContents>
      <BmiCalculator></BmiCalculator>
    </>
  );
};

export default BMI;
