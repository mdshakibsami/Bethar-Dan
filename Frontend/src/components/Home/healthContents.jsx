import React from "react";

const HealthContents = () => {
  const healthTopics = [
    {
      title: "Healthy Eating",
      description:
        "Discover the benefits of a balanced diet and how it can improve your overall health and well-being.",
      image: "/src/assets/13.jpg",
    },
    {
      title: "Regular Exercise",
      description:
        "Learn about the importance of regular physical activity and how it can help you stay fit and active.",
      image: "/src/assets/14.jpg",
    },
    {
      title: "Mental Wellness",
      description:
        "Explore tips and strategies to maintain mental health and reduce stress in your daily life.",
      image: "/src/assets/15.jpg",
    },
    {
      title: "Preventive Care",
      description:
        "Understand the significance of regular check-ups and preventive measures to avoid illnesses.",
      image: "/src/assets/16.webp",
    },
    {
      title: "Sleep Hygiene",
      description:
        "Find out how good sleep habits contribute to physical and mental health, and learn to sleep better. Maintain a consistent sleep schedule, avoid screens before bedtime, and create a restful environment. Quality sleep enhances memory, immune function, and mood regulation.",
      image: "/src/assets/17.webp",
    },
    {
      title: "Hydration Tips",
      description:
        "Understand how staying properly hydrated affects bodily functions and overall vitality. Water regulates temperature, lubricates joints, delivers nutrients to cells, and helps organs work efficiently. Carry a water bottle, reduce sugary drinks, and listen to your thirst cues.",
      image: "/src/assets/",
    },
    {
      title: "Managing Diabetes",
      description:
        "Learn strategies to control blood sugar, make smart food choices, and lead a healthy life with diabetes. Monitor glucose levels regularly, follow a diabetes-friendly diet, and stay physically active. Diabetes management also involves emotional support and regular healthcare follow-up.",
      image: "/src/assets/13.jpg",
    },
    {
      title: "Heart Health",
      description:
        "Get guidance on maintaining a healthy heart through lifestyle, diet, and stress management. Eat heart-friendly foods, reduce sodium, quit smoking, and manage stress through relaxation techniques. Early intervention and healthy habits are the keys to long-term cardiovascular health.",
      image: "/src/assets/14.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto my-10">
      {healthTopics.map((topic, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:shadow-lg"
        >
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full md:w-1/2 h-64 object-cover"
          />
          <div className="p-6 w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              {topic.title}
            </h3>
            <p className="text-gray-700 mb-4">{topic.description}</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthContents;
