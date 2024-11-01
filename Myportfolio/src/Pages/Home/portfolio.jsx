import "./portfolio.css";
import ravinduimg from "../../Images/ravinduimg.png";
import { FaHireAHelper } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="portfolio">
        <h1>about</h1>
        <div className="container">
          <div className="flexbox1">
            <div className="myp">
              <h1 className="profile">
                <b>Hey, I&apos;m Ravindu Lakshitha</b>
              </h1>
              <h2 className="role">I&apos;m a Full Stack Developer</h2>
            </div>
            <div className="content">
              <p>
                I&apos;m a full stack developer with experience in building web
                applications using Java, React, Node.js, and other modern
                technologies. I&apos;m currently looking for new opportunities,
                so feel free to reach out!
              </p>
            </div>
            <button className="hirebtn">
              <FaHireAHelper size={25} />
              ire Me
            </button>
          </div>

          <div className="flexbox2">
            <img src={ravinduimg} alt="Ravindu img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
