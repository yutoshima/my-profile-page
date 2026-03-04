import { Navigation } from "./nav";
import { Footer } from "./footer";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  description: string;
}>;

export const PageLayout = ({ title, description, children }: Props) => {
  return (
    <div className="bg-brand min-h-screen">
      <Navigation />
      <div className="max-w-3xl mx-auto px-8 pt-24 pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-6 text-white">
          {title}
        </h1>
        <p className="text-white/60 text-center mb-12">{description}</p>
        <div className="w-full h-px bg-white/15 mb-12" />
        {children}
      </div>
      <Footer />
    </div>
  );
};
