import { Github, Mail, Facebook } from "lucide-react";

const socials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
    href: "https://x.com/Yuto00579583",
    label: "X",
  },
  {
    icon: <Github className="w-4 h-4" />,
    href: "https://github.com/yutoshima",
    label: "GitHub",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    href: "mailto:yutoshima1234@gmail.com",
    label: "Email",
  },
  {
    icon: <Facebook className="w-4 h-4" />,
    href: "https://www.facebook.com/profile.php?id=100090928243991",
    label: "Facebook",
  },
];

export const Footer = () => {
  return (
    <footer className="px-8 py-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <p className="text-white/30 text-xs">© 2025 Yuto Shima</p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
