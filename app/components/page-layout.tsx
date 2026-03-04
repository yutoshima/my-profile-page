import { Navigation } from "./nav";
import { Footer } from "./footer";
import { Container } from "./container";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  description: string;
  label?: string;
}>;

export const PageLayout = ({ title, description, label, children }: Props) => {
  return (
    <div className="bg-brand min-h-screen">
      <Navigation />
      <Container className="pt-32 pb-12">
        {label && (
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">{label}</p>
        )}
        <h1 className="font-bold text-3xl md:text-5xl text-left mb-6 text-white">
          {title}
        </h1>
        <p className="text-white/60 text-left mb-12">{description}</p>
        <div className="w-full h-px bg-white/15 mb-12" />
        {children}
      </Container>
      <Footer />
    </div>
  );
};
