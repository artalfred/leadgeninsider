import { getBlogs } from "@/lib/getBlogs";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Scaling 3,000+ Inboxes Safely",
  description:
    "Learn how to scale to 3,000+ inboxes using automated, single-domain architecture without burning your deliverability.",
  keywords:
    "Cold email infrastructure, Smartlead setup, email deliverability, subdomain architecture",
};

export default async function Page() {
  const blogs = getBlogs();

  return (
    <div className="max-w-4xl mx-auto">
      {blogs.slice(0, 1).map((blog) => (
        <div key={blog.id} className="grid gap-10 justify-center mt-50 px-4">
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
                At LeadGenInsider, we’ve spent over 5 years observing a
                repetitive cycle of &quot;burn and rebuild.&quot; Most agencies
                rely on hundreds of disposable domains—a strategy that is
                fragile, expensive, and chaotic.
              </h1>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-xl text-[22px] font-normal">
                We built a better way.
              </h1>
              <h1 className="text-white text-xl text-[22px] font-medium">
                The Problem: The Disposable Domain Trap
              </h1>
              <h1 className="text-gray-400 text-lg">
                Traditional high-volume outbound relies on &quot;burning&quot;
                domains. When one domain hits a spam filter, the whole operation
                halts.
              </h1>
              <ul className="ml-10 mt-4 grid gap-2">
                <li className="text-gray-400 text-lg list-disc">
                  The Cost: Thousands of dollars wasted on new registrations.
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  The Risk: Inconsistent deliverability and fragmented
                  reputation.
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  The Chaos: Manual DNS setups that are prone to human error.
                </li>
              </ul>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-[22px] font-medium">
                The Solution: Multi-Subdomain Architecture
              </h1>
              <h1 className="text-gray-400 text-lg">
                Instead of shortcuts, we specialize in automation-driven
                infrastructure. We utilize a single-domain, multi-subdomain
                architecture that is fully automated and standardized.
              </h1>
              <h6 className="ml-4 text-gray-400 text-lg mt-4">
                &quot;We don’t sell hacks. We build systems designed for natural
                sending behavior and long-term stability.&quot;
              </h6>
            </div>

            <div className="grid gap-3 py-10">
              <h1 className="text-white text-[22px] font-medium">
                Why Automation-First Infrastructure Wins
              </h1>
              <h1 className="text-gray-400 text-lg">
                By automating the foundations, we allow our clients to operate
                between 500 and 3,000+ inboxes safely. Here is how we protect
                your deliverability:
              </h1>

              <ul className="mt-4 grid gap-2 ml-10">
                <li className="text-gray-400 text-lg list-disc">
                  Independent Reputation: Each subdomain maintains its own
                  reputation. If one inbox degrades, we replace it without
                  tearing down your entire system.
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Managed Setup: We handle the technical complexity of DNS and
                  infrastructure deployment.
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Platform Compatibility: Our systems are built to be 100%
                  compatible with Smartlead and Bison.
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Turnkey Deployment: We provide infrastructure that works from
                  day one, allowing your team to focus on the copy and the
                  close.
                </li>
              </ul>
            </div>

            <div className="grid gap-3 py-10">
              <h1 className="text-white text-[22px] font-medium">
                Who Is This For?
              </h1>
              <h1 className="text-gray-400 text-lg">
                Our infrastructure is purpose-built for:
              </h1>

              <ul className="mt-4 grid gap-2 ml-10">
                <li className="text-gray-400 text-lg list-decimal">
                  Lead Generation Agencies looking to scale client campaigns.
                </li>
                <li className="text-gray-400 text-lg list-decimal">
                  Cold Email Teams tired of manual inbox management.
                </li>
                <li className="text-gray-400 text-lg list-decimal">
                  High-Volume Marketers who need elite deliverability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
