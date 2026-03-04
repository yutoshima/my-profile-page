import { socials } from "../data/socials";
import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-white/10">
      <Container className="flex items-center justify-between">
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
      </Container>
    </footer>
  );
};
