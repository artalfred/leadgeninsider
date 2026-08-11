import Button from "./Button";
import Section from "./Section";

export default function HowToGetStarted() {
  return (
    <div className="border-t border-sky-300">
      <Section>
        <div>
          <div className="grid">
            <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 gap-5">
              <div className="grid 2xl:gap-10 md:gap-7 sm:gap-7 gap-7">
                <div className="HowToGetStarted grid gap-4 rounded-sm w-full 2xl:px-30 md:px-15 sm:px-8 px-8 2xl:py-25 md:py-10 sm:py-10 py-10">
                  <div
                    className="border-red-100 border px-5 py-2 rounded-full w-fit
"
                  >
                    <h4 className="text-white font-medium">Try it now</h4>
                  </div>

                  <div className="grid gap-2">
                    <h1 className="title text-white leading-normal 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-3xl">
                      Launch Smarter. Scale Faster.
                    </h1>

                    <h4 className="2xl:text-xl md:text-lg sm:text-lg text-lg text-gray-400 2xl:w-4xl lg:w-4xl md:w-full sm:w-full w-full">
                      Stop guessing and start growing. Schedule a brief strategy
                      session to see how LeadGenInsider can automate your
                      outbound infrastructure and scale your lead flow today.
                    </h4>
                  </div>

                  <div className="grid justify-start gap-4">
                    <div className="2xl:flex md:grid sm:grid flex 2xl:gap-5 md:gap-3 sm:gap-3 gap-3">
                      <Button
                        title="Get Started"
                        style="primary-btn mt-4"
                        link="/contact"
                      ></Button>
                      <Button
                        title="View Pricing"
                        style="secondary-btn mt-4"
                        link="/contact"
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
