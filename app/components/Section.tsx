import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Section({ children }: Props) {
  return (
    <section className="mx-auto w-full max-w-425 px-6 py-6 bg-slate-200">
      {children}
    </section>
  );
}
