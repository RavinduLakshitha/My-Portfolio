import { useEffect, useRef } from "react";
import "./projects.css";
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
import Layout from "../../Component/Layout/layout";

const Project = () => {
  // Create reference for the cards
  const projectRef = useRef([]);

  // Add the observer to animate all the cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Loop through each entry (card)
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section");
          } else {
            entry.target.classList.remove("animate-section");
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe each card element
    projectRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    // Cleanup observer when component unmounts
    return () => {
      projectRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <>
      <Layout>
        <div id="projects" className="topic">
          My Projects
          <div className="card">
            {/* InternX Project */}
            <div
              className="InternX"
              ref={(el) => (projectRef.current[0] = el)}
            >
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
              <div className="Technologies" style={{ paddingBottom: "15px", paddingTop: "48px" }}>
                <img src={React} alt="react" />
                <img src={Mongo} alt="mongo" />
                <img src={Expross} alt="express" />
                <img src={Node} alt="node" />
                <img src={BTS} alt="bts" />
                <img src={MUI} alt="mui" />
              </div>
            </div>

            {/* Task Management App */}
            <div
              className="InternX"
              ref={(el) => (projectRef.current[1] = el)}
            >
              <img
                className="Images"
                src={Tskmngmt}
                alt="Task mngmnt"
                style={{ height: "250px" }}
              />
              <h5 className="card-title">Task Management Application</h5>
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

            {/* Lecture Hall Allocation System */}
            <div
              className="InternX"
              ref={(el) => (projectRef.current[2] = el)}
            >
              <img
                className="Images"
                src={LHAS}
                alt="lecturehall"
                style={{ height: "250px" }}
              />
              <h5 className="card-title">Lecture Hall Allocation System</h5>
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
