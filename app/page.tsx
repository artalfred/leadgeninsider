"use client";

import Button from "./components/Button";
import Container from "./components/Container";
import Image from "next/image";
import Content from "./components/Content";
import Checked from "../public/Icon/Checked.svg";
import Domain from "@/public/Icon/Domain.svg";
import InboxManagementIcon from "@/public/Icon/InboxManagementIcon.svg";
import InboxManagement from "@/public/Icon/InboxManagement.svg";
import DomainSetup from "@/public/Icon/DomainSetup.svg";
import WhyThisWorks from "@/public/SetupProcess/WhyThisWorks.png";
import Deals from "@/public/Home/Deals.jpeg";
import CardBox from "./components/CardBox";
import SetupProcess, { SetupProcessMobile } from "./components/SetupProcess";
import Infrastructure from "@/public/INFRASTRUCTURESETUP.svg";
import { useRef, useState } from "react";
import useClickedOutside from "./components/hooks/useClickOutside";
import HowToGetStarted from "./components/HowToGetStarted";
import ServicesOverview from "./components/ServicesOverview";
import OurSetupprocess from "./components/OurSetupProcess";
import PartnershipDeals from "./components/PartnershipDeals";
import SectionTitle from "./components/SectionTitle";

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
    <>
      <div className="max-w-7xl mx-auto 2xl:pt-0 md:py-0 sn:py-0 py-0 relative isolate overflow-hidden lg:overflow-visible lg:px-0 sm:px-4 px-4 grid 2xl:gap-20 md:gap-15 sm:gap-10 gap-10 justify-center 2xl:mt-60 mt-40">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
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
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/50">
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
        <div className="grid gap-6">
          <h1 className="text-center 2xl:text-[80px]/24 lg:text-6xl md:text-4xl sm:text-3xl text-3xl text-white">
            High-volume email infrastructure, Built for{" "}
            <span className="text-gray-400">long-term deliverability.</span>
          </h1>

          <Content
            style="text-center"
            content="Automated email infrastructure that scales without risking deliverability."
          />
          <div className="2xl:flex md:grid sm:grid grid gap-4 justify-center">
            <Button
              title="Get Started"
              style="primary-btn"
              link="/contact"
              align="flex justify-center"
            ></Button>

            <Button
              title="View Infrastructure Setup"
              style="secondary-btn"
              link=""
              align=""
              click={handleClickedOpen}
            ></Button>
          </div>
        </div>

        <div className="grid place-items-center gap-6">
          <div className="p-3 lg:p-6 bg-amber-50/10 rounded-2xl w-full max-w-5xl">
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
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
        </div>
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

      {/* Services Overview */}
      <ServicesOverview />

      {/* Our Setup Process (Step-by-Step) */}
      <OurSetupprocess />

      {/* PARTNERSIP / COMMISION-BASED DEALS */}
      {/* <PartnershipDeals /> */}

      {/*Why This Works */}
      <div className="max-w-7xl mx-auto 2xl:px-0 md:px-6 sm:px-6 px-4">
        <div className="grid 2xl:pt-20 md:pt-20 sm:pt-20 pt-20 2xl:pb-20 md:pb-20 sm:pb-0 pb-0">
          <div className="grid justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
            <div>
              <div className="flex gap-6 items-center">
                <SectionTitle
                  title="Why This Works"
                  style=""
                  titleStyle="text-white"
                />
              </div>
              <div className="grid 2xl:mt-6 md:mt-4 sm:mt-2 mt-2">
                <ul className="grid gap-2 mt-2">
                  <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={18} />
                    <span className="text-gray-400">
                      One domain instead of hundreds
                    </span>
                  </li>
                  <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={18} />
                    <span className="text-gray-400">
                      Automation-based subdomain & DNS setup
                    </span>
                  </li>
                  <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={18} />
                    <span className="text-gray-400">
                      Deliverability-first architecture
                    </span>
                  </li>
                  <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={18} />
                    <span className="text-gray-400">
                      Built for agencies and high-volume senders
                    </span>
                  </li>
                  <li className="2xl:text-xl md:text-lg sm:text-lg text-lg mt-7 text-white">
                    This is how our clients safely operate{" "}
                    <span className="text-green-600">500–1,500+ inboxes </span>
                    at scale.
                  </li>
                </ul>

                <Button
                  title="Send us a message – we reply in minutes."
                  style="primary-btn mt-4"
                  link="/contact"
                  align="flex justify-start"
                ></Button>
              </div>
            </div>

            <div className="flex 2xl:justify-end lg:justify-start md:justify-start sm:justify-center justify-center">
              <Image src={WhyThisWorks} alt="Image" height={380} />
            </div>
          </div>
        </div>
      </div>

      {/* HOW TO GET STARTED */}
      <HowToGetStarted />
    </>
  );
}
