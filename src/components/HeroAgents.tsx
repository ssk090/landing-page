import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  type Transition,
} from "framer-motion";
import { useEffect, useRef } from "react";

const badges = [
  { text: "24/7 Automation", color: "from-indigo-500 to-purple-500" },
  { text: "Trained on Your Data", color: "from-emerald-500 to-teal-500" },
  { text: "Secure & Compliant", color: "from-amber-500 to-orange-500" },
];

const features = [
  "Onboard in minutes. ROI in days.",
  "No-code workflows or full API control.",
  "Reliable, explainable, and safe by design.",
];

export default function HeroAgents() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor-follow glow
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useTransform(x, (val) => `${val}px`);
  const glowY = useTransform(y, (val) => `${val}px`);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };
    node.addEventListener("mousemove", handleMove);
    return () => node.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  const springy = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.6,
  };

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden bg-neutral-950 text-white"
    >
      {/* Soft grid + vignette */}
      <div
        className="pointer-events-none absolute inset-0 [background:radial-gradient(100%_100%_at_50%_0%,rgba(99,102,241,0.10),rgba(236,72,153,0)_50%),repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_40px),repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_40px)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(99,102,241,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      {/* Cursor-follow glow */}
      <motion.div
        className="pointer-events-none absolute h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl"
        style={{ left: glowX, top: glowY }}
        transition={springy as Transition}
      />

      <div className="mx-auto grid max-w-7xl px-6 pt-28 pb-16 sm:pt-36 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Left: Copy */}
        <div className="z-10 col-span-7">
          <div className="mb-4 flex items-center gap-2">
            <Pill>Introducing</Pill>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-sm text-neutral-300"
            >
              Adaptive AI Agents for teams that move fast
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Deploy AI agents that do the work—
            <span className="bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent">
              not just the chat.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-4 max-w-xl text-pretty text-neutral-300 sm:text-lg"
          >
            Spin up specialized agents for support, sales, and ops. Connect your
            tools, set the goals, and watch tasks complete
            end‑to‑end—accurately, auditable, and on-brand.
          </motion.p>

          {/* Micro badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b, i) => (
              <GradientBadge
                key={b.text}
                delay={0.2 + i * 0.06}
                color={b.color}
              >
                {b.text}
              </GradientBadge>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-8 flex items-center gap-3">
            <CTAPrimary>Start free</CTAPrimary>
            <CTASecondary>See live demo</CTASecondary>
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
              className="text-xs text-neutral-400"
            >
              No credit card • Cancel anytime
            </motion.span>
          </div>

          {/* Check list */}
          <ul className="mt-6 space-y-2 text-sm text-neutral-300">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.4 }}
                className="flex items-start gap-2"
              >
                <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
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
                {f}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: Visual agent stack mock + microinteractions */}
        <div className="relative col-span-5 mt-12 lg:mt-0">
          <AgentStack />
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur"
    >
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inset-0 rounded-full bg-emerald-400" />
        <motion.span
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-emerald-400/40 blur-[2px]"
        />
      </span>
      {children}
    </motion.span>
  );
}

function GradientBadge({
  children,
  delay = 0,
  color,
}: {
  children: React.ReactNode;
  delay?: number;
  color: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.45 }}
      className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${color} px-3 py-1.5 text-xs font-medium text-white shadow-sm`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
      {children}
    </motion.span>
  );
}

function CTAPrimary({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/10"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
      />
      <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900/10 text-neutral-900">
        →
      </span>
    </motion.button>
  );
}

function CTASecondary({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur"
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        <motion.span
          className="absolute h-4 w-4 rounded-full border border-white/30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        />
        <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
      </span>
      {children}
    </motion.button>
  );
}

function AgentStack() {
  const cards = [
    {
      title: "Support Agent",
      subtitle: "Resolves tickets in Zendesk",
      color: "from-indigo-500/20 to-fuchsia-500/10",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="text-indigo-400"
        >
          <path
            d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z"
            fill="currentColor"
          />
        </svg>
      ),
      stat: "92% deflection",
    },
    {
      title: "Sales Agent",
      subtitle: "Books meetings in HubSpot",
      color: "from-emerald-500/20 to-teal-500/10",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="text-emerald-400"
        >
          <path
            d="M3 12h7V3H3v9zm0 9h7v-7H3v7zm11 0h7v-9h-7v9zm0-18v7h7V3h-7z"
            fill="currentColor"
          />
        </svg>
      ),
      stat: "3.7x pipeline",
    },
    {
      title: "Ops Agent",
      subtitle: "Syncs data across tools",
      color: "from-amber-500/20 to-orange-500/10",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="text-amber-400"
        >
          <path
            d="M12 8V4M12 20v-4M8 12H4m16 0h-4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      stat: "99.9% accuracy",
    },
  ];

  return (
    <div className="relative">
      {/* Orbiting nodes */}
      <div className="absolute -inset-10">
        <OrbitingNodes />
      </div>

      {/* Stack */}
      <div className="relative mx-auto w-full max-w-md">
        <div className="pointer-events-none absolute -inset-x-10 -top-10 h-40 bg-gradient-to-b from-white/10 to-transparent blur-2xl" />
        <div className="space-y-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c.color} p-4 backdrop-blur`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/30">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{c.title}</div>
                    <div className="text-xs text-neutral-300">{c.subtitle}</div>
                  </div>
                </div>
                <motion.span
                  className="rounded-full bg-white/10 px-2 py-1 text-xs text-white"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  {c.stat}
                </motion.span>
              </div>

              {/* Progress microinteraction */}
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.05 }}
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    ease: "easeInOut",
                  }}
                  className="h-full w-1/3 bg-gradient-to-r from-white/70 to-white/10"
                />
              </motion.div>

              {/* Glow on hover */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent blur-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer mini-stats */}
        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-neutral-300">
          <MiniStat label="Avg. handle time" value="1m 12s" />
          <MiniStat label="Tasks/day" value="12,400" />
          <MiniStat label="SLA met" value="99.4%" />
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-lg border border-white/10 bg-white/5 p-2"
    >
      <div className="text-[10px] uppercase tracking-wide text-neutral-400">
        {label}
      </div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </motion.div>
  );
}

function OrbitingNodes() {
  const nodes = new Array(8).fill(0).map((_, i) => i);
  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        {nodes.map((n) => (
          <motion.span
            key={n}
            className="absolute h-2 w-2 rounded-full bg-white/70"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              top: `${20 + (Math.sin(n) + 1) * 30}%`,
              left: `${20 + (Math.cos(n) + 1) * 30}%`,
            }}
          >
            <motion.span
              className="absolute -inset-3 rounded-full bg-white/20 blur-md"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 + n * 0.2 }}
            />
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Orbit rings */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
    </div>
  );
}
