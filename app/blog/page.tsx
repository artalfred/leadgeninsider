import Image from "next/image";
import { getBlogs } from "@/lib/getBlogs";
import Link from "next/link";

export default function Blog() {
  const blogs = getBlogs();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-20 justify-center 2xl:mt-60 mt-40 2xl:px-0 md:px-6 sm:px-6 px-4">
        <div className="grid 2xl:gap-5 md:gap-4 sm:gap-3 gap-4">
          <div className="flex justify-center 2xl:gap-6 md:gap-4 sm:gap-4 gap-4 items-center">
            <h1 className="leading-normal font-medium 2xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg text-white">
              Outbound strategy
            </h1>

            <div className="grid 2xl:gap-2 md:gap-2 gap-1 2xl:mt-0 md:mt-0 sm:mt-0 mt-0">
              <div className="h-0.5 bg-green-600 2xl:w-10 md:w-10 w-10"></div>
              <div className="h-0.5 bg-green-600 2xl:w-4 md:w-3 w-3"></div>
            </div>
          </div>
          <h1 className="text-white text-center 2xl:leading-none md:leading-normal sm:leading-8 leading-8 font-bold 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl">
            Insights & Updates
          </h1>
          <h5 className="text-white text-center 2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md 2xl:px-30 lg:px-30 md:px-20 sm:px-15 px-0">
            Thoughtful perspectives, product updates, and practical guidance for
            teams that care about &nbsp;
            <span className="text-green-500">
              stability, control, and long-term deliverability.
            </span>
          </h5>
        </div>
      </div>

      <div className="2xl:pt-20 md:py-0 sn:py-0 py-0 relative isolate overflow-hidden lg:overflow-visible  2xl:px-0 md:px-6 sm:px-6 px-4">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>

        <div className="pb-0 2xl:pt-0 md:pt-20 sm:pt-20 pt-20 grid items-center 2xl:gap-20 lg:gap-15 md:gap-15 sm:gap-15 gap-10 ">
          <div className="grid items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-10">
            {blogs.map((blog) => (
              <Link
                href={`/blog/${blog.slug}`}
                key={blog.id}
                className="overflow-hidden"
              >
                <div
                  className="relative p-6 rounded-2xl grid gap-4 align-middle bg-slate-900/80"
                  style={{
                    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                  }}
                >
                  <div className="Flex items-center justify-between w-fit mt-2 mr-2">
                    <Image
                      src={blog.image}
                      alt="Blog_1"
                      className="w-fit rounded-2xl"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="grid gap-5 mt-4">
                    <div className="text-sm text-gray-500 flex items-center gap-4">
                      <span>Published {blog.date} </span>
                      <span>&#183;</span>
                      <span>4 min read</span>
                    </div>
                    <h5 className="2xl:text-4xl lg:text-2xl md:text-2xl sm:text-2xl text-2xl font-normal text-white">
                      {blog.title}
                    </h5>
                    <h5 className="text-sm text-white">{blog.description}</h5>
                    <span className="rounded-full text-bold bg-white shadow-2xl mt-4   text-gray-800 px-3 pt-3 pb-2 text-xs w-fit">
                      {blog.tag}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
