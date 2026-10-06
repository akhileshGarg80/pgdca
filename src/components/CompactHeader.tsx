import React from 'react';
import { GraduationCap, Sun, Moon } from 'lucide-react';

interface CompactHeaderProps {
  currentSem: 1 | 2;
  onSelectSem: (sem: 1 | 2) => void;
  selectedSubjectCode: string;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const CompactHeader: React.FC<CompactHeaderProps> = ({
  currentSem,
  onSelectSem,
  selectedSubjectCode,
  isDark,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-3 py-2 shadow-xs transition-colors">
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-2">
        {/* Logo & Mini Title */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-xs shrink-0">
            <GraduationCap className="w-4.5 h-4.5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white leading-none truncate">
                PGDCA
              </span>
              <span className="text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-200/60 dark:border-indigo-800/60 leading-none">
                {selectedSubjectCode}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight truncate">
              10 Q&A Bank
            </p>
          </div>
        </div>

        {/* Right Controls: Sem Pills + Theme Toggle */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Sem Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-full border border-slate-200/70 dark:border-slate-700/80">
            <button
              onClick={() => onSelectSem(1)}
              type="button"
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                currentSem === 1
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Sem I
            </button>
            <button
              onClick={() => onSelectSem(2)}
              type="button"
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                currentSem === 2
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Sem II
            </button>
          </div>

          {/* Dark / Light Toggle Button */}
          <button
            onClick={onToggleTheme}
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
            title={isDark ? 'Light Mode चालू करें' : 'Dark Mode चालू करें'}
            aria-label="Toggle Dark and Light Mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
