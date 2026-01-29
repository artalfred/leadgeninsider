"use client";

import Image from "next/image";
import Button from "./components/Button";

import Logo from "@/public/Logo/Logo.svg";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="2xl:px-40 lg:px-30 md:px-30 px-5 sm:p-4 p-4 bg-sky-700/30 backdrop-blur-2xl flex justify-center shadow-sm fixed top-0 w-full z-10">
      {/* MENU */}
      <div className="flex justify-between items-center w-full">
        {/* LOGO */}
        <Link href="/">
          <div className="2xl:pl-0 lg:pl-0 md:pl-0 sm:pl-2 pl-2">
            <Image
              src={Logo}
              alt="LeadGenInsder.Official.Logo"
              className="2xl:w-40 lg:w-40 md:w-40 sm:w-50 w-50"
            />
          </div>
        </Link>

        {/* NAV MENU */}
        <ul className="items-center gap-12 2xl:flex lg:flex md:hidden sm:hidden hidden">
          <Link
            href="/whyleadgeninsider"
            scroll
            className="2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-medium"
          >
            <li className="cursor-pointer">Why LeadGenInsider</li>
          </Link>
          <Link
            href="/pricing"
            className="2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-medium"
          >
            <li className="cursor-pointer">Pricing</li>
          </Link>
          <Link
            href="/aboutUs"
            className="2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-normal"
          >
            <li className="cursor-pointer">About Us</li>
          </Link>
          <Link
            href="/ourTeam"
            className="2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-normal"
          >
            <li className="cursor-pointer">Our Team</li>
          </Link>
          <Link
            href="/faqs"
            className="2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-normal"
          >
            <li className="cursor-pointer">FAQ&apos;s</li>
          </Link>
        </ul>

        <div className="2xl:flex lg:flex md:hidden sm:hidden hidden">
          {/* RIGHT BUTTON */}
          <Button title="Let’s Talk" style="primary-btn" link="/contact" />
        </div>

        {/* MOBILE */}
        <div className="2xl:hidden lg:hidden md:block sm:block block">
          {/* MENU BUTTON */}
          <button onClick={toogleMenu} className="flex justify-center">
            {isOpen ?
              <span className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-17 p-4 bg-slate-700/20 rounded-full transition-all ease-in-out duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            : <span className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-17 p-4 bg-slate-700/20 rounded-full transition-all ease-in-out duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              </span>
            }
          </button>
        </div>

        {isOpen ?
          <div className="absolute top-25 left-0 w-full ">
            <ul className="bg-[#0c274a] shadow-2xl 2xl:hidden lg:hidden md:grid sm:grid grid px-5 py-5 w-full h-screen">
              <div className="absolute gap-4 grid mt-5">
                <Link
                  href="/whyleadgeninsider"
                  scroll
                  className="w-full py-3 text-2xl font-normal cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                >
                  Why LeadGenInsider
                </Link>
                <Link
                  href="/pricing"
                  className="w-full py-3 text-2xl font-normal cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                >
                  Pricing
                </Link>
                <Link
                  href="/aboutUs"
                  className="w-full py-3 text-2xl font-normal cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/ourTeam"
                  className="w-full py-3 text-2xl font-normal cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                >
                  Our Team
                </Link>
                <Link
                  href="/faqs"
                  className="w-full py-3 text-2xl font-normal cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                >
                  FAQ&apos;s
                </Link>
              </div>
            </ul>
          </div>
        : null}
      </div>
    </header>
  );
}
