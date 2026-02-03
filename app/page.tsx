"use client";

import Button from "./components/Button";
import Container from "./components/Container";
import Image from "next/image";
import Content from "./components/Content";
import Checked from "../public/Icon/Checked.svg";
import Campaign from "@/public/Icon/Campaign.svg";
import CampaignIcon from "@/public/Icon/CampaignIcon.svg";
import Domain from "@/public/Icon/Domain.svg";
import InboxManagementIcon from "@/public/Icon/InboxManagementIcon.svg";
import InboxManagement from "@/public/Icon/InboxManagement.svg";
import WebDevelopment from "@/public/Icon/WebDevelopment.svg";
import WebDevelopmentIcon from "@/public/Icon/WebDevelopmentIcon.svg";
import DomainSetup from "@/public/Icon/DomainSetup.svg";
import WhyThisWorks from "@/public/SetupProcess/WhyThisWorks.png";
import Deals from "@/public/Home/Deals.jpeg";
import CardBox from "./components/CardBox";
import SetupProcess, { SetupProcessMobile } from "./components/SetupProcess";
import Infrastructure from "@/public/INFRASTRUCTURESETUP.svg";
import { useRef, useState } from "react";
import useClickedOutside from "./components/hooks/useClickOutside";

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
      <Container>
        <div className="grid 2xl:gap-20 md:gap-15 sm:gap-10 gap-10 justify-center 2xl:mt-60 mt-40">
          <div className="grid gap-6">
            <h1 className="text-center leading-none font-bold 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-white">
              Done-for-you email infrastructure for lead gen teams&nbsp;—&nbsp;{" "}
              <span className="text-gray-300/60">without burning domains.</span>
            </h1>

            <Content
              style="text-center"
              content="We automate subdomain creation, DNS configuration, and inbox infrastructure at scale—so you can send high volumes, protect deliverability, and save significant time and costs."
            />
            <div className="2xl:flex md:grid sm:grid grid gap-4 justify-center">
              <Button
                title="Get Started"
                style="primary-btn"
                link="/contact"
                align="flex justify-center"
              ></Button>

              <button
                className="secondary-btn flex items-center gap-2 rounded-md 2xl:px-6 lg:px-6 md:px-6 sm:px-4 px-4 2xl:pt-3 lg:pt-3 md:pt-3 sm:pt-3 pt-3 2xl:pb-2 lg:pb-2 md:pb-2 sm:pb-2 pb-2 2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-medium"
                onClick={handleClickedOpen}
              >
                View Infrastructure Setup
              </button>
            </div>
          </div>

          <div className="grid gap-6 justify-center">
            <div className="2xl:p-6 lg:p-6 p-3 bg-amber-50/10 rounded-2xl flex w-fit">
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/zLxOQpdzuAI"
                  className="2xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-full 2xl:h-125 lg:h-115 md:h-100 h-42"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

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

      {/* Our Setup Process (Step-by-Step) */}
      <Container>
        <div className="grid 2xl:gap-20 lg:gap-15 md:gap-15 sm:gap-15 gap-10 pb-10 pt-20">
          <div className="flex gap-6 items-center">
            <h1 className="text-white text-start leading-normal font-black 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl">
              Our Setup Process
            </h1>

            <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-0">
              <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-10"></div>
              <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-4"></div>
            </div>
          </div>

          <SetupProcess />
          <SetupProcessMobile />

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5"></div>
        </div>
      </Container>

      {/*Why This Works */}
      <div className="max-w-7xl mx-auto 2xl:px-0 md:px-6 sm:px-6 px-4">
        <div className="grid">
          <div className="grid justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
            <div>
              <div className="flex gap-6 items-center">
                <h1 className="text-start leading-normal font-black 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl text-white">
                  Why This Works
                </h1>
              </div>
              <div className="grid 2xl:mt-6 md:mt-4 sm:mt-2 mt-2">
                <ul>
                  <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={20} />
                    <span className="mt-2 text-white">
                      One domain instead of hundreds
                    </span>
                  </li>
                  <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={20} />
                    <span className="mt-2 text-white">
                      Automation-based subdomain & DNS setup
                    </span>
                  </li>
                  <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={20} />
                    <span className="mt-2 text-white">
                      Deliverability-first architecture
                    </span>
                  </li>
                  <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={20} />
                    <span className="mt-2 text-white">
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

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto 2xl:pt-20 md:py-0 sn:py-0 py-0 relative isolate overflow-hidden lg:overflow-visible lg:px-0 sm:px-4 px-4">
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

        <div className="py-20 grid items-center 2xl:gap-20 lg:gap-15 md:gap-15 sm:gap-10 gap-10">
          <div className="flex gap-6 items-center">
            <h1 className="text-start leading-normal font-black 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl text-white">
              Services Overview
            </h1>

            <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-2">
              <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-15"></div>
              <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-6"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-6">
            <CardBox
              Title="Full Subdomain & Inbox Setup"
              Content="Scale hundreds of inboxes from one domain—automated."
              Icon={Domain}
              ImageIcon={DomainSetup}
              Style="bg-slate-900/80"
              Link="contact"
            />
            <CardBox
              Title="Inbox Management (Monthly)"
              Content="Ongoing inbox monitoring and replacement when needed."
              Icon={InboxManagementIcon}
              ImageIcon={InboxManagement}
              Style="bg-slate-900/80"
              Link="contact"
            />
            <CardBox
              Title="Managed Campaign Partnership"
              Content="Fully managed inbox and campaign setup."
              Icon={CampaignIcon}
              ImageIcon={Campaign}
              Style="bg-slate-900/80"
              Link="contact"
            />
            <CardBox
              Title="Web Development (WordPress / Framer)"
              Content="Conversion-focused websites for lead gen companies."
              Icon={WebDevelopmentIcon}
              ImageIcon={WebDevelopment}
              Style="bg-slate-900/80"
              Link="contact"
            />
          </div>
        </div>
      </div>

      {/* Partnership / Commission-Based Deals */}
      <div className="max-w-7xl mx-auto 2xl:py-10 2xl:px-0 md:px-4 sm:px-4 px-4">
        <div className="grid">
          <div className="grid justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
            <div>
              <div className="flex gap-6 items-center">
                <h1 className="text-start leading-normal font-black 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl text-white">
                  Partnership / Commission-Based Deals
                </h1>
              </div>

              <h1 className="mt-2 text-xl text-white">
                Flexible, performance-aligned partnerships.
              </h1>

              <div className="grid gap-4 mt-6">
                <div className="flex gap-6 items-center">
                  <h1 className="text-green-600 leading-normal font-black 2xl:text-3xl lg:text-3xl md:text-xl sm:text-xl text-xl">
                    Trust Strip
                  </h1>

                  <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-0 md:mt-0 sm:mt-0 mt-0">
                    <div className="h-0.5 bg-green-600 2xl:w-20 md:w-15 w-15"></div>
                    <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-6"></div>
                  </div>
                </div>

                <ul>
                  <li className="text-xl flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={20} />
                    <span className="mt-2 text-white">
                      5+ years in email marketing
                    </span>
                  </li>
                  <li className="text-xl flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={20} />
                    <span className="mt-2 text-white">
                      Thousands of inboxes deployed
                    </span>
                  </li>
                  <li className="text-xl flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={20} />
                    <span className="mt-2 text-white">
                      Smartlead & Bison compatible
                    </span>
                  </li>
                  <li className="text-xl flex items-center gap-3">
                    <Image src={Checked} alt="Checked" height={20} />
                    <span className="mt-2 text-white">
                      Deliverability-first setup
                    </span>
                  </li>
                </ul>

                <Button
                  title="Pricing"
                  style="primary-btn 2xl:mt-4"
                  link="/pricing"
                  align=""
                ></Button>
              </div>
            </div>

            <div className="flex 2xl:justify-end lg:justify-start md:justify-start sm:justify-center justify-center  2xl:mt-0 lg:mt-0 sm:mt-6 mt-6">
              <div className="2xl:p-6 lg:p-6 p-3 bg-amber-50/10 rounded-2xl w-fit">
                <div className="rounded-2xl overflow-hidden">
                  <div>
                    <Image src={Deals} alt="Hello" height={350} width={700} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW TO GET STARTED */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto 2xl:px-0 md:px-4 sm:px-4 px-4">
          <div className="grid">
            <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 gap-5">
              <div className="grid 2xl:gap-10 md:gap-7 sm:gap-7 gap-7">
                <div className="flex gap-6 justify-center items-center">
                  <h1 className="text-white 2xl:text-center md:text-start sm:text-start text-start leading-normal font-black 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl">
                    How do we get started?
                  </h1>

                  <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-0">
                    <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-10"></div>
                    <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-4"></div>
                  </div>
                </div>

                <div className="grid gap-6 justify-center">
                  <div className="2xl:p-6 lg:p-6 p-3 bg-amber-50/10 rounded-2xl flex w-fit">
                    <div className="rounded-2xl overflow-hidden">
                      <iframe
                        src="https://www.youtube.com/embed/zTwvnl77HPw"
                        className="2xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-full 2xl:h-125 lg:h-115 md:h-100 h-42"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                <div className="grid justify-center gap-4">
                  <div className="2xl:flex md:grid sm:grid grid 2xl:gap-5 md:gap-3 sm:gap-3 gap-3">
                    <Button
                      title="Book A Call"
                      style="primary-btn mt-4"
                      link="/contact"
                      align="flex justify-center"
                    ></Button>
                    <Button
                      title="Frequently Asked Questions"
                      style="secondary-btn mt-4"
                      link="/faqs"
                      align="flex justify-center"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
