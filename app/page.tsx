import { ArrowRight, Code, Cpu, Layers, Sparkles, Zap } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Cpu,
      title: "Next.js 16 & React 19",
      description: "App router, React Server Components, and cutting-edge performance out of the box.",
    },
    {
      icon: Zap,
      title: "Tailwind CSS v4",
      description: "Next-generation CSS-first styling engine with zero configuration overhead.",
    },
    {
      icon: Layers,
      title: "Modular Structure",
      description: "Pre-organized components, utilities, and types ready for rapid feature development.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-8 shadow-sm">
        <Sparkles size={14} className="text-blue-600" />
        <span>Hackathon Clean Slate Ready</span>
      </div>

      {/* Hero Headline */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          Build your next big idea in{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            record time
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          A fresh, production-ready canvas configured with Next.js, TypeScript, and
          Tailwind CSS. Start coding your new hackathon project right away.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all hover:shadow-lg"
        >
          <span>Get Started</span>
          <ArrowRight size={16} />
        </a>
        <a
          href="#features"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-colors"
        >
          <Code size={16} />
          <span>Explore Stack</span>
        </a>
      </div>

      {/* Feature Grid */}
      <div id="features" className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick Edit Tip */}
      <div className="mt-16 text-center">
        <p className="text-xs text-gray-400 font-mono">
          Get started by editing <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded">app/page.tsx</code>
        </p>
      </div>
    </div>
  );
}
