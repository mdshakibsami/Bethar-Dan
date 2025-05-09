import React from "react";

const HomeCard = () => {
  const cards = [
    {
      title: "Doctors & Medicines",
      description:
        "Find the best doctors and medicines tailored to your needs.",
      link: "/doctors-and-medicine",
      image: "/src/assets/hospital.jpg",
    },
    {
      title: "Ambulance Services",
      description: "Access 24/7 emergency ambulance services for urgent care.",
      link: "/ambulance",
      image: "/src/assets/ambulanceCover.jpg",
    },
    {
      title: "Health Tips",
      description: "Explore tips and advice to maintain a healthy lifestyle.",
      link: "/health-contents",
      image: "/src/assets/home/13.jpg",
    },
    {
      title: "BMI Calculator",
      description:
        "Calculate your Body Mass Index to understand your health better.",
      link: "/bmi",
      image: "/src/assets/bmiCalulator.jpg",
    },
  ];

  return (
    <>
      <h1 className=" my-13 text-center text-4xl font-bold text-[#1c398e] ">
        OUR SERVICES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto my-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:shadow-lg hover:-translate-y-1"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <a
                href={card.link}
                className="text-blue-500 hover:underline font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCard;
