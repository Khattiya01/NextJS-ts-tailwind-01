import Links from "./links/Links";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="logo-navbar">Logo</div>
      <div >
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
