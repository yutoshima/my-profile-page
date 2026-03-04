import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../components/contact-form";
import { Card } from "../components/card";
import { PageLayout } from "../components/page-layout";
import { socials } from "../data/socials";
import profileData from "../data/profile.json";

export const metadata: Metadata = {
  title: "お問い合わせ | Yuto Shima",
  description: "島 悠人へのお問い合わせ",
};

export default function Contact() {
  return (
    <PageLayout
      title={profileData.headings.contact}
      description={profileData.descriptions.contact}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ContactForm />

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">SNSでつながる</h3>
          {socials.map((s) => (
            <Card key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 flex items-center gap-4 group"
              >
                <span className="flex items-center justify-center w-12 h-12 border rounded-full text-white/90 group-hover:text-white border-white/40 bg-brand-dark group-hover:bg-brand-dark group-hover:border-white/60 transition-colors">
                  {s.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-lg font-medium text-white/90 group-hover:text-white font-display transition-colors">
                    {s.handle}
                  </span>
                  <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
