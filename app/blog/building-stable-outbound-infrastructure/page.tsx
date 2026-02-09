import { getBlogs } from "@/lib/getBlogs";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Building Stable Outbound Infrastructure",
  description:
    "In the high-stakes world of sales and brokerage, the difference between a record-breaking month and a stagnant one usually boils down to one thing: The Quality of Your Pipeline.",
};

export default async function Page() {
  const blogs = getBlogs();

  return (
    <div className="max-w-4xl mx-auto">
      {blogs.slice(2, 3).map((blog) => (
        <div key={blog.title} className="grid gap-10 justify-center mt-50 px-4">
          <div className="grid gap-3">
            <p className="text-gray-400 text-md text-center font-md">
              Published {blog.date}
            </p>
            <h1
              className="leading-normal text-white text-center font-medium
          2xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl"
            >
              {blog.title}
            </h1>
            <h1 className="text-gray-400 text-center text-lg">
              {blog.description}
            </h1>

            <div className="flex justify-center mt-3">
              <span className="rounded-full bg-white shadow-2xl text-gray-800 px-5 pt-3 pb-3 text-xs w-fit">
                {blog.tag}
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src={blog.image}
              alt={blog.title}
              className="rounded-2xl w-fit"
              height={400}
              width={400}
            />
          </div>

          <div className="mt-4">
            <div className="grid gap-3 border-b border-gray-600 pb-10">
              <h1 className="text-gray-400 text-lg">
                At LeadGenInsider, we aren’t just looking for &quot;clicks&quot;
                or &quot;traffic.&quot; We are in the business of high-intent
                connections. We help companies and independent brokers bridge
                the gap between &quot;searching for business&quot; and
                &quot;closing the deal.&quot;
              </h1>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-xl text-[22px] font-medium">
                Why the Old Way of Prospecting is Dying
              </h1>
              <h1 className="text-gray-400 text-lg">
                Gone are the days when cold calling a random list of names would
                yield a high ROI. Today’s market is saturated, and potential
                clients have built-in &quot;sales filters.&quot;
              </h1>
              <ul className="ml-10 mt-4 grid gap-2">
                <li className="text-gray-400 text-lg list-disc">
                  The Problem: Most leads are cold, uninterested,
                  or—worse—recycled across five different competitors.
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  The Result: Your team wastes hours on the phone with people
                  who were never going to buy, leading to burnout and lost
                  revenue.
                </li>
              </ul>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-[22px] font-medium">
                The Insider Advantage: Quality Over Quantity
              </h1>
              <h1 className="text-gray-400 text-lg">
                We specialize in identifying High-Value Prospects. Whether you
                are a real estate broker, a SaaS company, or a financial service
                provider, we tailor our approach to find clients who are already
                in the &quot;consideration&quot; phase of the buyer’s journey.
              </h1>
            </div>

            <div className="grid gap-3 py-10">
              <h1 className="text-white text-[22px] font-medium">
                More Leads = More Revenue (It’s Simple Math)
              </h1>
              <h1 className="text-gray-400 text-lg">
                We believe that lead generation shouldn&apos;t be an expense; it
                should be an investment. By providing a steady stream of
                potential clients, we allow you to do what you do best:
                Negotiate and Close.
              </h1>
              <h1 className="text-gray-400 text-lg">
                &quot;Stop chasing people who don&apos;t want to be found. Start
                talking to people who are looking for your solution.&quot;
              </h1>
              <h1 className="text-white mt-6 text-[22px] font-medium">
                How We Help You Scale
              </h1>

              <ul className="ml-10 mt-4 grid gap-2">
                <li className="text-gray-400 text-lg list-decimal">
                  Niche Targeting: We dive deep into your specific industry to
                  understand your ideal client profile (ICP).
                </li>
                <li className="text-gray-400 text-lg list-decimal">
                  Multichannel Outreach: We use a mix of SEO, targeted social
                  ads, and proprietary data to find prospects where they live.
                </li>
                <li className="text-gray-400 text-lg list-decimal">
                  Vetting & Verification: We filter out the &quot;window
                  shoppers&quot; so your calendar is only filled with serious
                  inquiries.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
