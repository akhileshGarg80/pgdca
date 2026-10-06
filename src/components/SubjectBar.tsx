import React from 'react';
import { Subject } from '../types';

interface SubjectBarProps {
  subjects: Subject[];
  selectedSubjectId: string;
  onSelectSubject: (id: string) => void;
}

export const SubjectBar: React.FC<SubjectBarProps> = ({
  subjects,
  selectedSubjectId,
  onSelectSubject,
}) => {
  return (
    <div className="bg-slate-50/95 dark:bg-slate-900/95 border-b border-slate-200/80 dark:border-slate-800 px-3 py-1.5 overflow-x-auto no-scrollbar scroll-smooth transition-colors">
      <div className="max-w-2xl mx-auto flex items-center gap-1.5 min-w-max">
        {subjects.map((sub, index) => {
          const isActive = sub.id === selectedSubjectId;
          return (
            <button
              key={sub.id}
              onClick={() => onSelectSubject(sub.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-white'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {index + 1}
              </span>
              <span>{sub.shortName}</span>
              <span
                className={`text-[10px] px-1 py-0.2 rounded font-normal ${
                  isActive
                    ? 'bg-indigo-700/60 text-indigo-100'
                    : 'bg-slate-100 dark:bg-slate-700/70 text-slate-500 dark:text-slate-400'
                }`}
              >
                10 Q
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
