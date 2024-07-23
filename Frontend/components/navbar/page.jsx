"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
// import Hero from "public/hero.svg";
// import styles from "./navbar.module.css";
// import NextTopLoader from "nextjs-toploader";
// import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Notes",
    url: "/notes",
  },
  {
    id: 3,
    title: "Events",
    url: "/events",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  { id: 5, title: "Contact", url: "/contact" },
  {
    id: 6,
    title: "Opportunities",
    url: "/opportunities",
  },
];

const Navbar = () => {
  const { isSignedIn, userId } = useAuth();
  return (
    <div className="navbar bg-base-100 text-white xs:w-full  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a href="/" className="btn btn-ghost text-xl">
          CC
        </a>
      </div>
      <div className="navbar-end mr-2">
        <ul className="flex gap-6 items-center justify-center">
          {!isSignedIn ? (
            <>
              <Link href="/sign-in">
                <li>Sign In</li>
              </Link>
              <Link href="/sign-up">
                <li>Sign Up</li>
              </Link>
            </>
          ) : (
            <>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
//     <nav className="w-full bg-base-100 px-4 py-8 flex items-center justify-between navbar">
//       <h1>CC</h1>
//     </nav>
// )

export default Navbar;
