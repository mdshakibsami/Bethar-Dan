import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-[500px] bg-cover bg-center "
      style={{ backgroundImage: "url('/src/assets/hospital.jpg')" }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-8/12">
          <h1 className="mb-5 text-5xl font-bold">
            Bethar Dan – Healthcare for Every Heart at JKKNIU
          </h1>
          <p className="mb-5 text-center text-xl ">We provide medicine thoughtfully tailored to meet your individual health needs.
Our dedicated team offers compassionate care, ensuring every patient feels seen and supported.
All of this is done with one goal — to serve you, right here at JKKNIU, with heart and commitment.
          </p>
          <button className="btn font-bold">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
