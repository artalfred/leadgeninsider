"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import blog from "@/public/Icon/blog.png";
import faqs from "@/public/Icon/faqs.png";
import about from "@/public/Icon/about.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-8">
          <div className="group relative">
            <button className="flex items-center gap-1 font-normal text-white py-7">
              Resources
              <svg
                className="h-6 w-6 transition-transform group-hover:rotate-180 pb-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Resources Menu */}
            <div className="invisible absolute left-0 top-full z-50 w-130 rounded-b-md bg-white p-6 shadow-xl opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
              <div className="grid grid-cols-2 gap-6">
                <MenuItem
                  title="FAQs"
                  description="Get answers and find step-by-step guides."
                  icon={blog}
                  href="/faqs"
                />
                <MenuItem
                  title="Blog"
                  description="Explore insights and best practices for every step of your build."
                  icon={faqs}
                  href="/blog"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuItem({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: string | StaticImport;
  href: string;
}) {
  return (
    <div className="grid gap-1 rounded-lg p-3 transition hover:bg-gray-50 cursor-pointer">
      <Link href={href}>
        <div className="flex gap-2 w-full items-center rounded-md text-gray-700">
          <Image src={icon} alt="Icon" height={20} width={20} />
          <p className="mt-1 font-normal text-gray-900">{title}</p>
        </div>
        <div>
          <span className="text-xs text-gray-500">{description}</span>
        </div>
      </Link>
    </div>
  );
}
