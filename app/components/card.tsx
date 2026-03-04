import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-xl bg-surface border border-white/10 hover:border-white/25 transition-all duration-200">
      {children}
    </div>
  );
};
