import React from "react";

const Medicine = () => {
  const medicines = [
    {
      name: "Paracetamol",
      type: "Analgesic",
      commonDiseases: ["Fever", "Headache", "Body Pain"],
      inStock: true,
      image: "/src/assets/7.jpg",
    },
    {
      name: "Amoxicillin",
      type: "Antibiotic",
      commonDiseases: ["Bacterial Infections", "Throat Infection"],
      inStock: false,
      image: "/src/assets/8.jpg",
    },
    {
      name: "Cetirizine",
      type: "Antihistamine",
      commonDiseases: ["Allergies", "Runny Nose", "Itchy Eyes"],
      inStock: true,
      image: "/src/assets/9.jpg",
    },
    {
      name: "Ibuprofen",
      type: "Anti-inflammatory",
      commonDiseases: ["Inflammation", "Arthritis", "Muscle Pain"],
      inStock: true,
      image: "/src/assets/10.jpg",
    },
    {
      name: "Metformin",
      type: "Antidiabetic",
      commonDiseases: ["Type 2 Diabetes"],
      inStock: false,
      image: "/src/assets/11.jpg",
    },
    {
      name: "Omeprazole",
      type: "Antacid",
      commonDiseases: ["Acid Reflux", "Stomach Ulcers"],
      inStock: true,
      image: "/src/assets/12.jpg",
    },
  ];

  return (
    <div className="my-12">
      <h1 className="text-center text-4xl font-bold text-[#1c398e] my-2">
        AVAILABLE MEDICINES
      </h1>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {medicines.map((medicine, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={medicine.image}
              alt={medicine.name}
              className="w-full h-56  rounded-t-xl"
            />
            <div className="p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-blue-700">
                  {medicine.name}
                </h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    medicine.inStock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {medicine.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mt-2 mb-2">
                {medicine.type}
              </span>
              <p className="text-gray-700 mb-3">
                <strong>Common Diseases:</strong> {medicine.commonDiseases.join(", ")}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicine;