import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Brand Block */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md brand-gradient-bg flex items-center justify-center text-white font-black text-xs">
              DS
            </div>
            <span className="font-bold text-lg text-slate-900">Dev Stack</span>
          </div>
          <p className="text-slate-500 text-sm max-w-sm">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-slate-400 font-medium text-sm pt-2">
            <a href="#" className="hover:text-slate-900">GitHub</a>
            <a href="#" className="hover:text-slate-900">Twitter</a>
            <a href="#" className="hover:text-slate-900">LinkedIn</a>
          </div>
        </div>

        {/* Link Groups */}
        <div>
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900">Home</a></li>
            <li><a href="#" className="hover:text-slate-900">Technologies</a></li>
            <li><a href="#" className="hover:text-slate-900">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900">About</a></li>
            <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            <li><a href="#" className="hover:text-slate-900">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Dev Stack. All rights reserved.
      </div>
    </footer>
  );
}