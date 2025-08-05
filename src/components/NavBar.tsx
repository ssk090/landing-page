import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.7)" : "rgba(10,10,10,0)",
        }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-7xl rounded-b-2xl px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8"
      >
        <nav className="flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="group flex items-center gap-2">
            <Logo />
            <span className="text-sm font-semibold text-white group-hover:opacity-90">
              Agentic
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <NavLink key={l.label} href={l.href}>
                {l.label}
              </NavLink>
            ))}
            <div className="ml-2 flex items-center gap-2">
              <CTASecondary>Log in</CTASecondary>
              <CTAPrimary>Start free</CTAPrimary>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              initial={false}
              animate={open ? { rotate: 45, y: 1 } : { rotate: 0, y: 0 }}
              className="absolute h-[2px] w-5 bg-white"
            />
            <motion.span
              initial={false}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="absolute h-[2px] w-5 bg-white"
              style={{ transform: "translateY(6px)" }}
            />
            <motion.span
              initial={false}
              animate={open ? { rotate: -45, y: -1 } : { rotate: 0, y: 0 }}
              className="absolute h-[2px] w-5 bg-white"
              style={{ transform: "translateY(-6px)" }}
            />
          </button>
        </nav>

        {/* Mobile sheet */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden"
            >
              <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-neutral-900/70 p-2 backdrop-blur">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
                  >
                    {l.label}
                    <motion.span
                      className="opacity-0 group-hover:opacity-100"
                      initial={false}
                    >
                      →
                    </motion.span>
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white">
                    Log in
                  </button>
                  <button className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-neutral-900">
                    Start free
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative text-sm text-neutral-200 transition-colors hover:text-white"
    >
      {children}
      <motion.span
        layoutId="underline"
        className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-white/60 group-hover:scale-x-100"
        transition={{ duration: 0.2 }}
      />
    </a>
  );
}

function CTAPrimary({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      href="#get-started"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/10"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
      />
    </motion.a>
  );
}

function CTASecondary({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      href="#login"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white backdrop-blur"
    >
      {children}
    </motion.a>
  );
}

function Logo() {
  return (
    <div className="relative">
      <motion.span
        className="absolute -inset-2 rounded-full bg-fuchsia-500/10 blur-md"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-white">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="text-neutral-900"
        >
          <path
            d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm3.5 0a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
