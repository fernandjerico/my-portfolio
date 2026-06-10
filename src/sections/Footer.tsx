import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/FernandJerico",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/fernand-jerico/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/fernandjrc_/",
  },
  {
    title: "Email",
    href: "mailto:fernandjerico96@gmail.com",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; {new Date().getFullYear()}, All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 cursor-pointer">
                <span className="font-semibold">{link.title}</span>
                <ArrowRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
