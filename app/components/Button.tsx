import Link from "next/link";

type Props = {
  title: string;
  style: string;
  link: string;
  align: string;
};

export default function Button({ title, style, link, align }: Props) {
  return (
    <Link href={`${link}`} className={`${align}`}>
      <button
        className={`flex items-center gap-2 rounded-md 2xl:px-6 lg:px-6 md:px-6 sm:px-4 px-4 2xl:pt-3 lg:pt-3 md:pt-3 sm:pt-3 pt-3 2xl:pb-2 lg:pb-2 md:pb-2 sm:pb-2 pb-2 2xl:text-md lg:text-md md:text-md sm:text-sm text-sm font-medium ${style} `}
      >
        {title}
      </button>
    </Link>
  );
}
