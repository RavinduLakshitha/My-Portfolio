import "./navbar.css";

const NavbarCom = () => {
  return (
    <>
      <div className="navbar">
        <nav className="navbar-container">
          <div className="ravindu">Ravindu</div>
          <ul className="other">
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Timeline</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <a href="javascript:void(0);" className="icon" onClick={NavbarCom}>
              <i className="fa fa-bars"></i>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarCom;
