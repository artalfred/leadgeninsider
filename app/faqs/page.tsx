"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How is this different from buying hundreds of domains?",
    answer:
      "Most setups rely on purchasing and managing hundreds of separate domains, which is expensive, time-consuming, and fragile. We use one main domain and automate the creation of hundreds of subdomains, each configured as an independent sender. This approach reduces costs, eliminates manual DNS work, and protects deliverability at scale.",
    content: "",
    contentTwo: " ",
  },
  {
    question: "Is using subdomains safe for deliverability?",
    answer:
      "Yes—when done correctly. Each subdomain has its own SPF, DKIM, DMARC, and MX records, meaning it builds reputation independently. If one subdomain degrades, it does not affect the others or the main domain.",
  },
  {
    question: "How many inboxes do you assign per subdomain?",
    answer:
      "We use 3 inboxes per subdomain. This keeps sending behavior natural, avoids volume spikes, and reduces spam signals—especially important for cold outreach.",
  },
  {
    question: "How many inboxes can you support?",
    answer:
      "Our infrastructure supports 500 to 3,000+ inboxes per client. Most agencies operate safely between 500–1,500 inboxes, but the system is built to scale beyond that when needed.",
  },
  {
    question: "What platforms do you support?",
    answer: "We currently support: Smartlead & Bison",
  },
  {
    question: "Do I need to buy multiple domains?",
    answer:
      "No. You only need one main domain. We handle everything else—subdomain creation, DNS setup, inbox structure, and platform configuration.",
  },
  {
    question: "What happens if inbox deliverability drops?",
    answer:
      "We monitor inbox health continuously. If deliverability drops, we replace inboxes by spinning up new subdomains using our automation—without rebuilding your entire system.",
  },
  {
    question: "Will this save me money?",
    answer:
      "Yes—significantly. Clients typically save thousands of dollars by: Avoiding bulk domain purchases Eliminating manual DNS labor Reducing downtime from burned inboxes You also save weeks of setup time.",
  },
  {
    question: "Do you warm the inboxes?",
    answer:
      "Yes. Inboxes are properly warmed and tested before being used in live campaigns, with sending limits and rotation configured to protect reputation.",
  },
  {
    question: "Can you manage campaigns as well?",
    answer:
      "Yes. We offer managed campaign partnerships, including inbox assignment, sending configuration, and campaign readiness—ideal for teams that want a hands-off setup.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "This service is built primarily for: Lead gen agencies Cold email teams High-volume outbound senders If you’re new to cold email, we’ll guide you—but this system is designed for serious scale.",
  },
  {
    question: "How fast can you set everything up?",
    answer:
      "Most infrastructures are deployed within a few days, depending on inbox volume and domain readiness.",
  },
  {
    question: "Do you offer long-term contracts?",
    answer:
      "No long-term lock-ins. Most clients stay because the system works—not because they’re forced to.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-4 2xl:px-40 lg:px-30 md:px-20 sm:px-4 px-4 2xl:mt-60 md:mt-40 sm:mt-40 mt-40">
      <div className="grid justify-center items-center 2xl:pb-20 md:pb-15 sm:pb-10 pb-10">
        <h1 className="text-center leading-normal font-medium 2xl:text-6xl lg:text-6xl md:text-4xl sm:text-3xl text-3xl text-white">
          Frequently Asked Questions
        </h1>
        <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-md text-center 2xl:w-240 md:w-full w-full text-gray-400">
          Everything you need to know about our
          <span className="font-medium text-green-500">
            &nbsp; high-scale inbox infrastructure,&nbsp;
          </span>
          automated setup, and how we maintain elite deliverability for your
          campaigns.
        </h1>
      </div>

      {FAQS.map((faq, index) => (
        <div key={index} className="overflow-hidden border-b border-amber-100">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center pt-2 pb-6 px-0 text-left font-medium text-white"
          >
            <span className="font-normal cursor-pointer 2xl:text-xl md:text-md sm:text-md text-md">
              {faq.question}
            </span>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="pb-5 text-gray-300 grid gap-2">
              <h1 className="text-md">{faq.answer}</h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
