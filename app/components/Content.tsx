type Props = {
  content: string;
  style: string;
};

export default function Content({ content, style }: Props) {
  return (
    <h5
      className={`${style} 2xl:text-xl lg:text-xl md:text-lg sm:text-md text-md text-gray-300`}
    >
      {content}
    </h5>
  );
}
