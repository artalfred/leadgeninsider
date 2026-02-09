import { getBlogs } from "@/lib/getBlogs";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "One Domain, Multiple Pipelines",
  description:
    "In lead generation, scale usually comes with a hidden tax: more domains, more inboxes, more subscriptions, and more overhead.",
  keywords:
    "Cold email infrastructure, Smartlead setup, email deliverability, subdomain architecture",
};

export default async function Page() {
  const blogs = getBlogs();

  return (
    <div className="max-w-4xl mx-auto">
      {blogs.slice(0, 1).map((blog) => (
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
              <h1 className="text-white text-xl text-[22px] font-normal">
                Enter the subdomain strategy.
              </h1>
              <h1 className="text-gray-400 text-lg">
                Instead of managing a growing list of separate domains, you can
                build multiple outreach pipelines under a single primary domain
                using structured subdomains. This approach lets you expand email
                operations, segment campaigns, and maintain deliverability — all
                while keeping infrastructure lean.
              </h1>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-xl text-[22px] font-medium">
                Why Traditional Domain Scaling Gets Expensive
              </h1>
              <h2 className="text-gray-300 text-xl">
                The common playbook looks like this:
              </h2>
              <ul className="ml-10 mt-4 grid gap-2">
                <li className="text-gray-400 text-lg list-disc">
                  Buy new domains for each campaign
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Set up separate inbox environments
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Maintain domain warmup and reputation individually
                </li>
              </ul>

              <h1 className="text-gray-400 text-lg">
                This works… until it doesn’t. Costs stack up quickly, and
                operational complexity becomes a bottleneck. Worse, managing
                dozens of unrelated domains can fragment your deliverability
                strategy.
              </h1>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-[22px] font-medium">
                The Subdomain Advantage
              </h1>
              <h1 className="text-gray-300 text-lg">
                Subdomains act like independent lanes under your main domain.
                For example:
              </h1>
              <ul className="ml-10 mt-4 grid gap-2">
                <li className="text-gray-400 text-lg list-disc">
                  outreach.yourdomain.com
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  sales.yourdomain.com
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  followup.yourdomain.com
                </li>
              </ul>
              <h1 className="text-gray-400 text-lg">
                Each subdomain can host its own inbox structure, sending
                profile, and campaign segmentation — without requiring a
                brand-new domain purchase.
              </h1>
            </div>

            <div className="grid gap-3 py-10 border-b border-gray-600">
              <h1 className="text-white text-[22px] font-medium">
                This creates a scalable framework where:
              </h1>

              <ul className="mt-4 grid gap-2 ml-10">
                <li className="text-gray-400 text-lg list-disc">
                  Campaigns remain isolated for reputation management
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Sending volumes are distributed intelligently
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Infrastructure stays centralized
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Costs remain predictable
                </li>
              </ul>
              <h1 className="text-gray-400 text-lg">
                You’re essentially multiplying your outreach capacity while
                keeping your domain ecosystem clean and manageable.
              </h1>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-[22px] font-medium">
                Inbox Architecture That Scales
              </h1>
              <h1 className="text-gray-300 text-lg">
                Within each subdomain, you can create multiple inboxes dedicated
                to specific workflows:
              </h1>
              <ul className="ml-10 mt-4 grid gap-2">
                <li className="text-gray-400 text-lg list-disc">
                  Prospecting sequences
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Follow-up automation
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Reactivation campaigns
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Niche targeting
                </li>
              </ul>
              <h1 className="text-gray-400 text-lg">
                This layered approach spreads activity naturally, reducing risk
                signals while maintaining consistent engagement patterns — a key
                factor in inbox placement.
              </h1>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-[22px] font-medium">
                Deliverability Without Domain Sprawl
              </h1>
              <h1 className="text-gray-300 text-lg">
                One of the biggest myths in cold outreach is that more domains
                automatically mean safer sending. In reality, smart distribution
                matters more than sheer quantity.
              </h1>
              <h2 className="text-gray-300 text-lg">
                A well-managed subdomain framework allows:
              </h2>
              <ul className="ml-10 mt-4 grid gap-2">
                <li className="text-gray-400 text-lg list-disc">
                  Reputation segmentation
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Controlled ramp-up
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Easier monitoring
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Simplified DNS management
                </li>
              </ul>
              <h1 className="text-gray-400 text-lg">
                Instead of juggling dozens of scattered assets, your sending
                ecosystem becomes structured and intentional.
              </h1>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-[22px] font-medium">
                Cost Efficiency Meets Operational Control
              </h1>
              <h2 className="text-gray-300 text-lg">
                For growth-focused teams, the financial advantage is obvious:
              </h2>
              <ul className="ml-10 mt-4 grid gap-2">
                <li className="text-gray-400 text-lg list-disc">
                  Fewer domain purchases
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Reduced setup overhead
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Centralized management
                </li>
                <li className="text-gray-400 text-lg list-disc">
                  Lower maintenance burden
                </li>
              </ul>
              <h5 className="text-gray-400 text-lg">
                But the real win is operational clarity. Campaigns stay
                organized, troubleshooting becomes faster, and scaling no longer
                feels chaotic.
              </h5>
            </div>

            <div className="grid gap-3 border-b border-gray-600 py-10">
              <h1 className="text-white text-[22px] font-medium">
                The Bigger Picture: Infrastructure as a Growth Lever
              </h1>
              <h2 className="text-gray-400 text-lg">
                Lead generation isn’t just about messaging — it’s about the
                systems that support volume and consistency. Subdomain-driven
                inbox architecture gives teams a professional-grade foundation
                to grow outreach without runaway costs.{" "}
              </h2>
              <h3 className="text-gray-400 text-lg">
                Smart infrastructure isn’t flashy, but it quietly determines how
                far your pipeline can scale.
              </h3>
              <h5 className="text-gray-400 text-lg">
                And in a competitive market, efficiency isn’t optional — it’s
                leverage.
              </h5>
            </div>

            <div className="grid gap-3 py-10">
              <h5 className="text-gray-400 text-lg">
                If your outreach system feels bloated, fragmented, or expensive,
                it may be time to rethink how your domains are structured.
                Sometimes the best scaling strategy isn’t adding more — it’s
                organizing what you already have.
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
