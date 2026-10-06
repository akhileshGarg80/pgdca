import React, { useState } from 'react';
import { Subject } from '../types';
import { ArrowRight, Copy, Check } from 'lucide-react';

interface QuestionsOnlyViewProps {
  subject: Subject;
  onViewAnswer: (questionId: number) => void;
}

export const QuestionsOnlyView: React.FC<QuestionsOnlyViewProps> = ({
  subject,
  onViewAnswer,
}) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="space-y-3 pb-3">
      {/* Subject Header Banner */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-slate-900 rounded-2xl p-3.5 text-white shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[11px] font-bold tracking-wider uppercase bg-white/20 px-2 py-0.5 rounded backdrop-blur-xs">
            {subject.code}
          </span>
          <span className="text-xs text-indigo-200 font-medium">
            10 Most Expected Questions
          </span>
        </div>
        <h2 className="text-sm sm:text-base font-bold leading-snug">{subject.name}</h2>
      </div>

      {/* 10 Questions List */}
      <div className="space-y-2.5">
        {subject.questions.map((q) => {
          return (
            <div
              key={q.id}
              className="rounded-xl border p-3.5 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 shadow-xs transition-all"
            >
              {/* Top row with Unit, Q number and Marks */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                    Q{q.qNum}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/80 px-2 py-0.5 rounded">
                    {q.unit}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-100 dark:border-indigo-800/60">
                    {q.marks || 8} Marks
                  </span>
                  <button
                    onClick={() => handleCopy(q.id, `Q${q.qNum}. ${q.question}`)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 transition-colors"
                    title="Copy Question"
                  >
                    {copiedId === q.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <p className="text-sm font-semibold leading-relaxed text-slate-800 dark:text-slate-100">
                {q.question}
              </p>

              {/* Key topics badges */}
              {q.keyTerms && q.keyTerms.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2.5">
                  {q.keyTerms.map((term, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md font-medium"
                    >
                      #{term}
                    </span>
                  ))}
                </div>
              )}

              {/* Bottom Action: View Answer */}
              <div className="flex items-center justify-end gap-2 mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700/70">
                <button
                  onClick={() => onViewAnswer(q.id)}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/60 px-3 py-1.5 rounded-lg transition-all"
                >
                  <span>उत्तर देखें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
