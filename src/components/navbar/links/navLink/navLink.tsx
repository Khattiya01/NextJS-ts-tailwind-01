"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkType = {
  item: { path: string; title: string };
};
const NavLink = ({ item }: NavLinkType) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`navlinks-navbar ${
        pathName === item.path && "navlinks-navbar-active"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
