import { useEffect } from "react";
import "./timeline.css";
import Susl from "../../Images/susl.png";
import scc from "../../Images/SCC.png";
import smv from "../../Images/SMV.png";

const Timeline = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.photo');

    const isElementInView = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
    };

    const addVisibleClass = (el) => {
      el.classList.add('scroll-visible');
    };

    const removeVisibleClass = (el) => {
      el.classList.remove('scroll-visible');
    };

    const handleScroll = () => {
      scrollElements.forEach((el) => {
        if (isElementInView(el)) {
          addVisibleClass(el);
        } else {
          removeVisibleClass(el);
        }
      });
    };

    // Handle scroll events
    window.addEventListener('scroll', handleScroll);

    // Check initially if elements are in view on page load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline" id="timeline">
      <h1>Time Line</h1>
      <div className="container_T">
        <div className="flexbox02"></div>
        <div className="flexbox01">
          <div className="higher">
            <img className="photo" src={Susl} alt="susl logo" />
            <h2><b>BSc. Honours Degree in Software Engineering</b></h2>
            <h3>Department of Software Engineering, Sabaragamuwa University of Sri Lanka</h3>
            <h1>2021 - 2025</h1>
          </div>
          <div className="Secondry">
            <img className="photo" src={scc} alt="SCC logo" />
            <h2><b>GCE Advanced Level</b></h2>
            <h3>Senanayake National College, Madampe</h3>
            <h1>2019</h1>
          </div>
          <div className="Secondry">
            <img className="photo" src={smv} alt="SMV logo" />
            <h2><b>GCE Ordinary Level</b></h2>
            <h3>Saranath National College, Kuliyapitiya</h3>
            <h1>2015</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
