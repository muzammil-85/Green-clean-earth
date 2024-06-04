import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigationbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "https://greencleanearth.org/",
    },
    {
      id: 2,
      name: "Projects",
      link: "https://greencleanearth.org/projects",
    },
    {
      id: 3,
      name: "Dashboard",
      link: "/user-dash-home",
    },
    {
      id:4,
      name:"Participant list",
      link:"/participant-list"
    },
    {
      id: 5,
      name: "Login",
      link: "/user-login",
    },
    {
      id: 6,
      name: "User Register",
      link: "/user-register",
    },
    {
      id: 7,
      name: "Register",
      link: "/register",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-green-600 mb-2 border-b-2">
      <div>
        {/* <h1 className="text-5xl ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-2xl font-bold ml-2">
          <a
            className=""
            href=""
            target="_blank"
            rel="noreferrer"
          >
            GreenCleanEarth
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => (
          <li
            key={id}
            className="nav-links px-4 py-2 cursor-pointer capitalize font-medium text-white rounded hover:scale-105 hover:text-white hover:bg-green-700 duration-200"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-20 text-white md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="z-10 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-green-600 text-white">
          {links.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navigationbar;
