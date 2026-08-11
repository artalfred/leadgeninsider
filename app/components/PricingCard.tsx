import Button from "./Button";

type Props = {
  title: string;
  description: string;
  price: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  btnName: string;
  btnStyle: string;
};

export default function PricingCard({
  title,
  description,
  price,
  list1,
  list2,
  list3,
  list4,
  btnName,
  btnStyle,
}: Props) {
  return (
    <div className="bg-white rounded-sm p-6 shadow-lg">
      <div className="grid gap-2 items-center">
        <h1 className="title text-[#3F3653] text-start leading-normal font-medium 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
          {title}
        </h1>
        <h3 className="text-gray-700 text-start leading-normal font-normal 2xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg">
          {description}
        </h3>
      </div>

      <h1 className="number mt-10 text-5xl font-bold text-[#3F3653]">
        ${price}
        <span className="text-lg text-gray-600 font-normal">/ month</span>
      </h1>

      <div className="grid gap-4 mt-6 ">
        <ul className="grid gap-1">
          <li className="text-md gap-3 text-gray-700">
            <span className="mr-4">✔</span>
            {list1}
          </li>
          <li className="text-md gap-3 text-gray-700">
            <span className="mr-4">✔</span>
            {list2}
          </li>
          <li className="text-md gap-3 text-gray-700">
            <span className="mr-4">✔</span>
            {list3}
          </li>
          <li className="text-md gap-3 text-gray-700">
            <span className="mr-4">✔</span>
            {list4}
          </li>
        </ul>
      </div>
      <Button
        title={btnName}
        style={`${btnStyle} mt-4 w-full`}
        link="/contact"
      ></Button>
    </div>
  );
}
