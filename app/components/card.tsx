import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ id?: string }>;

export const Card = ({ children, id }: Props) => {
  return (
    <div id={id} className="rounded-xl bg-surface border border-white/10 hover:border-white/25 transition-all duration-200">
      {children}
    </div>
  );
};
