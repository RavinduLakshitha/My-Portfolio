import "./contact.css";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
    // You can also perform other actions, like sending data to an API.
  };

  return (
    <>
      <div className="contact" id="contact">
        Contact Me
        <div
          className="container"
          style={{
            border: "2px solid",
            borderColor: "rgb(52, 235, 235)",
            borderRadius: "10px",
          }}
        >
          <div className="flexbox002">
            Let’s Connect!
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
            <form className="contform" onSubmit={handleSubmit}>
              <div className="clx1">
                <label>Enter your name:</label>
                <input
                  className="inbox"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="clx">
                <label>Enter your email:</label>
                <input
                  className="inbox"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="clx">
                <label>Enter your Massage:</label>
                <input
                  className="inbox"
                  type="text"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <button className="subbtn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
