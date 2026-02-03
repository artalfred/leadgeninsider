import Image from "next/image";
import Button from "../components/Button";
import Clients from "@/public/Icon/Clients.svg";
import People from "@/public/Icon/people.svg";
import Deliverability from "@/public/Icon/Deliverability.svg";
import Scale from "@/public/Icon/Scale.svg";
import FAQAccordion from "../faqs/page";

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-20 justify-center 2xl:mt-60 mt-40  2xl:px-0 md:px-6 sm:px-6 px-4">
        <div className="grid 2xl:gap-5 md:gap-4 sm:gap-3  gap-2">
          <div className="flex justify-center 2xl:gap-6 md:gap-4 sm:gap-4 gap-4 items-center">
            <h1 className="text-white leading-normal font-medium 2xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">
              About LeadGenInsider
            </h1>

            <div className="grid 2xl:gap-2 md:gap-2 gap-1 2xl:mt-0 md:mt-0 sm:mt-0 mt-0">
              <div className="h-0.5 bg-green-600 2xl:w-10 md:w-10 w-10"></div>
              <div className="h-0.5 bg-green-600 2xl:w-4 md:w-3 w-3"></div>
            </div>
          </div>
          <h1 className="text-white text-center 2xl:leading-none md:leading-normal sm:leading-8 leading-8 font-bold 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            Built to Scale Outbound — Without Burning Your Infrastructure
          </h1>
          <h5 className="text-white text-center 2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md 2xl:px-30 lg:px-30 md:px-20 sm:px-15 px-0">
            LeadGenInsider was built to solve a problem most lead generation
            teams face too late— &nbsp;
            <span className="text-green-500">
              email infrastructure that doesn’t scale safely.
            </span>
          </h5>
          <h5 className="text-white text-center 2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md 2xl:px-30 lg:px-30 md:px-20 sm:px-15 px-0">
            After years of working inside high-volume outbound operations, we
            saw the same pattern over and over: agencies burning domains,
            rebuilding inboxes every few weeks, manually configuring DNS, and
            wasting thousands of dollars just to stay operational. The tools
            existed—but the
            <span className="text-green-500">
              &nbsp;infrastructure approach was broken.
            </span>{" "}
          </h5>
        </div>
      </div>

      <div className="2xl:pt-20 md:py-0 sn:py-0 py-0 relative isolate overflow-hidden lg:overflow-visible  2xl:px-0 md:px-6 sm:px-6 px-4">
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

        <div className="pb-0 2xl:pt-0 md:pt-20 sm:pt-20 pt-20 grid items-center 2xl:gap-20 lg:gap-15 md:gap-15 sm:gap-15 gap-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <div
                className="relative p-6 rounded-2xl grid gap-4 align-middle bg-slate-900/70 pb-30"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <div className="Flex items-center justify-between w-fit mt-2 mr-2">
                  <div className="bg-green-700 p-3 rounded-lg w-fit">
                    <Image src={Scale} alt="Close" height={40} />
                  </div>
                </div>

                <div className="grid gap-3">
                  <h3 className="2xl:text-2xl md:text-xl sm:text-xl text-xl font-medium w-fit mt-3 text-white">
                    Built for Scale, Not Shortcuts
                  </h3>
                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md text-white">
                    LeadGenInsider specializes in{" "}
                    <span className="text-green-500">
                      automation-driven email infrastructure
                    </span>
                    . Instead of relying on hundreds of disposable domains, we
                    use a{" "}
                    <span className="text-green-500">
                      single-domain, multi-subdomain architecture
                    </span>
                    —fully automated, standardized, and built to protect
                    deliverability at scale.
                  </h5>
                </div>

                <ul className="grid gap-1">
                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-medium text-white">
                    We Automate:
                  </h5>
                  <li className="text-md gap-3 text-white mt-2">
                    <span className="mr-4">✔</span>
                    Flexible Scaling
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Automated Foundations
                  </li>

                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Managed Setup
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Reputation Protection
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Turnkey Deployment
                  </li>
                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-medium mt-4 text-white">
                    This allows our clients to safely operate{" "}
                    <span className="text-green-500">500–3,000+ inboxes </span>
                    without the fragility, cost, or chaos of traditional setups.
                  </h5>
                </ul>

                <div className="flex align-middle gap-6 absolute bottom-8 ml-5">
                  <Button
                    title="Schedule Discussion"
                    style="secondary-btn mt-4"
                    link="/contact"
                    align=""
                  ></Button>
                </div>
              </div>
            </div>
            <div className=" overflow-hidden">
              <div
                className="relative p-6 rounded-2xl grid gap-4 align-middle bg-slate-900/70 pb-30"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <div className="Flex items-center justify-between w-fit mt-2 mr-2">
                  <div className="bg-green-700 p-3 rounded-lg w-fit">
                    <Image src={Deliverability} alt="Close" height={40} />
                  </div>
                </div>

                <div className="grid gap-3">
                  <h3 className="2xl:text-2xl md:text-xl sm:text-xl text-xl font-medium w-fit mt-3 text-white">
                    Deliverability Comes First—Always
                  </h3>
                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md text-white">
                    We don’t sell shortcuts, hacks, or risky tactics.
                  </h5>
                </div>

                <ul className="grid gap-1">
                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-medium text-white">
                    Every system we build is designed around:
                  </h5>
                  <li className="text-md gap-3 text-white mt-2">
                    <span className="mr-4">✔</span>
                    Natural sending behavior
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Independent subdomain reputation
                  </li>

                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Fast recovery and inbox replacement
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Long-term stability for outbound campaigns
                  </li>

                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-medium mt-4 text-white">
                    If an inbox degrades, we replace it—{" "}
                    <span className="text-green-500">
                      without tearing down your entire system.
                    </span>
                  </h5>
                </ul>

                <div className="flex align-middle gap-6 absolute bottom-8 ml-5">
                  <Button
                    title="Schedule Discussion"
                    style="secondary-btn mt-4"
                    link="/contact"
                    align=""
                  ></Button>
                </div>
              </div>
            </div>
            <div className=" overflow-hidden">
              <div
                className="relative p-6 rounded-2xl grid gap-4 align-middle bg-slate-900/70 pb-30"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <div className="Flex items-center justify-between w-fit mt-2 mr-2">
                  <div className="bg-green-700 p-3 rounded-lg w-fit">
                    <Image src={People} alt="Close" height={40} />
                  </div>
                </div>

                <div className="grid gap-3 text-white">
                  <h3 className="2xl:text-2xl md:text-xl sm:text-xl text-xl font-medium w-fit mt-3">
                    Who We Work With
                  </h3>
                </div>

                <ul className="grid gap-1">
                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-medium text-white">
                    We work primarily with:
                  </h5>
                  <li className="text-md gap-3 text-white mt-2">
                    <span className="mr-4">✔</span>
                    Lead generation agencies
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Cold email teams
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    High-volume outbound marketers
                  </li>

                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-medium mt-4 text-white">
                    Our clients don’t want theory. They want infrastructure that{" "}
                    <span className="text-green-500">
                      works, scales, and stays clean.
                    </span>
                  </h5>
                </ul>

                <div className="flex align-middle gap-6 absolute bottom-8 ml-5">
                  <Button
                    title="Schedule Discussion"
                    style="secondary-btn mt-4"
                    link="/contact"
                    align=""
                  ></Button>
                </div>
              </div>
            </div>
            <div className=" overflow-hidden">
              <div
                className="relative p-6 rounded-2xl grid gap-4 align-middle bg-slate-900/70 pb-30"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <div className="Flex items-center justify-between w-fit mt-2 mr-2">
                  <div className="bg-green-700 p-3 rounded-lg w-fit">
                    <Image src={Clients} alt="Close" height={40} />
                  </div>
                </div>

                <div className="grid gap-3 text-white">
                  <h3 className="2xl:text-2xl md:text-xl sm:text-xl text-xl font-medium w-fit mt-3">
                    Why Clients Choose LeadGenInsider
                  </h3>
                </div>

                <ul className="grid gap-1">
                  <li className="text-md gap-3 text-white mt-2">
                    <span className="mr-4">✔</span>
                    5+ years in email marketing infrastructure
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Thousands of inboxes deployed
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Smartlead & Bison compatible
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Automation-first, deliverability-focused systems
                  </li>

                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-medium mt-4 text-white">
                    We handle the technical complexity—so you can focus on
                    closing deals.
                  </h5>
                </ul>

                <div className="flex align-middle gap-6 absolute bottom-8 ml-5">
                  <Button
                    title="Schedule Discussion"
                    style="secondary-btn mt-4"
                    link="/contact"
                    align=""
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <FAQAccordion />
      </div>
    </div>
  );
}
