"use client";

import { useState } from "react";
import Image from "next/image";
import DomainStrategy from "@/public/Icon/DomainStrategy.svg";
import SubDomainAutomation from "@/public/Icon/SubDomainAutomation.svg";
import Inboxes from "@/public/Icon/Inboxes.svg";
import Safe from "@/public/Icon/Safe.svg";

import SingleDomainStrategy from "@/public/SetupProcess/SingleDomainStrategy.jpeg";
import AutomatedSubdomainCreation from "@/public/SetupProcess/AutomatedSubdomainCreation.jpeg";
import SafeInboxScalingStrategy from "@/public/SetupProcess/SafeInboxScalingStrategy.jpeg";
import ScalableReplaceableSafe from "@/public/SetupProcess/ScalableReplaceableSafe.jpeg";

const FEATURES = [
  {
    id: "feature1",
    icon: DomainStrategy,
    title: "Single Domain Strategy",
    content_one:
      "You only need one main domain (example: Leadgeninsider.co). We automate everything else.",
    content_two:
      "Instead of buying 500 separate domains, we generate hundreds of subdomains such as:",
    list_one: "best.leadgeninsider.co",
    list_two: "try.leadgeninsider.co",
    list_three: "pro.leadgeninsider.co",
    list_four: "see.leadgeninsider.co",
    content_three:
      "Each subdomain functions as an independent sending entity, protecting deliverability.",
    image: SingleDomainStrategy || "",
  },
  {
    id: "feature2",
    icon: SubDomainAutomation,
    title: "Automated Subdomain Creation",
    content_one:
      "Automated Subdomain Scaling We instantly deploy 500+ standardized subdomains via precision scripts. By eliminating manual DNS configuration, we ensure an error-free, high-deliverability foundation built for infinite scale.",
    content_two: "",
    list_one: "Fast deployment",
    list_two: "No missed records",
    list_three: "Fully standardized setup",
    list_four: "",
    content_three: "",
    image: AutomatedSubdomainCreation || "",
  },
  {
    id: "feature3",
    icon: Inboxes,
    title: "Safe Inbox Scaling Strategy",
    content_one:
      "We assign 3 inboxes per subdomain  to balance volume and inbox safety.",
    content_two: "",
    list_one: "name.last@Leadgeninsider.co",
    list_two: "name@Leadgeninsider.co",
    list_three: "lastname@Leadgeninsider.co",
    list_four: "",
    content_three:
      "This keeps inbox behavior natural and reduces spam signals.",
    image: SafeInboxScalingStrategy || "",
  },

  {
    id: "feature4",
    icon: Safe,
    title: "Scalable, Replaceable, Safe",
    content_one:
      "If inbox health drops, we spin up new subdomains and inboxes  using the same automation—without rebuilding your entire system.",
    content_two: "",
    list_one: "Modular Recovery",
    list_two: "Zero-Downtime Scaling",
    list_three: "Reputation Firewalls",
    list_four: "Predictable ROI",
    content_three: "Result: lower costs, faster recovery, predictable scale.",
    image: ScalableReplaceableSafe || "",
  },
];

const FEATURESMOBILE = [
  {
    id: "feature1",
    icon: DomainStrategy,
    title: "1. Single Domain Strategy",
    content_one:
      "You only need one main domain (example: Leadgeninsider.co). We automate everything else.",
    content_two:
      "Instead of buying 500 separate domains, we generate hundreds of subdomains such as:",
    list_one: "best.leadgeninsider.co",
    list_two: "try.leadgeninsider.co",
    list_three: "pro.leadgeninsider.co",
    list_four: "see.leadgeninsider.co",
    content_three:
      "Each subdomain functions as an independent sending entity, protecting deliverability.",
    image: SingleDomainStrategy || "",
  },
  {
    id: "feature2",
    icon: SubDomainAutomation,
    title: "2. Automated Subdomain Creation",
    content_one:
      "Automated Subdomain Scaling We instantly deploy 500+ standardized subdomains via precision scripts. By eliminating manual DNS configuration, we ensure an error-free, high-deliverability foundation built for infinite scale.",
    content_two: "",
    list_one: "Fast deployment",
    list_two: "No missed records",
    list_three: "Fully standardized setup",
    list_four: "",
    content_three: "",
    image: AutomatedSubdomainCreation || "",
  },
  {
    id: "feature3",
    icon: Inboxes,
    title: "3. Safe Inbox Scaling Strategy",
    content_one:
      "We assign 3 inboxes per subdomain  to balance volume and inbox safety.",
    content_two: "",
    list_one: "name.last@Leadgeninsider.co",
    list_two: "name@Leadgeninsider.co",
    list_three: "lastname@Leadgeninsider.co",
    list_four: "",
    content_three:
      "This keeps inbox behavior natural and reduces spam signals.",
    image: SafeInboxScalingStrategy || "",
  },

  {
    id: "feature4",
    icon: Safe,
    title: "4. Scalable, Replaceable, Safe",
    content_one:
      "If inbox health drops, we spin up new subdomains and inboxes  using the same automation—without rebuilding your entire system.",
    content_two: "",
    list_one: "Modular Recovery",
    list_two: "Zero-Downtime Scaling",
    list_three: "Reputation Firewalls",
    list_four: "Predictable ROI",
    content_three: "Result: lower costs, faster recovery, predictable scale.",
    image: ScalableReplaceableSafe || "",
  },
];

