import { useEffect, useRef } from "react";
import "./portfolio.css";
import ravinduimg from "../../Images/ravinduimg.png";
import { FaHireAHelper } from "react-icons/fa";

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
          // Add animation classes when the portfolio section is in view
          portfolioRef.current.classList.add("animate-portfolio");
          containerRef.current.classList.add("animate-container");
          flexbox1Ref.current.classList.add("animate-flexbox1");
          flexbox2Ref.current.classList.add("animate-flexbox2");
        } else {
          // Remove animation classes when the portfolio section is out of view
          portfolioRef.current.classList.remove("animate-portfolio");
          containerRef.current.classList.remove("animate-container");
          flexbox1Ref.current.classList.remove("animate-flexbox1");
          flexbox2Ref.current.classList.remove("animate-flexbox2");
        }
      },
      { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    const element = portfolioRef.current;
    if (element) observer.observe(element);

    // Store the refs in variables to avoid issues with cleanup
    const roleElement = roleRef.current;
    const hirebtnElement = hirebtnRef.current;

    // Observer for "role" and "hirebtn" elements
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
      // Cleanup observers
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
        <span></span>
        {/* Other wrapper spans */}
      </div>
      <div id="portfolio" className="portfolio" ref={portfolioRef}>
        <h1>about</h1>
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
            <button className="hirebtn" ref={hirebtnRef} onClick={scrollToContact}>
              <FaHireAHelper size={25} />
              Hire Me
            </button>
          </div>

          <div className="flexbox2" ref={flexbox2Ref}>
            <img src={ravinduimg} alt="Ravindu img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
