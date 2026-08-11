"use client";

import Button from "./components/Button";
import Image from "next/image";
import Content from "./components/Content";
import Infrastructure from "@/public/INFRASTRUCTURESETUP.svg";
import { useRef, useState } from "react";
import useClickedOutside from "./components/hooks/useClickOutside";
import HowToGetStarted from "./components/HowToGetStarted";
import OurSetupprocess from "./components/OurSetupProcess";

import Pricing from "./pricing/page";
import ShowCase from "./components/ShowCase";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useClickedOutside(menuRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleClickedOpen = () => {
    setIsOpen(true);
  };

  const handleClickedClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="bg-slate-950 h-screen 2xl:pt-0 md:py-0 sn:py-0 py-0 relative isolate overflow-hidden lg:overflow-visible lg:px-0 sm:px-4 px-4 grid 2xl:gap-20 md:gap-15 sm:gap-10 gap-10">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute bg-[#5e17eb]/50 top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-300/15"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-[#521e96]/50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="grid items-center justify-center">
          <div className="grid gap-10">
            <div className="grid 2xl:gap-4 md:gap-2 gap-2">
              <h1 className="title text-center 2xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl text-3xl text-white">
                High-volume email infrastructure
              </h1>

              <h6 className="title text-gray-400 font-normal 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl text-center">
                Built for long-term deliverability.
              </h6>

              <Content
                style="text-center"
                content="Automated email infrastructure that scales without risking deliverability."
              />
            </div>
            <div className="w-full flex 2xl:flex items-center justify-center gap-4">
              <Button
                title="Get Started"
                style="primary-btn"
                link="/contact"
              ></Button>

              <Button
                title="View Infrastructure Setup"
                style="secondary-btn"
                link=""
                click={handleClickedOpen}
              ></Button>
            </div>
          </div>
        </div>

        {/* <div className="grid place-items-center gap-6 z-0">
          <div className="p-3 lg:p-6 bg-amber-50/10 rounded-2xl w-full max-w-4xl">
            <div className="aspect-video w-full overflow-hidden rounded-2xl z-0">
              <iframe
                src="https://www.youtube.com/embed/u_UIlRaA3x0?rel=0&modestbranding=0"
                className="w-full h-full"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div> */}
      </div>

      {/* INFRASTRUCTURE SETUP */}
      <div
        ref={menuRef}
        className={`infra 2xl:w-270 lg:w-200 md:w-[96%] sm:w-[96%] w-[96%] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${isOpen ? "scale-100" : "scale-0"} transition-all ease-in-out duration-500`}
      >
        <div className="relative p-3 shadow-2xl rounded-2xl bg-slate-800/80">
          <Image
            src={Infrastructure}
            className="rounded-2xl"
            alt="INFRASTRUCTURE SETUP"
          />
          <div className="absolute 2xl:-right-4 md:right-0 sm:right-0 right-0 -top-4">
            <button onClick={handleClickedClose}>
              <span className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#fff"
                  className="2xl:size-17 md:size-12 sm:size-12 size-12 2xl:p-4 md:p-3 sm:p-3 p-2 bg-slate-700/95 rounded-full transition-all ease-in-out duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* <PRICING /> */}
      <Pricing />

      {/* Inbox Infrastructure Setup */}
      <OurSetupprocess />

      {/* Behind the Infrastructure */}
      <ShowCase />

      {/* HOW TO GET STARTED */}
      <HowToGetStarted />
    </div>
  );
}
