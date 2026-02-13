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
import Button from "./Button";

const FEATURES = [
  {
    id: "feature1",
    icon: DomainStrategy,
    title: "Single Domain Strategy",
    subTitle: "One main domain — everything else automated",
    description:
      "You only need one core domain (e.g., LeadGenInsider.co). We automatically generate and manage hundreds of subdomains to scale sending safely—so you don’t have to buy or maintain hundreds of separate domains.",

    image: SingleDomainStrategy || "",
  },
  {
    id: "feature2",
    icon: SubDomainAutomation,
    title: "Automated Subdomain Creation",
    subTitle: "Instant, standardized subdomain deployment",
    description:
      "We automatically deploy hundreds of fully configured subdomains using precision automation — eliminating manual DNS work, preventing setup errors, and creating a scalable, deliverability-first infrastructure built for growth.",

    image: AutomatedSubdomainCreation || "",
  },
  {
    id: "feature3",
    icon: Inboxes,
    title: "Safe Inbox Scaling Strategy",
    subTitle: "Balanced inbox distribution for deliverability protection",
    description:
      "Each subdomain is configured with a small, controlled set of inboxes to maintain natural sending behavior. This structured scaling approach reduces spam signals, protects sender reputation, and keeps outreach stable as volume grows.",

    image: SafeInboxScalingStrategy || "",
  },

  {
    id: "feature4",
    icon: Safe,
    title: "Scalable, Replaceable, Safe",
    subTitle: "Infrastructure built for recovery and continuous scale",
    description:
      "When inbox health declines, we automatically deploy fresh subdomains and inboxes without rebuilding your system. This modular design enables fast recovery, uninterrupted scaling, and long-term deliverability stability — keeping your outreach predictable and resilient.",

    image: ScalableReplaceableSafe || "",
  },
];

const FEATURESMOBILE = [
  {
    id: "feature1",
    icon: DomainStrategy,
    title: "1. Single Domain Strategy",
    subTitle: "One main domain — everything else automated",
    description:
      "You only need one core domain (e.g., LeadGenInsider.co). We automatically generate and manage hundreds of subdomains to scale sending safely—so you don’t have to buy or maintain hundreds of separate domains.",

    image: SingleDomainStrategy || "",
  },
  {
    id: "feature2",
    icon: SubDomainAutomation,
    title: "2. Automated Subdomain Creation",
    subTitle: "Instant, standardized subdomain deployment",
    description:
      "We automatically deploy hundreds of fully configured subdomains using precision automation — eliminating manual DNS work, preventing setup errors, and creating a scalable, deliverability-first infrastructure built for growth.",

    image: AutomatedSubdomainCreation || "",
  },
  {
    id: "feature3",
    icon: Inboxes,
    title: "3. Safe Inbox Scaling Strategy",
    subTitle: "Balanced inbox distribution for deliverability protection",
    description:
      "Each subdomain is configured with a small, controlled set of inboxes to maintain natural sending behavior. This structured scaling approach reduces spam signals, protects sender reputation, and keeps outreach stable as volume grows.",

    image: SafeInboxScalingStrategy || "",
  },

  {
    id: "feature4",
    icon: Safe,
    title: "4. Scalable, Replaceable, Safe",
    subTitle: "Infrastructure built for recovery and continuous scale",
    description:
      "When inbox health declines, we automatically deploy fresh subdomains and inboxes without rebuilding your system. This modular design enables fast recovery, uninterrupted scaling, and long-term deliverability stability — keeping your outreach predictable and resilient.",

    image: ScalableReplaceableSafe || "",
  },
];

export default function SetupProcess() {
  const [activeFeature, setActiveFeature] = useState("feature1");

  return (
    <section className="2xl:block lg:block md:hidden sm:hidden hidden">
      {/* BUTTONS */}
      <div className="flex gap-4 justify-start mb-10 ">
        {FEATURES.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className=" relative px-3 py-3 rounded-xl font-medium transition flex items-center justify-center w-full cursor-pointer"
          >
            <div className="grid gap-4 items-center justify-center">
              <div className="flex justify-center">
                <Image
                  src={feature.icon}
                  alt="Close"
                  height={55}
                  width={55}
                  className={`p-3 rounded-lg hover:bg-[#0b4da5] transition-all ease-in-out duration-200
                  ${
                    activeFeature === feature.id ?
                      "bg-[#0b4da5] text-white"
                    : "bg-[#0b4da5]/50 text-gray-800 "
                  }
                    `}
                />
              </div>
              <h3 className="2xl:text-xl md:text-lg sm:text-sm text-sm mt-2 font-medium text-center secondary--color">
                {feature.title}
              </h3>
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
                  <div
                    className="2xl:p-4 lg:p-4 p-2  border border-[rgba(89,81,255,.188)] rounded-2xl w-[65%]"
                    style={{
                      boxShadow: "0 53.316px 53.316px 0 rgba(0,0,0,.08)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="rounded-2xl overflow-hidden w-fit">
                      <Image
                        src={feature.image!}
                        alt={feature.id}
                        className="w-fit h-fit"
                      />
                    </div>
                  </div>

                  <div className="w-[35%]">
                    <div className="grid gap-2">
                      <h3 className="text-2xl font-medium w-fit secondary--color">
                        {feature.title}
                      </h3>

                      <h3 className="text-lg font-medium w-fit secondary--color leading-none">
                        {feature.subTitle}
                      </h3>
                    </div>

                    <div className="grid gap-6 mt-4">
                      <h6 className="text-md secondary--color">
                        {feature.description}
                      </h6>

                      <Button
                        title="Scale My Outreach"
                        style="tertiary-btn"
                        link="/contact"
                        align="flex justify-start"
                      ></Button>
                    </div>
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
                  <div className="grid gap-2">
                    <div className="grid gap-2">
                      <h3 className="text-xl font-medium w-fit secondary--color">
                        {feature.title}
                      </h3>

                      <h3 className="text-md font-medium w-fit secondary--color leading-none">
                        {feature.subTitle}
                      </h3>
                    </div>

                    <div className="grid gap-6 mt-4">
                      <h6 className="text-md secondary--color">
                        {feature.description}
                      </h6>

                      <div
                        className="2xl:p-4 lg:p-4 p-2  border border-[rgba(89,81,255,.188)] rounded-2xl"
                        style={{
                          boxShadow: "0 53.316px 53.316px 0 rgba(0,0,0,.08)",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        <div className="rounded-2xl overflow-hidden w-fit">
                          <Image
                            src={feature.image!}
                            alt={feature.id}
                            className="w-fit h-fit"
                          />
                        </div>
                      </div>

                      <Button
                        title="Scale My Outreach"
                        style="tertiary-btn"
                        link="/contact"
                        align="flex justify-start"
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </section>
  );
}
