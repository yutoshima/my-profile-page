import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string }>;

export const Container = ({ children, className }: Props) => (
  <div className={`max-w-4xl mx-auto px-4 sm:px-8 ${className ?? ""}`}>
    {children}
  </div>
);
