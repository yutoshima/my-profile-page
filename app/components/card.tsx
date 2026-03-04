import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
      {children}
    </div>
  );
};
