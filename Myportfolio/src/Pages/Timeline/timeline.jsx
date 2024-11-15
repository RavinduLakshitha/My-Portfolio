import "./timeline.css";
import Susl from "../../Images/susl.png";
import scc from "../../Images/SCC.png";
import smv from "../../Images/SMV.png";

const Timeline = () => {
  return (
    <>
      <div className="timeline" id="timeline">
        <h1>Time Line</h1>
        <div className="container">
          <div className="flexbox02"></div>
          <div className="flexbox01">
            <div className="higher">
              <img className="photo" src={Susl} alt="susl logo" />
              <h2>
                <b>BSc. Honours Degree in Software Engineering</b>
              </h2>
              <h3>
                Department of Software Engineering <br /> Faculty of Computing{" "}
                <br />
                sabaragamuwa University of Sri Lanka
              </h3>
              <h1>2021 - 2025</h1>
            </div>
            <div className="Secondry">
            <img className="photo" src={scc} alt="SCC logo" />
              <h2>
                <b>GCE Advanced Level</b>
              </h2>
              <h3>
              Senanayake National College <br /> Madampe
              </h3>
              <h1>2019</h1>
            </div>
            <div className="Secondry">
            <img className="photo" src={smv} alt="SMV logo" />
              <h2>
                <b>GCE Ordinary Level</b>
              </h2>
              <h3>
              Saranath National College <br /> Kuliyapitiya
              </h3>
              <h1>2015</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
