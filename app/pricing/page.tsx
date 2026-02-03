import Button from "@/app/components/Button";

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto 2xl:py-20 2xl:px-0 md:px-4 sm:px-4 px-4 2xl:mt-30 mt-40 grid gap-10">
      <div className="flex gap-4 items-center">
        <h1 className="text-start leading-normal font-black 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-3xl text-white">
          Pricing
        </h1>

        <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-2">
          <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-15"></div>
          <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-6"></div>
        </div>
      </div>

      <div className="grid justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
        <div className=" grid gap-6">
          <div className="bg-[#0F172A]/60 rounded-2xl p-6 shadow-lg">
            <div className="grid gap-2 items-center">
              <h1 className="text-white text-start leading-normal font-bold 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
                Inbox Infrastructure Plan
              </h1>
              <p className="text-white">
                Stop wasting weeks on manual technical setup and start sending
                at scale. This <span className="font-bold">done-for-you</span>{" "}
                foundation provides the massive volume you need with zero
                technical friction.
              </p>
            </div>

            <h1 className="mt-10 text-5xl font-bold text-white">
              $3,000
              <span className="text-lg text-white font-medium">/ month</span>
            </h1>

            <div className="grid gap-4 mt-6 ">
              <ul className="grid gap-1">
                <li className="text-md gap-3 text-white">
                  <span className="mr-4">✔</span> Up to{" "}
                  <span className="font-bold"> 3000 inboxes </span>
                  included
                </li>
                <li className="text-md gap-3 text-white">
                  <span className="mr-4">✔</span>
                  <span className="font-bold">
                    Automated subdomain creation{" "}
                  </span>
                  under one main domain
                </li>
                <li className="text-md gap-3 text-white">
                  <span className="mr-4">✔</span>
                  <span className="font-bold">
                    Automated DNS configuration{" "}
                  </span>
                  (SPF, DKIM, DMARC and MX)
                </li>
                <li className="text-md gap-3 text-white">
                  <span className="mr-4">✔</span>
                  Inbox creation, naming & structure
                </li>
                <li className="text-md gap-3 text-white">
                  <span className="mr-4">✔</span>
                  Upload & assignment to Smartlead / Bison
                </li>
                <li className="text-md gap-3 text-white">
                  <span className="mr-4">✔</span>
                  Inboxes are <span className="font-bold">replaceable </span> if
                  deliverability drops
                </li>
                <li className="text-md gap-3 text-white">
                  <span className="mr-4">✔</span>
                  Fully tested and monitored
                </li>
              </ul>

              <Button
                title="Start Sending at Scale"
                style="primary-btn mt-4"
                link="/contact"
                align=""
              ></Button>
            </div>
          </div>
        </div>

        <div className="bg-[#0F172A] rounded-2xl p-6 shadow-lg">
          <div className="grid gap-0 items-center">
            <h1 className="text-white text-start leading-normal font-bold 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
              The &ldquo;Growth&ldquo; Infrastructure Plan
            </h1>

            <p className="text-white">
              Premium automation for growing teams. Get the same elite DNS
              security and deliverability as our max-capacity plan, customized
              for your specific volume. Minimum 1,000 inboxes.
            </p>

            <h1 className="mt-10 text-2xl font-bold text-green-500">
              Request Custom Quote <br />
              <span className="text-lg text-white font-normal">
                ( Available for deployments of 1,000+ inboxes )
              </span>
            </h1>
          </div>

          <h1 className="mt-6 text-lg font-bold text-white">Core Features</h1>

          <div className="grid gap-4 mt-6 ">
            <ul className="grid gap-1">
              <li className="text-md gap-3 text-white">
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
            </ul>

            <Button
              title="Request Pricing"
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
