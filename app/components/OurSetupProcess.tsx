import SetupProcess, { SetupProcessMobile } from "./SetupProcess";

export default function OurSetupprocess() {
  return (
    <div className="max-w-7xl mx-auto 2xl:px-0 md:px-6 sm:px-6 px-4 grid 2xl:gap-20 lg:gap-15 md:gap-15 sm:gap-15 gap-10 pb-10 pt-20">
      <div className="flex gap-6 items-center">
        <h1 className="text-white text-start leading-normal font-medium 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl">
          Our Setup Process
        </h1>

        <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-0">
          <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-10"></div>
          <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-4"></div>
        </div>
      </div>

      <SetupProcess />
      <SetupProcessMobile />

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5"></div>
    </div>
  );
}
