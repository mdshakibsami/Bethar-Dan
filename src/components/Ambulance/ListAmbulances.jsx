import React from "react";

const ListAmbulances = () => {
  const ambulances = [
    {
      name: "Ambulance A1",
      type: "Basic Life Support",
      availability: "Available",
      contact: "+123456789",
      image: "/src/assets/ambulanceCover.jpg",
    },
    {
      name: "Ambulance A2",
      type: "Advanced Life Support",
      availability: "Not Available",
      contact: "+987654321",
      image: "/src/assets/ambulanceCover2.jpg",
    },
    {
      name: "Ambulance A3",
      type: "Neonatal Ambulance",
      availability: "Available",
      contact: "+112233445",
      image: "/src/assets/ambulanceCover.jpg",
    },
    {
      name: "Ambulance A4",
      type: "Patient Transport Ambulance",
      availability: "Available",
      contact: "+998877665",
      image: "/src/assets/ambulanceCover2.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      {ambulances.map((ambulance, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden transition duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <img
            src={ambulance.image}
            alt={ambulance.name}
            className="w-full md:w-1/2 h-64 object-cover"
          />
          <div className="p-6 w-full md:w-1/2 space-y-3">
            <h3 className="text-2xl font-bold text-blue-700">{ambulance.name}</h3>
            <p className="text-gray-700">
              <strong>Type:</strong> {ambulance.type}
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <strong>Availability:</strong>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  ambulance.availability === "Available"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {ambulance.availability}
              </span>
            </p>
            <p className="text-gray-700">
              <strong>Contact:</strong> {ambulance.contact}
            </p>
            <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListAmbulances;
