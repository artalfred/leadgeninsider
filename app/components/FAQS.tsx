import AccordionApp from "./AccordionApp";

export default function FAQS() {
  return (
    <div className="max-w-7xl mx-auto 2xl:py-40 md:py-20 sm:py-20 py-20 2xl:px-0 md:px-4 sm:px-4 px-4">
      <div className="grid justify-center items-center">
        <h1 className="text-center leading-normal font-black 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-2xl text-2xl">
          Frequently Asked Questions
        </h1>
        <h1 className="mt-2 2xl:text-xl md:text-xl sm:text-lg text-lg text-center 2xl:w-240 md:w-full w-full">
          Everything you need to know about our
          <span className="font-bold">
            &nbsp; high-scale inbox infrastructure,&nbsp;
          </span>
          automated setup, and how we maintain elite deliverability for your
          campaigns.
        </h1>
      </div>
      <div className="grid mt-20">
        <AccordionApp />
      </div>
    </div>
  );
}
