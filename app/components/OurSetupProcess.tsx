import SetupProcess, { SetupProcessMobile } from "./SetupProcess";

export default function OurSetupprocess() {
  return (
    <div className="InboxInfrastructureSetup z-0">
      <div className="max-w-7xl mx-auto 2xl:px-0 md:px-6 sm:px-6 px-4 grid 2xl:pt-30 md:pt-20 sm:pt-20 pt-20 2xl:pb-40 md:pb-20 sm:pb-20 pb-20">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source
            src="/background/InboxInfrastructureSetup.mp4"
            type="video/mp4"
          />
        </video>

        <div className="z-5 grid 2xl:gap-20 lg:gap-15 md:gap-15 sm:gap-15 gap-10">
          <div className="grid 2xl:gap-4 md:gap-4 sm:gap-2 gap-2">
            <h1
              className={`text-center secondary--color leading-normal font-medium 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl`}
            >
              Inbox Infrastructure Setup
            </h1>

            <h2 className="text-center 2xl:text-xl md:text-xl sm:text-lg text-lg secondary--color font-medium">
              Complete Outreach Inbox Setup & Platform Integration
            </h2>
          </div>

          <SetupProcess />
          <SetupProcessMobile />
        </div>
      </div>
    </div>
  );
}