export default function SetupProcess() {
  const [activeFeature, setActiveFeature] = useState("feature1");

  return (
    <section className="2xl:block lg:block md:hidden sm:hidden hidden">
      {/* BUTTONS */}
      <div className="flex gap-4 justify-start mb-10">
        {FEATURES.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className="px-3 py-3 rounded-xl font-medium transition flex items-center justify-center w-full hover:bg-slate-500/10 cursor-pointer"
          >
            <div className="grid gap-4 justify-center items-center">
              <div className="flex justify-center">
                <div
                  className={`p-3 rounded-lg w-fit bg-green-600/10
              ${
                activeFeature === feature.id ?
                  "bg-green-700 text-white"
                : "bg-none text-gray-800 "
              }
            `}
                >
                  <Image src={feature.icon} alt="Close" height={50} />
                </div>
              </div>

              <h3 className="2xl:text-xl md:text-lg sm:text-sm text-sm mt-2 font-medium text-center text-white">
                {feature.title}
              </h3>

              <span className="text-center flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.3"
                  stroke={`${activeFeature === feature.id ? "#999" : "#555"}
            `}
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="mt-20">
        {FEATURES.map(
          (feature) =>
            activeFeature === feature.id && (
              <div key={feature.id} className="animate-fade">
                <div className="flex items-center gap-10">
                  <div className="2xl:p-6 lg:p-6 p-3 bg-amber-50/10 rounded-2xl w-[55%]">
                    <div className="rounded-2xl overflow-hidden">
                      <div>
                        <Image
                          src={feature.image!}
                          alt={feature.id}
                          height={350}
                          width={700}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-[30%]">
                    <h3 className="text-2xl font-medium w-fit text-white">
                      {feature.title}
                    </h3>

                    <div className="grid gap-2 mt-4">
                      <h6 className="text-lg text-gray-400">
                        {feature.content_one}
                      </h6>
                      <h6 className="text-lg text-gray-400">
                        {feature.content_two}
                      </h6>
                    </div>

                    <ul className="mt-2">
                      <li className="border-b border-gray-600/40 py-2 2xl:text-lg text:md break-all w-full text-green-500">
                        {feature.list_one}
                      </li>
                      <li className="border-b border-gray-600/40 py-2 2xl:text-lg text:md break-all w-full text-green-500">
                        {feature.list_two}
                      </li>
                      <li className="border-b border-gray-600/40 py-2 2xl:text-lg text:md break-all w-full text-green-500">
                        {feature.list_three}
                      </li>
                      <li className="border-b border-gray-600/40 py-2 2xl:text-lg text:md break-all w-full text-green-500">
                        {feature.list_four}
                      </li>
                    </ul>

                    <p className="2xl:text-xl lg:text-xl md:text-lg sm:text-md text-md italic font-light mt-2 text-white">
                      {feature.content_three}
                    </p>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </section>
  );
}

export function SetupProcessMobile() {
  return (
    <section className="2xl:hidden lg:hidden md:block sm:block block">
      <div className="mt-0 grid gap-10">
        {FEATURESMOBILE.map(
          (feature) =>
            feature.id && (
              <div key={feature.id} className="animate-fade">
                <div className="grid items-center gap-10">
                  <div className="grid gap-5">
                    <h3 className="2xl:text-xl md:text-xl sm:text-xl text-xl font-medium w-fit text-white">
                      {feature.title}
                    </h3>
                    <div className="2xl:p-6 lg:p-6 p-3 bg-amber-50/10 rounded-2xl w-fit">
                      <div className="rounded-2xl overflow-hidden">
                        <div>
                          <Image
                            src={feature.image!}
                            alt={feature.id}
                            height={350}
                            width={700}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="grid gap-2">
                      <p className="2xl:text-xl lg:text-xl md:text-lg sm:text-md text-md text-gray-400">
                        {feature.content_one}
                      </p>
                      <p className="2xl:text-xl lg:text-xl md:text-lg sm:text-md text-md text-gray-400">
                        {feature.content_two}
                      </p>
                    </div>

                    <ul className="mt-2">
                      <li className="border-b border-gray-600/40 py-2 2xl:text-lg text:md break-all w-full text-green-500">
                        {feature.list_one}
                      </li>
                      <li className="border-b border-gray-600/40 py-2 2xl:text-lg text:md break-all w-full text-green-500">
                        {feature.list_two}
                      </li>
                      <li className="border-b border-gray-600/40 py-2 2xl:text-lg text:md break-all w-full text-green-500">
                        {feature.list_three}
                      </li>
                      <li className="border-b border-gray-600/40 py-2 2xl:text-lg text:md break-all w-full text-green-500">
                        {feature.list_four}
                      </li>
                    </ul>

                    <p className="2xl:text-xl lg:text-xl md:text-lg sm:text-md text-md italic font-light mt-2 text-white">
                      {feature.content_three}
                    </p>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </section>
  );
}
