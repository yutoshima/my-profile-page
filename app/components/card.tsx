import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors duration-200">
      {children}
    </div>
  );
};
