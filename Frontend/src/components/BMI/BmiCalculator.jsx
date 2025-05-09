import React, { useState } from "react";
import questionImg from "../../assets/question.jpg";
import bmiCalculator from "../../assets/bmiCalulator.jpg";

const BmiCom = ({ onBmiCategoryChange }) => {
  const [formData, setFormData] = useState({
    weight: "",
    heightFeet: "",
    heightInches: "",
  });
  const [bmiResult, setBmiResult] = useState("");
  const [bmiDetails, setBmiDetails] = useState("");
  const [advice, setAdvice] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [bmiCategory, setBmiCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { weight, heightFeet, heightInches } = formData;
    const w = parseFloat(weight);
    const feet = parseFloat(heightFeet);
    const inches = parseFloat(heightInches);

    if (!w || !feet || feet < 0 || !inches || inches < 0 || w <= 0) {
      setBmiResult("Please enter valid weight and height.");
      setBmiDetails("");
      setAdvice("");
      setShowPopup(true);
      setBmiCategory("Error");
      return;
    }

    const totalHeightInMeters = (feet * 12 + inches) * 0.0254;
    const bmi = (w / (totalHeightInMeters * totalHeightInMeters)).toFixed(2);
    let status = "";
    let details = "";
    let adviceText = "";

    if (bmi < 18.5) {
      status = "Underweight";
      details = "You are under the normal weight range.";
      adviceText =
        "Consider increasing your calorie intake with nutrient-dense foods and consult a healthcare provider for personalized advice.";
    } else if (bmi < 24.9) {
      status = "Normal weight";
      details = "You are within the normal weight range.";
      adviceText =
        "Maintain your current lifestyle with a balanced diet and regular exercise.";
    } else if (bmi < 29.9) {
      status = "Overweight";
      details = "You are above the normal weight range.";
      adviceText =
        "Adopt a healthier diet, increase physical activity, and consult a healthcare provider if needed.";
    } else {
      status = "Obese";
      details = "You are significantly above the normal weight range.";
      adviceText =
        "Seek guidance from a healthcare provider to develop a weight management plan tailored to your needs.";
    }

    setBmiResult(`Your BMI is ${bmi} (${status})`);
    setBmiDetails(details);
    setAdvice(adviceText);
    setShowPopup(true);
    setBmiCategory(status);

    if (onBmiCategoryChange) {
      onBmiCategoryChange(status);
    }
  };

  const getCategoryColor = () => {
    switch (bmiCategory) {
      case "Underweight":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Normal weight":
        return "bg-green-100 text-green-800 border-green-300";
      case "Overweight":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "Obese":
        return "bg-red-100 text-red-800 border-red-300";
      case "Error":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getEmoji = () => {
    switch (bmiCategory) {
      case "Underweight":
        return "⚠️";
      case "Normal weight":
        return "✅";
      case "Overweight":
        return "⚠️";
      case "Obese":
        return "🚨";
      case "Error":
        return "❌";
      default:
        return "ℹ️";
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-[#1c398e]">Check Your BMI</h1>
      <div className="flex justify-center w-11/12 mx-auto my-10 p-20 items-center min-h-screen bg-base-200">
        <div className="card w-full h-[600px] grid grid-cols-2 max-w-5xl bg-base-100 shadow-xl ">
          {/* Left Side: Form */}
          <div className="w-full flex justify-center items-center bg-blue-100">
            <img
              src={questionImg}
              alt="BMI Illustration"
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Right Side: Image and Form */}
          <div className="w-full p-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              BMI Calculator
            </h2>
            <img
              className="h-[285px] w-full object-cover"
              src={bmiCalculator}
              alt=""
            />

            <div className="my-3 space-y-2">
              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  name="weight"
                  placeholder="Enter your weight (kg)"
                  className="input input-bordered w-full mb-3"
                  value={formData.weight}
                  onChange={handleChange}
                />
                <div className="mb-3">
                  <input
                    type="number"
                    name="heightFeet"
                    placeholder="Height (feet)"
                    className="input input-bordered w-full"
                    value={formData.heightFeet}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    name="heightInches"
                    placeholder="Height (inches)"
                    className="input input-bordered w-full"
                    value={formData.heightInches}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-full text-white"
                >
                  Calculate
                </button>
              </form>
            </div>

            {/* ✅ Enhanced Popup */}
            {showPopup && (
              <div className="modal modal-open">
                <div
                  className={`modal-box animate-fade-in-down border ${getCategoryColor()}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{getEmoji()}</span>
                    <h3 className="font-bold text-xl">BMI Result</h3>
                  </div>
                  <p className="py-3 font-semibold">{bmiResult}</p>
                  <p className="text-sm">{bmiDetails}</p>
                  <p className="text-sm mt-2">
                    <strong>Advice:</strong> {advice}
                  </p>
                  <div className="modal-action">
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => setShowPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BmiCom;
