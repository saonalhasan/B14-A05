import React from 'react';

export default function TechCard({ tech, onAdd, isAdded }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        {/* Top Header: Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 p-2.5 flex items-center justify-center border border-slate-100">
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            {tech.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Meta details */}
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 border-t border-slate-100 pt-4 mb-4">
          <span className="px-2.5 py-1 bg-slate-100 rounded-md text-slate-700">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-amber-500">
            ★ {tech.rating}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl font-semibold text-sm transition ${
            isAdded
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
              : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}