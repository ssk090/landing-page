import { motion } from "framer-motion";

export default function Footer() {
  const links = {
    Product: ["Overview", "Agents", "Automation", "Security"],
    Company: ["About", "Careers", "Contact"],
    Resources: ["Docs", "Blog", "Status"],
  };

  return (
    <footer className="relative isolate bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-sm font-semibold text-white">Agentic</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-neutral-400">
              Deploy autonomous AI agents that ship work, not just chat. Built
              for modern teams.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Badge>GDPR</Badge>
              <Badge>SOC 2</Badge>
              <Badge>ISO 27001</Badge>
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {items.map((i) => (
                  <li key={i}>
                    <a className="hover:text-white" href="#">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-neutral-400 sm:flex sm.items-center sm.justify-between">
          <p>© {new Date().getFullYear()} Agentic, Inc. All rights reserved.</p>
          <div className="mt-3 space-x-4 sm:mt-0">
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wide text-neutral-300">
      {children}
    </span>
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
