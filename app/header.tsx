"use client";

import Image from "next/image";
import Button from "./components/Button";
import Logo from "@/public/Logo/Logo.svg";
import LogoColored from "@/public/Logo/colored-logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClicked = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // cleanup (important!)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setHidden(true); // scrolling down → hide
      } else {
        setHidden(false); // scrolling up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <main>
      <header
        className={` w-full transition-transform duration-300 fixed top-0 z-10 ${hidden ? "-translate-y-20" : " translate-y-0"}`}
      >
        <div
          className={`${lastScrollY ? "bg-[#1f1f1f]" : "bg-[#033271]/40"} 2xl:px-40 lg:px-10 md:px-8 px-5 2xl:py-0 md:py-2 sm:py-3 py-3  backdrop-blur-2xl flex justify-center shadow-sm fixed top-0 w-full z-10`}
        >
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <div>
                <Image
                  src={Logo}
                  alt="LeadGenInsder.Official.Logo"
                  className="w-45"
                />
              </div>
            </Link>

            {/* NAV MENU */}
            <ul className="items-center gap-12 2xl:flex xl:flex lg:hidden md:hidden sm:hidden hidden">
              <Link
                href="/whyleadgeninsider"
                scroll
                className="text-[15px] font-nomal text-white"
              >
                <li className="cursor-pointer tracking-wider text-white">
                  Why Us
                </li>
              </Link>
              <Navbar />
              <Link href="/pricing" className="text-[15px] font-nomal">
                <li className="cursor-pointer tracking-wider text-white">
                  Pricing
                </li>
              </Link>
              <Link href="/ourTeam" className="text-[15px] font-normal">
                <li className="cursor-pointer tracking-wider text-white">
                  Our Team
                </li>
              </Link>
              <Link href="/aboutUs" className="text-[15px] font-normal">
                <li className="cursor-pointer tracking-wider text-white">
                  About Us
                </li>
              </Link>
            </ul>

            <div className="2xl:flex xl:flex lg:hidden md:hidden sm:hidden hidden">
              {/* RIGHT BUTTON */}
              <Button
                title="Let’s Talk"
                style="primary-btn"
                link="/contact"
                align=""
              />
            </div>

            {/* MOBILE */}
            <div className="2xl:hidden xl:hidden lg:flex md:flex sm:flex flex items-center justify-between z-10">
              {/* MENU BUTTON */}
              <button onClick={toogleMenu} className="flex justify-center">
                {isOpen ?
                  <span className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#fff"
                      className="size-15 p-4 bg-slate-700/20 rounded-full transition-all ease-in-out duration-200"
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
                      stroke="#fff"
                      className="size-15 p-4 bg-slate-700/20 rounded-full transition-all ease-in-out duration-200"
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
              <div className="absolute top-0 left-0 w-full">
                <ul className="bg-white shadow-2xl 2xl:hidden xl:hidden lg:grid md:grid sm:grid grid px-5 py-5 w-full">
                  <Link href="/">
                    <div>
                      <Image
                        src={LogoColored}
                        alt="LeadGenInsder.Official.Logo"
                        className="w-45"
                      />
                    </div>
                  </Link>
                  <div className="grid mt-10 w-full">
                    <Link
                      href="/whyleadgeninsider"
                      onClick={handleClicked}
                      scroll
                      className="text-[#0c274a] border-b w-full pb-5 pt-7 flex items-center leading-none text-xl cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                    >
                      Why LeadGenInsider
                    </Link>
                    <Link
                      href="/pricing"
                      onClick={handleClicked}
                      className="text-[#0c274a] border-b w-full pb-5 pt-7 flex items-center leading-none text-xl cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/blog"
                      onClick={handleClicked}
                      className="text-[#0c274a] border-b w-full pb-5 pt-7 flex items-center leading-none text-xl cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/aboutUs"
                      onClick={handleClicked}
                      className="text-[#0c274a] border-b w-full pb-5 pt-7 flex items-center leading-none text-xl cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/ourTeam"
                      onClick={handleClicked}
                      className="text-[#0c274a] border-b w-full pb-5 pt-7 flex items-center leading-none text-xl cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/faqs"
                      onClick={handleClicked}
                      className="text-[#0c274a] w-full pb-5 pt-7 flex items-center leading-none text-xl cursor-pointer hover:text-[#004aad] transition-all ease-in-out duration-300"
                    >
                      FAQ&apos;s
                    </Link>
                  </div>
                </ul>
              </div>
            : null}
          </div>
        </div>
      </header>
    </main>
  );
}
