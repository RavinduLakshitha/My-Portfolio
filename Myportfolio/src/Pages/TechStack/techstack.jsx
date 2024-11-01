import "./techstack.css";
import Html from "../../Images/html.png";
import Css from "../../Images/css.png";
import Js from "../../Images/js.png";
import C from "../../Images/c.png";
import Java from "../../Images/java.png";
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
  return (
    <>
      <div id="tech-stack" className="tech">
        <h1>My Tech Stack</h1>
        <div className="languages">
          <div className="tech-item">
            <img src={Html} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="tech-item">
            <img src={Css} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="tech-item">
            <img src={Js} alt="Js" />
            <p>JavaScript</p>
          </div>
          <div className="tech-item">
            <img src={C} alt="c" />
            <p>C</p>
          </div>
          <div className="tech-item">
            <img src={Java} alt="Java" />
            <p>Java</p>
          </div>
          <div className="tech-item">
            <img src={Python} alt="python" />
            <p>Python</p>
          </div>
          <div className="tech-item">
            <img src={node} alt="js" />
            <p>NodeJS</p>
          </div>
          <div className="tech-item">
            <img src={php} alt="php" />
            <p>PHP</p>
          </div>
          <div className="tech-item">
            <img src={larvel} alt="lrvl" />
            <p>Laravel</p>
          </div>
          <div className="tech-item">
            <img src={react} alt="react" />
            <p>React</p>
          </div>
          <div className="tech-item">
            <img src={Tail} alt="tail" />
            <p>Tailwind</p>
          </div>
          <div className="tech-item">
            <img src={boot} alt="boot" />
            <p>Bootstrap</p>
          </div>
          <div className="tech-item">
            <img src={MUI} alt="mui" />
            <p>MUI</p>
          </div>
          <div className="tech-item">
            <img src={Mong} alt="mongo" />
            <p>MongoDB</p>
          </div>
          <div className="tech-item">
            <img src={Mys} alt="mys" />
            <p>My SQL</p>
          </div>
          <div className="tech-item">
            <img src={Fire} alt="firebase" />
            <p>Firebase</p>
          </div>
          <div className="tech-item">
            <img src={Git} alt="git" />
            <p>Git</p>
          </div>
          <div className="tech-item">
            <img src={Ghub} alt="github" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
