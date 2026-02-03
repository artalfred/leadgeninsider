import Image from "next/image";
import FAQAccordion from "../faqs/page";
import Lester from "@/public/Team/Lester.jpg";
import Art from "@/public/Team/Art.jpg";

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-20 justify-center 2xl:mt-60 mt-40  2xl:px-0 md:px-6 sm:px-6 px-4">
        <div className="grid 2xl:gap-5 md:gap-4 sm:gap-3 gap-2">
          <div className="flex justify-center 2xl:gap-6 md:gap-4 sm:gap-4 gap-4 items-center">
            <h1 className="leading-normal font-medium 2xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg text-white">
              Our Team
            </h1>

            <div className="grid 2xl:gap-2 md:gap-2 gap-1 2xl:mt-0 md:mt-0 sm:mt-0 mt-0">
              <div className="h-0.5 bg-green-600 2xl:w-10 md:w-10 w-10"></div>
              <div className="h-0.5 bg-green-600 2xl:w-4 md:w-3 w-3"></div>
            </div>
          </div>
          <h1 className="text-white text-center 2xl:leading-none md:leading-normal sm:leading-8 leading-8 font-bold 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            Meet the Experts Behind Your Business Success
          </h1>
          <h5 className="text-white text-center 2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md 2xl:px-30 lg:px-30 md:px-20 sm:px-15 px-0">
            LeadGenInsider was built to solve a problem most lead generation
            teams face too late— &nbsp;
            <span className="text-green-600">
              email infrastructure that doesn’t scale safely.
            </span>
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
          <div className="grid items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-6">
            <div className=" overflow-hidden">
              <div
                className="relative p-6 rounded-2xl grid gap-4 align-middle bg-slate-900/80"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <div className="Flex items-center justify-between w-fit mt-2 mr-2">
                  <div className="bg-slate-700 p-2 rounded-full w-fit">
                    <Image
                      src={Lester}
                      alt="Close"
                      className="rounded-full 2xl:w-30 lg:w-25 md:w-20 sm:w-20 w-20"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <h3 className="2xl:text-2xl md:text-xl sm:text-xl text-xl font-medium w-fit mt-3 text-white">
                    Lester Bernales
                  </h3>
                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-medium text-white">
                    B2B Lead Generation & Email Marketing Specialist
                  </h5>
                </div>

                <ul className="grid gap-1">
                  <h5 className="text-sm text-white">
                    Lester specializes in building and scaling high-volume
                    outbound email systems for B2B companies and lead generation
                    agencies. With deep expertise in{" "}
                    <span className="text-green-500">
                      email deliverability, Google Workspace, DNS, and domain
                      infrastructure,
                    </span>{" "}
                    he designs inbox and campaign setups that protect sender
                    reputation while maximizing response rates. He also leads
                    email campaign strategy and copywriting, ensuring campaigns
                    are both technically sound and conversion-focused.
                  </h5>
                  <h3 className="2xl:text-xl md:text-xl sm:text-xl text-xl font-medium w-fit mt-3 text-white">
                    Expertise:
                  </h3>
                  <li className="text-md gap-3 mt-2 text-white">
                    <span className="mr-4">✔</span>
                    B2B lead generation & outbound email strategy
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Google Workspace & inbox management
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    DNS, domains, SPF, DKIM, DMARC
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Email campaign setup & optimization
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Email copywriting & deliverability
                  </li>
                </ul>
              </div>
            </div>

            <div className=" overflow-hidden">
              <div
                className="relative p-6 rounded-2xl grid gap-4 align-middle bg-slate-900/80"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <div className="Flex items-center justify-between w-fit mt-2 mr-2">
                  <div className="bg-slate-700 p-2 rounded-full w-fit">
                    <Image
                      src={Art}
                      alt="Close"
                      className="rounded-full 2xl:w-30 lg:w-25 md:w-20 sm:w-20 w-20"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <h3 className="2xl:text-2xl md:text-xl sm:text-xl text-xl font-medium w-fit mt-3 text-white">
                    Art Alfred
                  </h3>
                  <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-medium text-white">
                    Web Developer, Lead Generation Specialist & Automation
                    Expert
                  </h5>
                </div>

                <ul className="grid gap-1">
                  <h5 className="text-sm text-white">
                    Art Alfred focuses on the technical backbone behind scalable
                    lead generation systems. As a{" "}
                    <span className="text-green-500">
                      web developer and Python automation expert,
                    </span>{" "}
                    he builds tools and workflows that automate subdomain
                    creation, DNS configuration, inbox deployment, and platform
                    integration. His work ensures speed, accuracy, and
                    repeatability—allowing teams to scale outreach without
                    manual bottlenecks.{" "}
                  </h5>
                  <h3 className="2xl:text-xl md:text-xl sm:text-xl text-xl font-medium w-fit mt-3 text-white">
                    Expertise:
                  </h3>
                  <li className="text-md gap-3 mt-2 text-white">
                    <span className="mr-4">✔</span>
                    Web development (conversion-focused)
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4 ">✔</span>
                    Lead generation systems & infrastructure
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Python automation & scripting
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Bulk subdomain & DNS automation
                  </li>
                  <li className="text-md gap-3 text-white">
                    <span className="mr-4">✔</span>
                    Email platform integrations (Smartlead, Bison)
                  </li>
                </ul>
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
