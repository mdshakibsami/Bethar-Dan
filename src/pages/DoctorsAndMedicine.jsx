import React from "react";
import Banner from "../components/DoctorAndMedicien/Banner";
import Doctors from "../components/DoctorAndMedicien/Doctors";
import Medicine from "../components/DoctorAndMedicien/Medicine";

const DoctorsAndMedicine = () => {
  return (
    <div>
      <Banner></Banner>
      <Doctors></Doctors>
      <Medicine></Medicine>
    </div>
  );
};

export default DoctorsAndMedicine;
