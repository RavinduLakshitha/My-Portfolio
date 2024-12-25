import { useRef, useEffect, handleScroll } from "react";

import "./techstack.css";
import Html from "../../Images/html.png";
import Css from "../../Images/css.png";
import Js from "../../Images/js.png";
import C from "../../Images/c.png";
import Java from "../../Images/Java.png";
import Python from "../../Images/python.png";
import node from "../../Images/node.png";
import php from "../../Images/PHP.png";
import larvel from "../../Images/Larvel.png";
import react from "../../Images/react.png";
import boot from "../../Images/bootsrap.png";
import Tail from "../../Images/tailwind.png";
import Mong from "../../Images/mongo.png";
import Mys from "../../Images/mysql.png";
import MUI from "../../Images/mui.png";
import Fire from "../../Images/firebase.png";
import Git from "../../Images/git.png";
import Ghub from "../../Images/github.png";

const TechStack = () => {
  const techItemsRef = useRef([]);

  useEffect(() => {
    const currentRefs = techItemsRef.current; // Copy ref values to a local variable
    currentRefs.forEach((item) => {
      if (item) {
        const handleScroll = () => {
          const rect = item.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            item.classList.add("visible"); // Add class for animation
          } else {
            item.classList.remove("visible");
          }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call initially to set the state
      }
    });

    // Cleanup function
    return () => {
      currentRefs.forEach((item) => {
        if (item) {
          window.removeEventListener("scroll", handleScroll);
        }
      });
    };
  }, []);
  return (
    <div id="tech-stack" className="tech">
    My Tech Stack
    <div className="languages">
      {[Html, Css, Js, C, Java, Python, node, php, larvel, react, Tail, boot, MUI, Mong, Mys, Fire, Git, Ghub].map((img, index) => (
        <div
          key={index}
          className="tech-item"
          ref={(el) => (techItemsRef.current[index] = el)}
        >
          <img src={img} alt={`Tech ${index}`} />
          <p>{img.split("/").pop().split(".")[0]}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default TechStack;
