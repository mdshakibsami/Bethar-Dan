import React from "react";

const BmiContents = () => {
  return (
    <div className="bg-white bg-opacity-80 p-12 my-10 rounded-lg shadow-xl w-11/12 mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Understanding BMI Levels
      </h1>
      <p className="text-gray-700 text-lg mb-4">
        Body Mass Index (BMI) is a simple calculation used to assess whether a
        person is underweight, normal weight, overweight, or obese. It is
        calculated using a person's weight and height.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-blue-800">Underweight</h2>
          <p className="text-gray-600 mt-2">
            A BMI below 18.5 indicates that a person is underweight. This may be
            a sign of malnutrition or other health issues.
          </p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-green-800">Normal Weight</h2>
          <p className="text-gray-600 mt-2">
            A BMI between 18.5 and 24.9 is considered normal. This range is
            associated with the lowest risk of health problems.
          </p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-yellow-800">Overweight</h2>
          <p className="text-gray-600 mt-2">
            A BMI between 25 and 29.9 indicates that a person is overweight.
            This may increase the risk of certain health conditions.
          </p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-red-800">Obese</h2>
          <p className="text-gray-600 mt-2">
            A BMI of 30 or higher is classified as obese. This is associated
            with a higher risk of serious health issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BmiContents;
