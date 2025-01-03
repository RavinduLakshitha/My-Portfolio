import { useEffect, useRef } from "react";
import "./contact.css";
import Swal from "sweetalert2";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Contactme = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const contactElement = contactRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactElement.classList.add("animate");
        } else {
          contactElement.classList.remove("animate");
        }
      },
      { threshold: 0.5 }
    );

    if (contactElement) {
      observer.observe(contactElement);
    }

    return () => {
      if (contactElement) {
        observer.unobserve(contactElement);
      }
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8df88466-0e89-4129-927b-3105ccc49fbc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="contact" id="contact" ref={contactRef}>
      <h1>Contact Me</h1>
      <div
        className="container"
        style={{
          border: "2px solid",
          borderColor: "rgb(52, 235, 235)",
          borderRadius: "10px",
        }}
      >
        <div className="flexbox002">
          <h2>Let’s Connect!</h2>
          <h4>I’d love to hear from you!</h4>
          <div className="conicin">
            <div className="call">
              <IoCall className="icon" />
              0702502962
            </div>
            <div className="email">
              <MdEmail className="icon" />
              ravindulakshitha250@gmail.com
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/ravindulakshitha"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <FaLinkedin className="icon" /> Ravindu Lakshitha
              </a>
            </div>
            <div className="facebook">
              <a
                href="https://www.facebook.com/ravindu.lakshitha.9659"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <FaFacebook className="icon" /> Ravindu Lakshitha
              </a>
            </div>
          </div>
        </div>
        <div className="flexbox001">
          <form className="contform" onSubmit={onSubmit}>
            <div className="clx">
              <label>Enter your name:</label>
              <input className="inbox" type="text" name="name" required />
            </div>
            <div className="clx">
              <label>Enter your email:</label>
              <input className="inbox" type="text" name="email" required />
            </div>
            <div className="clx">
              <label>Enter your Message:</label>
              <textarea className="inbox" name="massage" required />
            </div>
            <button className="subbtn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
