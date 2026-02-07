"use client";

export default function FAQAccordion() {
  return (
    <div className="max-w-7xl mx-auto space-y-4 2xl:px-40 lg:px-30 md:px-20 sm:px-4 px-4 2xl:mt-60 md:mt-50 sm:mt-50 mt-50">
      <div className="grid justify-center items-center 2xl:pb-20 md:pb-15 sm:pb-10 pb-10">
        <h1 className="text-center leading-normal font-medium 2xl:text-6xl lg:text-5xl md:text-5xl sm:text-2xl text-2xl text-white">
          LeadGensInsider Onboarding
        </h1>
        <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-center 2xl:w-240 md:w-full w-full text-white">
          Thanks for your interest in LeadGenInsider.
        </h1>
      </div>

      <div className="mx-auto flex justify-center">
        <ul className="2xl:flex items-center justify-center md:grid grid 2xl:gap-10 md:gap-20 sm:gap-5 gap-5">
          <li className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="2xl:size-10 md:size-8 sm:size-6 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <h1 className="2xl:text-2xl md:text-xl sm:text-xl text-xl mt-1 fon-medium text-white">
              info@leadgeninsider.co
            </h1>
          </li>
          <li className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="2xl:size-10 md:size-8 sm:size-6 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <h1 className="2xl:text-2xl md:text-xl sm:text-xl text-xl mt-1 font-medium text-white">
              +63 967 134 8488
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
