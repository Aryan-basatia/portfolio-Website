import React from "react";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import profileImg from "../../assets/profile.png";
import "./Header.css";
const Header = () => {
  const handleHireMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const roles = [
    "Frontend Developer",
    "React Developer",
    "Java Backend Developer",
    "Full Stack Developer",
  ];

  return (
    <div id="home" className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hi! I'm</h1>
        <h2 className="fullname">Aryan Basatia</h2>
        <h2>
          A <TypingAnimation texts={roles} speed={80} displayDuration={2000} />
        </h2>
        <p>
          I'm a passionate frontend developer specializing in React with a focus
          on creating beautiful, responsive web applications. Currently
          expanding my skills into Java backend development to become a
          full-stack developer. I love building user-friendly interfaces and
          solving complex problems with clean code.
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button onClick={handleHireMe}>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
