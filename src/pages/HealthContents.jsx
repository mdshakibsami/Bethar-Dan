import React from "react";

const HealthContents = () => {
  const healthTopics = [
    {
      title: "Healthy Eating",
      description:
        "Healthy eating is the cornerstone of a vibrant life. By incorporating a variety of nutrient-rich foods into your diet, you can boost your energy levels, improve your immune system, and reduce the risk of chronic diseases. Learn how to create balanced meals that nourish your body and mind.",
      image: "/src/assets/home/13.jpg",
    },
    {
      title: "Regular Exercise",
      description:
        "Regular exercise is essential for maintaining physical and mental health. It helps you build strength, improve cardiovascular health, and manage stress effectively. Discover workout routines and tips to stay active and fit, no matter your age or fitness level.",
      image: "/src/assets/home/14.jpg",
    },
    {
      title: "Mental Wellness",
      description:
        "Mental wellness is just as important as physical health. Learn strategies to manage stress, improve focus, and maintain a positive outlook on life. Explore mindfulness techniques, relaxation exercises, and resources to support your emotional well-being.",
      image: "/src/assets/home/15.jpg",
    },
    {
      title: "Preventive Care",
      description:
        "Preventive care is the key to a long and healthy life. Regular check-ups, vaccinations, and screenings can help detect potential health issues early. Understand the importance of proactive healthcare and how it can save lives.",
      image: "/src/assets/home/16.webp",
    },
    {
      title: "Sleep Hygiene",
      description:
        "Good sleep hygiene is crucial for overall health. Learn how to establish a bedtime routine, create a sleep-friendly environment, and understand the impact of quality sleep on your physical and mental well-being. Discover tips to wake up refreshed and energized every day.",
      image: "/src/assets/home/17.webp",
    },
    {
      title: "Hydration Tips",
      description:
        "Staying hydrated is vital for your body to function properly. Water helps regulate body temperature, transport nutrients, and maintain energy levels. Learn how to recognize signs of dehydration and incorporate healthy hydration habits into your daily routine.",
      image: "/src/assets/home/18.webp",
    },
    {
      title: "Managing Diabetes",
      description:
        "Managing diabetes requires a combination of healthy eating, regular exercise, and monitoring blood sugar levels. Discover practical tips to control diabetes effectively and improve your quality of life. Learn about the latest advancements in diabetes care and management.",
      image: "/src/assets/home/19.jpg",
    },
    {
      title: "Heart Health",
      description:
        "Your heart is the engine of your body. Learn how to keep it healthy through a balanced diet, regular exercise, and stress management. Explore heart-friendly recipes, lifestyle changes, and medical advice to maintain a strong and healthy heart.",
      image: "/src/assets/home/20.jpg",
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
