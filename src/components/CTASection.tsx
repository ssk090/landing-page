import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden bg-neutral-950 py-20 sm:py-28"
    >
      {/* Soft background accents */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_20%_20%,rgba(147,51,234,0.12),transparent),radial-gradient(700px_300px_at_80%_60%,rgba(59,130,246,0.12),transparent)]"
        aria-hidden
      />
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 backdrop-blur"
        >
          <div className="grid items-center gap-8 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Launch your first agent in under 10 minutes.
              </h2>
              <p className="mt-3 max-w-xl text-neutral-300">
                Plug into your stack, set goals, and let agents execute. Start
                free—upgrade when you scale.
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-neutral-300 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <Check /> No credit card required
                </li>
                <li className="flex items-center gap-2">
                  <Check /> SOC 2 ready
                </li>
                <li className="flex items-center gap-2">
                  <Check /> API & no‑code
                </li>
                <li className="flex items-center gap-2">
                  <Check /> 24/7 support
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <CTAPrimary>Start free</CTAPrimary>
              <CTASecondary>Book a demo</CTASecondary>
              <span className="text-xs text-neutral-400">
                Free trial • Cancel anytime
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTAPrimary({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      href="#signup"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/10"
    >
      {children} <span className="ml-2">→</span>
    </motion.a>
  );
}

function CTASecondary({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      href="#demo"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur"
    >
      {children}
    </motion.a>
  );
}

function Check() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
