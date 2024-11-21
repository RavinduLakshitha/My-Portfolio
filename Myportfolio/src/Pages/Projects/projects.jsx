import "./projects.css";
// import ravinduimg from "../../Images/ravinduimg.png";
import InternxHero from "../../Images/InternXHero.png";
import React from "../../Images/react.png";
import Mongo from "../../Images/mongo.png";
import Expross from "../../Images/express-js.png";
import Node from "../../Images/node.png";
import BTS from "../../Images/bootsrap.png";
import MUI from "../../Images/mui.png";
import Tskmngmt from "../../Images/taskmng.png";
import Php from "../../Images/PHP.png";
import Laravel from "../../Images/Larvel.png";
import Mysql from "../../Images/mysql.png";
import LHAS from "../../Images/Lecture.png";
// import CV from "../CV/CV";
import Layout from "../../Component/Layout/layout";


const Project = () => {
  return (
    <>
    <Layout>
      <div id="projects" className="topic">
        My Projects
        <div className="card">
          <div className="InternX">
            <img className="Images1" src={InternxHero} alt="internx Hero" />
            <h5 className="card-title">InternX</h5>
            <p className="card-text">
              InternX is a MERN stack web application designed to connect Sri
              Lankan University students with IT internships. It provides
              filters for skills, location, and duration, making it easy for
              students to find relevant opportunities. Additionally, the
              platform offers personalized internship suggestions, enhancing the
              user experience.
            </p>
            <div className="Technologies" style={{paddingBottom: "15px", paddingTop:"48px"}}>
              <img src={React} alt="react" />
              <img src={Mongo} alt="mongo" />
              <img src={Expross} alt="express" />
              <img src={Node} alt="node" />
              <img src={BTS} alt="bts" />
              <img src={MUI} alt="mui" />
            </div>
          </div>

          {/* Task Managment App */}
          <div className="Taskmng">
            <img
              className="Images"
              src={Tskmngmt}
              alt="Task mngmnt"
              style={{ height: " 250px" }}
            />
            <h5 className="card-title">Task Managment Application</h5>
            <p className="card-text">
              Developed a task management application for the Faculty of
              Geometrics at Sabaragamuwa University of Sri Lanka. The app
              monitors project progress and manages financial aspects, offering
              an efficient solution for tracking tasks and budgeting. The
              application ensures scalability, reliability, and ease of use for
              faculty members.
            </p>
            <div className="Technologies">
              <img src={Php} alt="php" />
              <img src={Laravel} alt="larvel" />
              <img src={Mysql} alt="mysql" />
              <img src={BTS} alt="bts" />
              <img src={MUI} alt="mui" />
            </div>
          </div>

          {/* lecture hall allocation system */}
          <div className="InternX">
            <img
              className="Images"
              src={LHAS}
              alt="lecturehall"
              style={{ height: " 250px" }}
            />
            <h5 className="card-title">Lecture Hall Allocation Sysytem</h5>
            <p className="card-text">
              The lecture hall allocation system streamlines the scheduling and
              management of lecture hall resources by efficiently assigning
              halls based on course requirements, student capacity, and
              availability. It reduces scheduling conflicts and enhances overall
              management, ensuring scalability, flexibility, and ease of use for
              university administrators.
            </p>
            <div className="Technologies">
              <img src={React} alt="react" />
              <img src={Mongo} alt="mongo" />
              <img src={Expross} alt="express" />
              <img src={Node} alt="node" />
              <img src={BTS} alt="bts" />
              <img src={MUI} alt="mui" />
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Project;
