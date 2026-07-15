import React from "react";
import "./Works.css";
import taskTracker from "../../assets/Task-tracker-project.png";
import studentDirectory from "../../assets/student-directory-app.png";
import travelList from "../../assets/travel-list-app.png";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Task Tracker",
      image: taskTracker,
      description:
        "A comprehensive task tracking application for managing your daily tasks and projects efficiently.",
    },
    {
      id: 2,
      title: "Student Directory",
      image: studentDirectory,
      description:
        "A student directory system for managing and organizing student information seamlessly.",
    },
    {
      id: 3,
      title: "Travel List",
      image: travelList,
      description:
        "A travel planning application to create and manage your travel itineraries.",
    },
  ];

  return (
    <div id="works" className="works-container">
      <h1>My Recent Works</h1>
      <div className="works-list-container">
        {projects.map((project) => (
          <div key={project.id} className="works-item">
            <img src={project.image} alt={project.title} />
            <div className="works-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
