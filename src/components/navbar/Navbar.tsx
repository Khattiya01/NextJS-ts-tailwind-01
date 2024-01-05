import Link from "next/link";
import Links from "./links/Links";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <Link href={"/"}>
        <div className="logo-navbar">Logo</div>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
