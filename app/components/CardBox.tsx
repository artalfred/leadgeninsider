import Image from "next/image";
import Button from "./Button";

type Props = {
  Icon: string;
  ImageIcon: string;
  Title: string;
  Content: string;
  Style: string;
  Link: string;
};

export default function CardBox({
  Icon,
  ImageIcon,
  Title,
  Content,
  Style,
  Link,
}: Props) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`p-6 ${Style} rounded-2xl grid gap-4 align-middle`}
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
      >
        <div className="Flex items-center justify-between w-fit mt-2 mr-2">
          <Image src={Icon} alt="Inboxes" height={50} />
        </div>
        <div className="flex absolute top-0 right-0 items-center justify-between w-fit opacity-20 mt-2 mr-2">
          <Image src={ImageIcon} alt="Inboxes" height={160} />
        </div>

        <div className="grid gap-3">
          <h3 className="2xl:text-2xl md:text-xl sm:text-xl text-xl font-medium w-fit mt-3 text-white">
            {Title}
          </h3>
          <h5 className="2xl:text-lg lg:text-lg md:text-lg sm:text-md text-md text-gray-400">
            {Content}
          </h5>
        </div>

        <div className="flex align-middle gap-6">
          <Button
            title="Schedule Discussion"
            style="secondary-btn mt-4"
            link={`/${Link}`}
            align=""
          ></Button>
        </div>
      </div>
    </div>
  );
}
