import { useRef, useEffect } from "react";

import "./techstack.css";
import Html from "../../Images/html.png";
import Css from "../../Images/css.png";
import Js from "../../Images/js.png";
import C from "../../Images/c.png";
import Java from "../../Images/Java.png";
import Python from "../../Images/python.png";
import Node from "../../Images/node.png";
import PHP from "../../Images/PHP.png";
import Laravel from "../../Images/Larvel.png";
import ReactImg from "../../Images/react.png";
import Bootstrap from "../../Images/bootsrap.png";
import Tailwind from "../../Images/tailwind.png";
import Mongo from "../../Images/mongo.png";
import MySQL from "../../Images/mysql.png";
import MUI from "../../Images/mui.png";
import Firebase from "../../Images/firebase.png";
import Git from "../../Images/git.png";
import Github from "../../Images/github.png";

const techStackData = [
  { img: Html, name: "HTML" },
  { img: Css, name: "CSS" },
  { img: Js, name: "JavaScript" },
  { img: C, name: "C" },
  { img: Java, name: "Java" },
  { img: Python, name: "Python" },
  { img: Node, name: "Node.js" },
  { img: PHP, name: "PHP" },
  { img: Laravel, name: "Laravel" },
  { img: ReactImg, name: "React" },
  { img: Tailwind, name: "Tailwind CSS" },
  { img: Bootstrap, name: "Bootstrap" },
  { img: MUI, name: "MUI" },
  { img: Mongo, name: "MongoDB" },
  { img: MySQL, name: "MySQL" },
  { img: Firebase, name: "Firebase" },
  { img: Git, name: "Git" },
  { img: Github, name: "GitHub" },
];

const TechStack = () => {
  const techItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      techItemsRef.current.forEach((item) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            item.classList.add("visible"); // Add class for animation
          } else {
            item.classList.remove("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="tech-stack" className="tech">
      <h2>My Tech Stack</h2>
      <div className="languages">
        {techStackData.map((tech, index) => (
          <div
            key={index}
            className="tech-item"
            ref={(el) => (techItemsRef.current[index] = el)}
          >
            <img src={tech.img} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
