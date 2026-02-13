"use client";

type Props = {
  title: string;
  titleStyle: string;
  style: string;
};

export default function SectionTitle({ title, style, titleStyle }: Props) {
  return (
    <div className={`flex ${style} gap-6 items-center`}>
      <h1
        className={`${titleStyle} text-start leading-normal font-medium 2xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl`}
      >
        {title}
      </h1>

      <div className="grid 2xl:gap-3 md:gap-2 gap-2 2xl:mt-2 md:mt-2 sm:mt-2 mt-2">
        <div className="h-0.5 bg-green-600 2xl:w-25 md:w-20 w-15"></div>
        <div className="h-0.5 bg-green-600 2xl:w-10 md:w-8 w-6"></div>
      </div>
    </div>
  );
}
