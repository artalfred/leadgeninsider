import Image from "next/image";
import Button from "./Button";
import Checked from "@/public/Icon/Checked.svg";
import Deals from "@/public/Home/Deals.jpeg";

export default function PartnershipDeals() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto 2xl:py-20 md:py-20 sm:py-20 py-10 2xl:px-0 md:px-4 sm:px-4 px-4">
        <div className="grid">
          <div className="grid justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
            <div>
              <div className="flex gap-6 items-center">
                <h1 className="text-start leading-normal font-medium 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl text-white">
                  Commission-Based Deals
                </h1>
              </div>

              <h1 className="text-lg text-white">
                Flexible, performance-aligned partnerships.
              </h1>

              <div className="grid gap-4 mt-6">
                <div className="flex gap-6 items-center">
                  <h1 className="text-green-600 leading-normal font-black 2xl:text-3xl lg:text-3xl md:text-xl sm:text-xl text-xl">
                    Trust Strip
                  </h1>

                  <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-0 md:mt-0 sm:mt-0 mt-0">
                    <div className="h-0.5 bg-green-600 2xl:w-20 md:w-15 w-15"></div>
                    <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-6"></div>
                  </div>
                </div>

                <ul>
                  <li className="text-xl flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#fff"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className=" text-white">
                      5+ years in email marketing
                    </span>
                  </li>
                  <li className="text-xl flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#fff"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="mt-2 text-white">
                      Thousands of inboxes deployed
                    </span>
                  </li>
                  <li className="text-xl flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#fff"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>{" "}
                    <span className="mt-2 text-white">
                      Smartlead & Bison compatible
                    </span>
                  </li>
                  <li className="text-xl flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#fff"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>{" "}
                    <span className="mt-2 text-white">
                      Deliverability-first setup
                    </span>
                  </li>
                </ul>

                <Button
                  title="Pricing"
                  style="primary-btn 2xl:mt-4"
                  link="/pricing"
                  align=""
                ></Button>
              </div>
            </div>

            <div className="flex 2xl:justify-end lg:justify-start md:justify-start sm:justify-center justify-center  2xl:mt-0 lg:mt-0 sm:mt-6 mt-6">
              <div className="2xl:p-6 lg:p-6 p-3 bg-gray-300/90 rounded-2xl w-fit">
                <div className="rounded-2xl overflow-hidden">
                  <div>
                    <Image src={Deals} alt="Hello" height={350} width={700} />
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
