import Image from "next/image";
import React from "react";

import logo from "../assets/navbar/logo.svg";
import userPlaceholder from "../assets/navbar/image-avatar.png";
import homeIcon from "./svg/HomeIcon";
import movieIcon from "./svg/MovieIcon";
import tvIcon from "./svg/TVIcon";
import bookmarkIcon from "./svg/BookmarkIcon";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex justify-between py-4.5 px-4 bg-semi-dark-blue">
      <Link href="/">
        <a className="relative w-6 h-5">
          <Image src={logo} layout="fill" objectFit="cover" alt="logo" />
        </a>
      </Link>
      <ul className="flex gap-6">
        {links.map((l, i) => (
          <li key={i}>
            <Link href={l.path}>
              <a
                className={`relative block w-4 aspect-square ${
                  router.pathname === l.path
                    ? "text-white"
                    : "text-greyish-blue"
                }`}>
                <l.imgComponent />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative w-6 h-6">
        <Image
          src={userPlaceholder}
          layout="fill"
          objectFit="cover"
          alt="logo"
        />
      </div>
    </nav>
  );
}

const links = [
  {
    path: "/",
    imgComponent: homeIcon,
  },
  {
    path: "/movies",
    imgComponent: movieIcon,
  },
  {
    path: "/tv-series",
    imgComponent: tvIcon,
  },
  {
    path: "/bookmarks",
    imgComponent: bookmarkIcon,
  },
];

export default Navbar;
