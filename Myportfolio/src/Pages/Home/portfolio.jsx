import { useEffect, useRef } from "react";
import "./portfolio.css";
import ravinduimg from "../../Images/ravinduimg.png";
import { FaHireAHelper } from "react-icons/fa";
import CV from "../../Images/CV.pdf"; // Ensure correct import path for CV

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const containerRef = useRef(null);
  const flexbox1Ref = useRef(null);
  const flexbox2Ref = useRef(null);
  const roleRef = useRef(null); // Reference for the "role" element
  const hirebtnRef = useRef(null); // Reference for the "hirebtn" element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          portfolioRef.current.classList.add("animate-portfolio");
          containerRef.current.classList.add("animate-container");
          flexbox1Ref.current.classList.add("animate-flexbox1");
          flexbox2Ref.current.classList.add("animate-flexbox2");
        } else {
          portfolioRef.current.classList.remove("animate-portfolio");
          containerRef.current.classList.remove("animate-container");
          flexbox1Ref.current.classList.remove("animate-flexbox1");
          flexbox2Ref.current.classList.remove("animate-flexbox2");
        }
      },
      { threshold: 0.2 }
    );

    const element = portfolioRef.current;
    if (element) observer.observe(element);

    const roleElement = roleRef.current;
    const hirebtnElement = hirebtnRef.current;

    const roleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          roleElement.classList.add("animate-role");
        } else {
          roleElement.classList.remove("animate-role");
        }
      },
      { threshold: 0.2 }
    );

    const hirebtnObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hirebtnElement.classList.add("animate-hirebtn");
        } else {
          hirebtnElement.classList.remove("animate-hirebtn");
        }
      },
      { threshold: 0.2 }
    );

    if (roleElement) roleObserver.observe(roleElement);
    if (hirebtnElement) hirebtnObserver.observe(hirebtnElement);

    return () => {
      if (roleElement) roleObserver.unobserve(roleElement);
      if (hirebtnElement) hirebtnObserver.unobserve(hirebtnElement);
      if (element) observer.unobserve(element);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="wrapper">
        <span className="span-deco"></span>
        <span className="span-deco"></span>
        {/* Add more spans for decoration if needed */}
      </div>
      <div id="portfolio" className="portfolio" ref={portfolioRef}>
        <h1>About</h1>
        <div className="container" ref={containerRef}>
          <div className="flexbox1" ref={flexbox1Ref}>
            <div className="myp">
              <h1 className="profile">
                <b>Hey, I&apos;m Ravindu Lakshitha</b>
              </h1>
              <h2 className="role" ref={roleRef}>
                I&apos;m a Full Stack Developer
              </h2>
            </div>
            <div className="content">
              <p>
                I&apos;m a full stack developer with experience in building web
                applications using Java, React, Node.js, and other modern
                technologies. I&apos;m currently looking for new opportunities,
                so feel free to reach out!
              </p>
            </div>
            <div className="buttons">
              <button
                className="hirebtn"
                ref={hirebtnRef}
                onClick={scrollToContact}
              >
                <FaHireAHelper size={25} />
                Hire Me
              </button>
              <button className="hirebtn">
                <a href={CV} download="Ravindu_Lakshitha_CV">
                  Download CV
                </a>
              </button>
            </div>
          </div>
          <div className="flexbox2" ref={flexbox2Ref}>
            <img src={ravinduimg} alt="Ravindu Lakshitha" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
