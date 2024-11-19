import PropTypes from "prop-types";
import CV from "../CV/CV"; // Adjust the path based on your project structure

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <aside>
        <CV />
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
