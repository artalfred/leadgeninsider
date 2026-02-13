import Button from "@/app/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | LeadGen Insider",
  description: "Inbox Infrastructure Plan | The “Growth“ Infrastructure Plan",
};

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto 2xl:py-20 2xl:px-0 md:px-4 sm:px-4 px-4 2xl:mt-30 mt-40 grid gap-10">
      <div className="flex gap-4 items-center">
        <h1 className="text-start leading-normal font-medium 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-3xl text-white">
          Pricing
        </h1>

        <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-2">
          <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-15"></div>
          <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-6"></div>
        </div>
      </div>

      <div className="grid justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-10">
        <div className="bg-slate-800/40 rounded-2xl p-6 shadow-lg">
          <div className="grid gap-2 items-center">
            <h1 className="text-white text-start leading-normal font-medium 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
              Inbox Infrastructure Setup
            </h1>
            <h2 className="text-gray-300 text-start leading-normal font-normal 2xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">
              Complete Outreach Inbox Setup & Platform Integration
            </h2>
            <p className="text-gray-400">
              We deploy a complete outreach inbox infrastructure — configured,
              optimized, and integrated — so your campaigns can launch smoothly
              from day one.
            </p>
          </div>

          <h1 className="mt-10 text-5xl font-bold text-white">
            $2,000
            <span className="text-lg text-gray-400 font-medium">/ month</span>
          </h1>

          <div className="grid gap-4 mt-6 ">
            <h3 className="text-gray-200 text-start leading-normal font-medium 2xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">
              What&apos;s Included:
            </h3>
            <ul className="grid gap-1">
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>Up to{" "}
                <span className="font-medium text-green-500">3000 inboxes</span>{" "}
                included
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>Deliverability-focused
                configuration from day one
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Inbox creation, naming & structure
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Upload & assignment to Smartlead / Bison
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Inboxes are replaceable if deliverability drops
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Fully tested and monitored
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Inbox health and reputation safeguards
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Ready-to-use environment at deployment
              </li>
            </ul>

            <Button
              title="Get Inboxes at Scale"
              style="primary-btn mt-4"
              link="/contact"
              align=""
            ></Button>
          </div>
        </div>

        <div className="bg-sky-700/30 rounded-2xl p-6 shadow-lg">
          <div className="grid gap-2 items-center">
            <h1 className="text-white text-start leading-normal font-medium 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
              Managed Outreach Campaigns
            </h1>
            <h2 className="text-gray-300 text-start leading-normal font-normal 2xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">
              Done-For-You Outreach Campaign Management
            </h2>
            <p className="text-gray-400">
              Done-for-you outbound campaigns delivering{" "}
              <span className="text-green-500 font-medium">
                20–30 qualified
              </span>{" "}
              leads per day.{" "}
              <span className="text-green-500 font-medium">$1,500 </span>
              onboarding, then{" "}
              <span className="text-green-500 font-medium">
                $2,500/month{" "}
              </span>{" "}
              for ongoing management.
            </p>
          </div>

          <h1 className="mt-10 text-5xl font-bold text-white">
            $2,500
            <span className="text-lg text-gray-400 font-medium">/ month</span>
          </h1>

          <div className="grid gap-4 mt-6 ">
            <h3 className="text-gray-200 text-start leading-normal font-medium 2xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">
              Campaign Capabilities:
            </h3>
            <ul className="grid gap-1">
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>Niche-focused outreach strategy
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>Targeted prospect identification
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Messaging optimized for engagement
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Continuous campaign monitoring
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Predictable lead flow generation
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Performance-driven adjustments
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Scalable outreach framework
              </li>
              <li className="text-md gap-3 text-gray-300">
                <span className="mr-4">✔</span>
                Dedicated campaign oversight
              </li>
            </ul>

            <Button
              title="Launch My Campaigns"
              style="secondary-btn mt-4"
              link="/contact"
              align=""
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
