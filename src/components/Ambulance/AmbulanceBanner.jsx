import React from "react";

const AmbulanceBanner = () => {
  return (
    <div
      className="hero h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/ambulanceCover2.jpg')" }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl ">
          <h1 className="mb-5 text-5xl font-bold">Emergency Ambulance Services</h1>
          <p className="mb-5 text-lg font-semibold">
            We are here to provide 24/7 emergency ambulance services to ensure
            your safety and well-being. Quick response and professional care
            when you need it the most.
          </p>
          <button className="btn font-bold">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceBanner;