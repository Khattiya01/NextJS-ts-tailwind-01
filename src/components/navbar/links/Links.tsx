"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";

const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState<boolean>(false);
  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className="c">
      <div className="links-navbar">
        {links.map((link) => (
          <NavLink item={link} key={link.path} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="logout-navbar">Logout</button>
          </>
        ) : (
          <NavLink
            item={{
              path: "/login",
              title: "Login",
            }}
          />
        )}
      </div>
      <button onClick={() => setOpen(!open)} className="menu-button-navbar">
        Menu
      </button>
      {open && (
        <div className="mobileLinks-navbar">
          {links.map((link) => (
            <NavLink key={link.path} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
