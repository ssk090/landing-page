import NavBar from "./components/NavBar";
import HeroAgents from "./components/HeroAgents";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="pt-20 bg-neutral-950 text-white min-h-screen">
        <HeroAgents />
        <section id="product" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">Why Agentic</h3>
            <p className="mt-3 text-neutral-300">
              Agents that execute tasks across your stack with auditable steps,
              human handoff, and built‑in safeguards.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Multi‑tool Actions",
                desc: "Native integrations and APIs let agents operate across your stack.",
              },
              {
                title: "Guardrails",
                desc: "Role, scope, and policy constraints keep outputs safe and on‑brand.",
              },
              {
                title: "Observability",
                desc: "Full traces, metrics, and replays for every decision an agent makes.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-neutral-300"
              >
                <div className="mb-2 text-base font-semibold text-white">
                  {f.title}
                </div>
                {f.desc}
              </div>
            ))}
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
