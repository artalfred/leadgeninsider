"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How is this different from buying hundreds of domains?",
    answer:
      "Instead of purchasing and managing hundreds of separate domains, we build a structured email infrastructure using your primary domain and strategically organized subdomains. This reduces infrastructure costs while making your outbound setup easier to manage and scale.",
    content: "",
    contentTwo: " ",
  },
  {
    question: "Do I need to buy multiple domains?",
    answer:
      "Not necessarily. Our infrastructure is designed to maximize the use of your primary domain through a structured subdomain strategy. We can also incorporate additional domains when your scale or specific requirements call for it.",
  },
  {
    question: "Are Outlook inboxes suitable for lead generation?",
    answer:
      "Yes. We provide and configure Outlook/Microsoft 365 inboxes specifically for outbound lead generation and marketing campaigns, with appropriate sending limits, warmup, and infrastructure configuration.",
  },
  {
    question: "How many inboxes can you support?",
    answer:
      "Our infrastructure is designed to scale from smaller deployments to thousands of Outlook inboxes. The exact setup depends on your campaign volume, domains, and infrastructure requirements.",
  },
  {
    question: "How many inboxes do you assign per subdomain?",
    answer:
      "We use a structured inbox-to-subdomain allocation based on your desired sending volume and deliverability requirements. This allows us to distribute sending activity across the infrastructure rather than concentrating everything in one place.",
  },
  {
    question: "Do you provide and manage Outlook inboxes?",
    answer:
      "Yes. We can handle the complete setup, including Outlook/Microsoft 365 inbox provisioning, account configuration, naming structure, DNS, authentication, warmup, and outreach platform integration.",
  },
  {
    question: "Do you warm up the inboxes?",
    answer:
      "Yes. We implement a controlled warmup process before increasing sending volume. Sending limits are gradually adjusted based on inbox maturity and performance rather than immediately pushing maximum volume.",
  },
  {
    question: "What email and outreach platforms do you support?",
    answer:
      "We primarily provide Outlook/Microsoft 365 inbox infrastructure and can integrate the inboxes with popular outbound platforms such as Smartlead and Bison, depending on your campaign requirements.",
  },
  {
    question: "Can you manage the campaigns as well?",
    answer:
      "Yes. Beyond infrastructure setup, we can support the outbound campaign itself, including inbox management, campaign configuration, sending infrastructure, and ongoing optimization.",
  },
  {
    question: "What happens if inbox deliverability drops?",
    answer:
      "We monitor inbox performance and sending activity to identify potential deliverability issues. If an inbox begins underperforming, we can adjust sending volume, review the infrastructure, and take corrective steps to protect the overall system.",
  },
  {
    question: "How fast can you set everything up?",
    answer:
      "Setup time depends on the size and complexity of your deployment. Smaller infrastructures can be launched quickly, while larger deployments require additional configuration and testing to ensure everything is properly prepared before sending.",
  },
  {
    question: "Will this save me money?",
    answer:
      "In many cases, yes. A structured infrastructure can reduce the need to purchase and manage large numbers of individual domains while centralizing inbox provisioning, management, and campaign infrastructure. Your actual savings depend on your current setup and sending volume.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-start 2xl:pt-20 md:pt-10 sm:pt-10 pt-10 2xl:pb-20 md:pb-20 sm:pb-0 pb-0">
        <div className="2xl:pb-0 md:pb-4 sm:pb-4 pb-4">
          <h1
            className={`title text-black text-start leading-normal font-bold 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl`}
          >
            Frequently Asked
            <br className="2xl:block lg:block md:hidden hidden"></br> Questions
          </h1>

          <h2 className="mt-2 2xl:w-240 md:w-full 2xl:text-xl md:text-xl md:text-md sm:text-md text-md w-full text-black-300">
            Have another questions? Please contact our team!
          </h2>
        </div>

        <div>
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden border-b border-dark-400"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center 2xl:pt-5 md:pt-2 sm:pt-2 pt-2 2xl:pb-5 md:pb-2 sm:pb-2 pb-2 px-0 text-left font-medium text-white"
              >
                <span className="text-black font-normal cursor-pointer 2xl:text-xl md:text-md sm:text-md text-sm">
                  {faq.question}
                </span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-5 text-dark-300 grid gap-2">
                  <h1 className="text-md">{faq.answer}</h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
