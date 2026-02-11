import Button from "./Button";

export default function HowToGetStarted() {
  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto 2xl:px-0 md:px-4 sm:px-4 px-4">
        <div className="grid">
          <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1 gap-5">
            <div className="grid 2xl:gap-10 md:gap-7 sm:gap-7 gap-7">
              <div className="grid gap-6 bg-amber-50/10 rounded-2xl w-full 2xl:px-30 md:px-15 sm:px-4 px-4 py-14">
                <div className="">
                  <h1 className="text-white text-center leading-normal font-medium 2xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl">
                    How do we get started?
                  </h1>
                </div>

                <h1 className="text-xl text-gray-400 text-center">
                  Stop guessing and start growing. Schedule a brief strategy
                  session to see how LeadGenInsider can automate your outbound
                  infrastructure and scale your lead flow today.
                </h1>

                <div className="grid justify-center gap-4">
                  <div className="2xl:flex md:grid sm:grid grid 2xl:gap-5 md:gap-3 sm:gap-3 gap-3">
                    <Button
                      title="Book A Call"
                      style="primary-btn mt-4"
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
