import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-xl border border-white/20 bg-white/[0.08] hover:border-white/30 hover:bg-white/[0.12] transition-all duration-300">
      {children}
    </div>
  );
};
