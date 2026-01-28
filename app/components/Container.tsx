import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl 2xl:p-0 md:p-6 sm:p-6 p-4">{children}</div>
    </div>
  );
}
