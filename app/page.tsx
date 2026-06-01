export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Changelog Generator
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Turn Git Commits into{" "}
          <span className="text-[#58a6ff]">Customer-Ready Changelogs</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repo. Our AI reads every commit, categorizes features, fixes, and improvements, then writes polished marketing copy your users actually want to read.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block"></span>
            <span className="ml-2 text-xs text-[#6e7681]">changelog-preview.md</span>
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-[#3fb950] font-semibold">✨ New Features</span>
              <p className="text-[#c9d1d9] mt-1 ml-4">• Dark mode support across all dashboard views</p>
              <p className="text-[#c9d1d9] ml-4">• CSV export for analytics reports</p>
            </div>
            <div>
              <span className="text-[#58a6ff] font-semibold">🔧 Improvements</span>
              <p className="text-[#c9d1d9] mt-1 ml-4">• 40% faster page load on the settings screen</p>
            </div>
            <div>
              <span className="text-[#f85149] font-semibold">🐛 Bug Fixes</span>
              <p className="text-[#c9d1d9] mt-1 ml-4">• Fixed broken pagination on mobile devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repos (GitHub & GitLab)",
              "AI commit categorization",
              "Auto-generated marketing copy",
              "Webhook real-time updates",
              "Public changelog page",
              "Email digest for subscribers",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI understand my commits?",
              a: "We analyze your commit messages, PR titles, and branch names using a fine-tuned language model trained on thousands of software changelogs. It maps technical jargon to customer-friendly language automatically."
            },
            {
              q: "Do I need to change how I write commits?",
              a: "No. GitChangelog works with any commit style — conventional commits, free-form messages, or anything in between. The AI adapts to your team's existing workflow."
            },
            {
              q: "Can I edit the generated changelog before publishing?",
              a: "Absolutely. Every generated changelog is fully editable before it goes live. You stay in control of what your customers see."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GitChangelog. All rights reserved.
      </footer>
    </main>
  );
}
