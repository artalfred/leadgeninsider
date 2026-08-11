import PricingCard from "../components/PricingCard";
import Section from "../components/Section";

export default function Pricing() {
  return (
    <Section>
      <div className="bg-[#f2f2f2] rounded-sm 2xl:p-12 md:p-5 p-5 shadow-xs">
        <div className="flex gap-4 items-center">
          <h1 className="title text-start leading-normal font-medium 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-3xl text-black">
            Pricing
          </h1>

          <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-2">
            <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-15"></div>
            <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-6"></div>
          </div>
        </div>

        <div className="grid justify-between items-center mt-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 2xl:gap-10 md:gap-5 sm:gap-5 gap-5">
          <PricingCard
            title="Starter"
            price="500"
            description="1,000 Outlook Inboxes"
            list1="Deliverability-optimized setup"
            list2="DNS authentication configuration from day one"
            list3="Smartlead & Bison ready"
            list4="Warmup ready"
            btnName="Get Started"
            btnStyle="primary-gray-btn"
          />

          <PricingCard
            title="Growth ⭐ Most Popular"
            price="1,500"
            description="3,000 Outlook Inboxes"
            list1="Everything in Starter"
            list2="Priority deployment configuration from day one"
            list3="Infrastructure management"
            list4="Priority support"
            btnName="Get Started"
            btnStyle="primary-gray-btn"
          />

          <PricingCard
            title="Enterprise"
            price="3,000"
            description="6,000 Outlook Inboxes"
            list1="Everything in Growth"
            list2="Dedicated account manager"
            list3="Custom onboarding"
            list4="Best value per inbox"
            btnName="Get Inboxes at Scale"
            btnStyle="primary-dark-btn"
          />
        </div>
      </div>
    </Section>
  );
}
