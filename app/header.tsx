import Image from "next/image";
import Button from "./components/Button";

import Logo from "@/public/Logo/Logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="2xl:px-40 lg:px-40 md:px-40 px-5 sm:p-4 p-3 bg-sky-700/30 backdrop-blur-2xl flex justify-center shadow-sm fixed top-0 w-full z-10">
      {/* MENU */}
      <div className="flex justify-between items-center w-full">
        {/* LOGO */}
        <Link href="/">
          <div className="2xl:block lg:block md:block sm:block block 2xl:pl-0 lg:pl-0 md:pl-0 sm:pl-2 pl-2">
            <Image
              src={Logo}
              alt="LeadGenInsder.Official.Logo"
              className="2xl:w-40 lg:w-38 md:w-36 sm:w-32 w-30"
              height={60}
            />
          </div>
        </Link>

        {/* NAV MENU */}
        <ul className="flex items-center gap-12 ">
          <Link
            href="/whyleadgeninsider"
            scroll
            className="2xl:block lg:block md:hidden sm:hidden hidden 2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-medium"
          >
            <li className="cursor-pointer">Why LeadGenInsider</li>
          </Link>
          <Link
            href="/pricing"
            className="2xl:block lg:block md:hidden sm:hidden hidden 2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-medium"
          >
            <li className="cursor-pointer">Pricing</li>
          </Link>
          <Link
            href="/aboutUs"
            className="2xl:block lg:block md:hidden sm:hidden hidden 2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-normal"
          >
            <li className="cursor-pointer">About Us</li>
          </Link>
          <Link
            href="/ourTeam"
            className="2xl:block lg:block md:hidden sm:hidden hidden 2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-normal"
          >
            <li className="cursor-pointer">Our Team</li>
          </Link>
          <Link
            href="/faqs"
            className="2xl:block lg:block md:hidden sm:hidden hidden 2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-normal"
          >
            <li className="cursor-pointer">FAQ&apos;s</li>
          </Link>
        </ul>

        {/* RIGHT BUTTON */}
        <Button title="Let’s Talk" style="primary-btn" link="/contact"></Button>
      </div>
    </header>
  );
}
