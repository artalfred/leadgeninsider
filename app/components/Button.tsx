import Link from "next/link";

type Props = {
  title: string;
  style: string;
  link: string;
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ title, style, link, click }: Props) {
  return (
    <Link href={`${link}`}>
      <button
        onClick={click}
        className={`rounded-sm gap-2 2xl:px-6 lg:px-6 md:px-6 sm:px-4 px-4 2xl:pt-3 lg:pt-3 md:pt-3 sm:pt-3 pt-3 2xl:pb-3 lg:pb-3 md:pb-3 sm:pb-3 pb-3 2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-medium ${style} `}
      >
        {title}
      </button>
    </Link>
  );
}
