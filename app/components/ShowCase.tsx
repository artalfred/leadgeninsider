import Image from "next/image";
import Button from "./Button";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FAQAccordion from "../faqs/page";
import BI_one from "@/public/Showcase/BI_one.svg";
import BI_two from "@/public/Showcase/BI_two.svg";
import BI_three from "@/public/Showcase/BI_three.svg";
import BI_four from "@/public/Showcase/BI_four.svg";

export default function ShowCase() {
  return (
    <Section>
      <div className="bg-[#f2f2f2] shadow-sm rounded-sm grid 2xl:py-15 md:py-15 sm:py-15 py-5 2xl:px-12 md:px-10 sm:px-5 px-5">
        <div className="flex justify-between items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
          <div>
            <div className="flex gap-6 items-center">
              <SectionTitle
                title="Behind the Infrastructure"
                style=""
                titleStyle="text-black"
              />
            </div>

            <div className="grid">
              <h4 className="text-[#3F3653] font-medium 2xl:text-xl md:text-md sm:text-md text-md">
                Real campaigns. Real infrastructure. Real deliverability.
              </h4>

              <Button
                title="Send us a message – we reply in minutes."
                style="primary-dark-btn mt-4"
                link="/contact"
              ></Button>
            </div>

            <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-10">
              <div>
                <Image src={BI_one} alt="BI-one" />
              </div>
              <div>
                <Image src={BI_two} alt="BI-one" />
              </div>
              <div>
                <Image src={BI_three} alt="BI-one" />
              </div>
              <div>
                <Image src={BI_four} alt="BI-one" />
              </div>
            </div>
          </div>
        </div>

        {/* FAQS */}
        <FAQAccordion />
      </div>
    </Section>
  );
}
