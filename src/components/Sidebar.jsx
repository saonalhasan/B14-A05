import React from 'react';

export default function Sidebar({ stack, onRemove, onRemoveAll }) {
  const isEmpty = stack.length === 0;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm sticky top-24">
      <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
      <p className="text-xs text-slate-500 mt-1 mb-6">
        {isEmpty ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
      </p>

      {/* Conditional Rendering: Empty State vs Selected Items */}
      {isEmpty ? (
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center">
          <p className="text-slate-400 text-sm font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {stack.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight">{item.name}</h4>
                    <span className="text-[11px] text-slate-500 font-medium">{item.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-slate-400 hover:text-red-500 p-1 text-lg transition"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2.5 rounded-xl font-semibold text-sm text-red-500 border border-red-200 hover:bg-red-50 transition"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}