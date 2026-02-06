import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo/Logo.svg";

export default function Footer() {
  return (
    <div>
      <div className="2xl:p-10 md:p-4 sm:p-4 p-4 mt-30">
        <div
          className="rounded-2xl 2xl:px-30 md:px-15 sm:px-7 px-7 2xl:py-15 py-7 bg-sky-700/30 backdrop-blur-2xl"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="2xl:flex md:grid sm:grid grid gap-2 justify-between items-center border-b-2 border-b-gray-600 2xl:pb-10 md:pb-5 sm:pb-5 pb-5">
              <div>
                <Link href="/">
                  <div className="2xl:block lg:block md:block sm:block block 2xl:pl-0 lg:pl-0 md:pl-0 sm:pl-0 pl-0">
                    <Image
                      src={Logo}
                      alt="LeadGenInsder.Official.Logo"
                      className="2xl:w-45 lg:w-38 md:w-40 sm:w-35 w-40"
                      height={70}
                    />
                  </div>
                </Link>
              </div>

              <div>
                <h1 className="text-gray-300">
                  Building reliable B2B solutions that simplify operations and
                  power modern businesses.
                </h1>
              </div>
            </div>

            <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 py-5 sm:grid-cols-1 grid-cols-1 justify-between items-start 2xl:mt-15 md:mt-10 sm:mt-5 mt-5 2xl:gap-0 lg:gap-5 md:gap-5 sm:gap-10 gap-5 border-b-2 border-b-gray-600">
              <div className="grid gap-4 2xl:pb-10 md:pb-5 sm:pb-5 pb-5">
                <div className="flex gap-4">
                  <h2 className="text-xl font-medium border-b-2 border-b-[#004aad] pb-2 text-white">
                    Company
                  </h2>
                </div>

                <ul className="grid gap-2">
                  <Link href="/whyleadgeninsider">
                    <li className="w-fit text-lg font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200">
                      Why LeadGenInsider
                    </li>
                  </Link>
                  <Link href="/pricing">
                    <li className="w-fit text-lg font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200">
                      Pricing
                    </li>
                  </Link>
                  <Link href="/aboutUs">
                    <li className="w-fit text-lg font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200">
                      About Us
                    </li>
                  </Link>

                  <Link href="/ourTeam">
                    <li className="w-fit text-lg font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200">
                      Our Team
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="grid gap-4 2xl:pb-10 md:pb-5 sm:pb-5 pb-5">
                <div className="flex gap-4">
                  <h2 className="text-xl font-medium border-b-2 border-b-[#004aad] pb-2 text-white">
                    Resources
                  </h2>
                </div>

                <ul className="grid gap-2">
                  <Link href="/blog">
                    <li className="w-fit text-lg font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200">
                      Blog
                    </li>
                  </Link>
                  <Link href="/faqs">
                    <li className="w-fit text-lg font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200">
                      FAQ’s
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="grid gap-4 2xl:pb-10 md:pb-5 sm:pb-5 pb-5">
                <div className="flex gap-4">
                  <h2 className="text-xl font-medium border-b-2 border-b-[#004aad] pb-2 text-white">
                    Contact
                  </h2>
                </div>

                <ul className="grid gap-2">
                  <Link href="/">
                    <li className="w-fit text-lg font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200">
                      Email: info@leadgeninsider.co
                    </li>
                  </Link>
                  <Link href="/faqs">
                    <li className="w-fit text-lg font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200">
                      Phone: +63 967 134 8488
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="2xl:flex lg:grid md:grid sm:grid grid gap-4 justify-between items-start 2xl:mt-15 md:mt-10 sm:mt-10 mt-10 2xl:gap-0">
              <div className="grid gap-4 2xl:pb-10 md:pb-5 sm:pb-5 pb-5">
                <div className="flex gap-4">
                  <h2 className="text-md font-normal text-gray-400 text-center">
                    © Copyright 2026 LeadgenInsider - All Right Reserved
                  </h2>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 2xl:pb-10 md:pb-5 sm:pb-5 pb-5">
                <div className="flex gap-4">
                  <Link
                    href="/privacypolicy"
                    className="text-md font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/termsofservice"
                    className="text-md font-normal text-gray-400 hover:text-gray-200 transition-all ease-in-out duration-200"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
