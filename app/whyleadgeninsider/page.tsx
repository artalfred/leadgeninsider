import Image from "next/image";
import Button from "../components/Button";
import Checked from "@/public/Icon/Checked.svg";
import CardBox from "../components/CardBox";
import Campaign from "@/public/Icon/Campaign.svg";
import CampaignIcon from "@/public/Icon/CampaignIcon.svg";
import Domain from "@/public/Icon/Domain.svg";
import InboxManagementIcon from "@/public/Icon/InboxManagementIcon.svg";
import InboxManagement from "@/public/Icon/InboxManagement.svg";
import WebDevelopment from "@/public/Icon/WebDevelopment.svg";
import WebDevelopmentIcon from "@/public/Icon/WebDevelopmentIcon.svg";
import DomainSetup from "@/public/Icon/DomainSetup.svg";
import WhyUsCycle from "@/public/WhyUs/Cycle.jpeg";

export default function whyleadgeninsider() {
  return (
    <div className="max-w-7xl mx-auto 2xl:px-0 md:px-6 sm:px-6 px-4">
      <div className="grid gap-20 justify-center 2xl:mt-60 mt-40">
        <div className="grid 2xl:gap-5 md:gap-4 sm:gap-3 gap-2">
          <div className="flex justify-center 2xl:gap-6 md:gap-4 sm:gap-4 gap-4 items-center">
            <h1 className="leading-normal font-medium 2xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">
              Why LeadGenInsider
            </h1>

            <div className="grid 2xl:gap-2 md:gap-2 gap-1 2xl:mt-0 md:mt-0 sm:mt-0 mt-0">
              <div className="h-0.5 bg-green-600 2xl:w-10 md:w-10 w-10"></div>
              <div className="h-0.5 bg-green-600 2xl:w-4 md:w-3 w-3"></div>
            </div>
          </div>
          <h1 className="text-center 2xl:leading-none md:leading-normal sm:leading-normal leading-normal font-bold 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-3xl">
            A Smarter Way to Scale Outbound
          </h1>
          <h5 className="text-center 2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md 2xl:px-50 lg:px-40 md:px-20 sm:px-15 px-4">
            When choosing an email infrastructure partner, the difference isn’t
            in the tools—it’s in &nbsp;
            <span className="text-gray-300/50">
              how responsibly and predictably the system is built and managed.
            </span>
          </h5>
          <h5 className="text-center 2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md 2xl:px-50 lg:px-40 md:px-20 sm:px-15 px-4">
            LeadGenInsider exists for teams that care about
            <span className="text-gray-300/60">
              &nbsp;long-term outbound performance,
            </span>{" "}
            not short-term volume.
          </h5>

          <div className="grid gap-6 justify-center 2xl:mt-0 md:mt-3 sm:mt-3 mt-2">
            <div className="2xl:p-6 lg:p-6 p-3 bg-amber-50/10 rounded-2xl flex w-fit">
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/zTwvnl77HPw"
                  className="2xl:w-4xl lg:w-3xl md:w-2xl sm:w-xl w-full 2xl:h-126 lg:h-115 md:h-100 h-42"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:pt-20 md:py-0 sn:py-0 py-0 relative isolate overflow-hidden lg:overflow-visible">
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

        <div className="py-20 grid items-center 2xl:gap-20 lg:gap-15 md:gap-15 sm:gap-15 gap-10 ">
          <div className="flex gap-6 items-center">
            <h1 className="text-start leading-normal font-black 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl">
              What We Provide
            </h1>

            <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-2">
              <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-15"></div>
              <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-6"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 gap-6">
            <CardBox
              Title="Designed for Operational Stability"
              Content="We build infrastructure that teams can rely on month after month—not setups that need constant rebuilding. Our systems prioritize consistency, recovery, and controlled scaling so outreach remains stable even as volume grows."
              Icon={Domain}
              ImageIcon={DomainSetup}
              Style="bg-slate-900/60"
              Link="contact"
            />

            <CardBox
              Title="Infrastructure, Not Just Inboxes"
              Content="Most providers sell inboxes. We deliver a complete outbound foundation—one that accounts for reputation management, sender behavior, rotation, and replacement from day one."
              Icon={InboxManagementIcon}
              ImageIcon={InboxManagement}
              Style="bg-slate-900/60"
              Link="contact"
            />
            <CardBox
              Title="Built by Practitioners, Not Resellers"
              Content="We actively operate and maintain large-scale outbound systems ourselves. Everything we offer is based on real-world usage, not theory, templates, or resale packages."
              Icon={CampaignIcon}
              ImageIcon={Campaign}
              Style="bg-slate-900/60"
              Link="contact"
            />
            <CardBox
              Title="Predictable Scaling Without Chaos"
              Content="Scaling outbound shouldn’t feel fragile. Our approach allows teams to increase volume methodically, replace weak inboxes quickly, and avoid disruptions that stall campaigns or revenue."
              Icon={WebDevelopmentIcon}
              ImageIcon={WebDevelopment}
              Style="bg-slate-900/60"
              Link="contact"
            />
            <CardBox
              Title="Transparent, Hands-On Support"
              Content="You’re not handed a setup and left alone. We stay involved—monitoring inbox health, addressing issues early, and keeping your infrastructure aligned with your sending goals."
              Icon={WebDevelopmentIcon}
              ImageIcon={WebDevelopment}
              Style="bg-slate-900/60"
              Link="contact"
            />
          </div>
        </div>
      </div>

      <div className="grid 2xl:pt-20 md:pt-10 sm:pt-0 pt-0  ">
        <div className="grid justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
          <div>
            <div className="flex gap-6 items-center">
              <h1 className="leading-normal font-bold 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
                Best Fit For
              </h1>

              <div className="grid 2xl:gap-2 md:gap-2 gap-2 2xl:mt-0 md:mt-0 sm:mt-0 mt-0">
                <div className="h-0.5 bg-green-600 2xl:w-15 md:w-10 w-10"></div>
                <div className="h-0.5 bg-green-600 2xl:w-5 md:w-3 w-3"></div>
              </div>
            </div>

            <div className="grid gap-4 2xl:mt-6 md:mt-4 sm:mt-2 mt-2">
              <h5 className="2xl:text-2xl md:text-xl sm:text-xl text-xl font-medium">
                LeadGenInsider is ideal for:
              </h5>
              <ul>
                <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                  <Image src={Checked} alt="Checked" height={20} />
                  <span className="mt-2">Lead generation agencies</span>
                </li>
                <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                  <Image src={Checked} alt="Checked" height={20} />
                  <span className="mt-2">Established outbound teams</span>
                </li>
                <li className="2xl:text-xl md:text-lg sm:text-lg text-lg flex items-center gap-3">
                  <Image src={Checked} alt="Checked" height={20} />
                  <span className="mt-2">High-volume email senders</span>
                </li>

                <li className="2xl:text-xl md:text-lg sm:text-lg text-lg mt-7">
                  If you value{" "}
                  <span className="text-green-500">
                    control, reliability, and long-term deliverability,{" "}
                  </span>
                  this is built for you.
                </li>
              </ul>

              <Button
                title="Send us a message – we reply in minutes."
                style="primary-btn mt-4"
                link="/contact"
                align=""
              ></Button>
            </div>
          </div>

          <div className="flex 2xl:justify-end lg:justify-start md:justify-start sm:justify-center justify-center 2xl:mt-0 lg:mt-0 sm:mt-6 mt-6">
            <div className="2xl:p-6 lg:p-6 p-3 bg-amber-50/10 rounded-2xl w-fit">
              <div className="rounded-2xl overflow-hidden">
                <div>
                  <Image
                    src={WhyUsCycle}
                    alt="Hello"
                    height={350}
                    width={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
