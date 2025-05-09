import React from "react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      designation: "Senior Consultant",
      availability: "Mon-Fri, 9am-5pm",
      image: "/src/assets/3.jpg",
    },
    {
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      designation: "Consultant",
      availability: "Mon-Sun, 10am-4pm",
      image: "/src/assets/1.webp",
    },
    {
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      designation: "Senior Consultant",
      availability: "Mon-Sat, 8am-2pm",
      image: "/src/assets/2.avif",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Orthopedic Surgeon",
      designation: "Consultant",
      availability: "Wed-Fri, 11am-6pm",
      image: "/src/assets/4.avif",
    },
    {
      name: "Dr. Sarah Wilson",
      specialty: "Neurologist",
      designation: "Senior Consultant",
      availability: "Mon-Fri, 10am-3pm",
      image: "/src/assets/5.jpg",
    },
    {
      name: "Dr. David Lee",
      specialty: "General Physician",
      designation: "Consultant",
      availability: "Mon-Sun, 9am-9pm",
      image: "/src/assets/6.jpg",
    },
  ];

  // Get today's weekday (e.g., "Mon")
  const today = new Date().toLocaleDateString("en-US", { weekday: "short" });

  // Function to check if a doctor is available today
  const isAvailableToday = (availabilityStr) => {
    const match = availabilityStr.match(
      /([A-Za-z]{3})-([A-Za-z]{3})|([A-Za-z]{3})/g
    );
    if (!match) return false;

    return match.some((range) => {
      if (range.includes("-")) {
        const [start, end] = range.split("-");
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const startIndex = days.indexOf(start);
        const endIndex = days.indexOf(end);
        const todayIndex = days.indexOf(today);

        return startIndex <= todayIndex && todayIndex <= endIndex;
      }
      return range === today;
    });
  };

  return (
    <div className="my-12">
      <h1 className="text-center text-4xl font-bold text-[#1c398e] my-2">
        OUR DOCTORS
      </h1>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => {
          const available = isAvailableToday(doctor.availability);
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-blue-700">
                    {doctor.name}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {available ? "Available Today" : "Not Available Today"}
                  </span>
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mt-2 mb-2">
                  {doctor.specialty}
                </span>
                <p className="text-gray-700 mb-1">
                  <strong>Designation:</strong> {doctor.designation}
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Availability:</strong> {doctor.availability}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  View Profile
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
