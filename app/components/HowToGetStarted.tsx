import Button from "./Button";

export default function HowToGetStarted() {
  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto 2xl:px-0 md:px-4 sm:px-4 px-4">
        <div className="grid">
          <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 gap-5">
            <div className="grid 2xl:gap-10 md:gap-7 sm:gap-7 gap-7">
              <div className="HowToGetStarted grid gap-4 rounded-2xl w-full 2xl:px-30 md:px-15 sm:px-8 px-8 2xl:py-22 md:py-10 sm:py-10 py-10">
                <div
                  className="border-red-100 border px-5 py-2 rounded-full w-fit
"
                >
                  <h4 className="text-white font-medium">Try it now</h4>
                </div>

                <div className="grid gap-2">
                  <h1 className="text-white leading-normal font-bold 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-3xl">
                    Launch Smarter. Scale Faster.
                  </h1>

                  <h4 className="2xl:text-xl md:text-lg sm:text-lg text-lg text-gray-400">
                    Stop guessing and start growing. Schedule a brief strategy
                    session to see how LeadGenInsider can automate your outbound
                    infrastructure and scale your lead flow today.
                  </h4>
                </div>

                <div className="grid justify-start gap-4">
                  <div className="2xl:flex md:grid sm:grid flex 2xl:gap-5 md:gap-3 sm:gap-3 gap-3">
                    <Button
                      title="Get Started"
                      style="primary-btn mt-4"
                      link="/contact"
                      align="flex justify-center"
                    ></Button>
                    <Button
                      title="View Pricing"
                      style="secondary-btn mt-4"
                      link="/contact"
                      align="flex justify-center"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
