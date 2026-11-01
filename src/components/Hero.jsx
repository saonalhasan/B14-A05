import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Build Your Ideal <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="text-slate-600 text-base md:text-lg max-w-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#tech" className="px-6 py-3 rounded-xl font-semibold text-white brand-gradient-bg shadow-lg hover:shadow-xl hover:opacity-95 transition">
            Explore Technologies
          </a>
          <button className="px-6 py-3 rounded-xl font-semibold text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-100 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-1 rounded-3xl brand-gradient-bg opacity-30 blur-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
            alt="Dev Stack Illustration" 
            className="relative rounded-2xl border border-white/20 shadow-2xl object-cover w-full h-80 md:h-96"
          />
        </div>
      </div>
    </section>
  );
}