import React, { useState, useEffect } from 'react';
import { Subject } from '../types';
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  CheckCircle,
  Copy,
  Check,
  BookOpen,
} from 'lucide-react';

interface QuestionsAnswersViewProps {
  subject: Subject;
  highlightQuestionId?: number | null;
}

export const QuestionsAnswersView: React.FC<QuestionsAnswersViewProps> = ({
  subject,
  highlightQuestionId,
}) => {
  // Start with first 2 open by default, or the highlighted one
  const [openIds, setOpenIds] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    subject.questions.forEach((q, idx) => {
      initial[q.id] = idx === 0 || idx === 1;
    });
    return initial;
  });

  const [copiedId, setCopiedId] = useState<number | null>(null);

  // If highlightedQuestionId changes, open it and scroll to it
  useEffect(() => {
    if (highlightQuestionId) {
      setOpenIds((prev) => ({ ...prev, [highlightQuestionId]: true }));
      setTimeout(() => {
        const el = document.getElementById(`qa-card-${highlightQuestionId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [highlightQuestionId]);

  const toggleOpen = (id: number) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    subject.questions.forEach((q) => (all[q.id] = true));
    setOpenIds(all);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const handleCopy = (id: number, question: string, points: string[]) => {
    const text = `${question}\n\nमुख्य उत्तर बिंदु:\n` + points.map((p, i) => `${i + 1}. ${p}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="space-y-3 pb-4">
      {/* Subject Header Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 rounded-2xl p-4 text-white shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[11px] font-bold tracking-wider uppercase bg-white/20 px-2 py-0.5 rounded backdrop-blur-xs">
            {subject.code}
          </span>
          <span className="text-xs text-emerald-200 font-medium">
            10 Questions with Detailed Solutions
          </span>
        </div>
        <h2 className="text-base font-bold leading-snug">{subject.name}</h2>

        {/* Quick Toolbar */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs text-emerald-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>संपूर्ण 10 प्रश्नों के मॉडल उत्तर</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={expandAll}
              className="px-2 py-0.5 bg-white/15 hover:bg-white/25 rounded text-[11px] font-semibold transition-colors"
            >
              सभी खोलें
            </button>
            <button
              onClick={collapseAll}
              className="px-2 py-0.5 bg-white/15 hover:bg-white/25 rounded text-[11px] font-semibold transition-colors"
            >
              सभी बंद करें
            </button>
          </div>
        </div>
      </div>

      {/* Accordions List */}
      <div className="space-y-3">
        {subject.questions.map((q) => {
          const isOpen = !!openIds[q.id];
          const isHighlighted = highlightQuestionId === q.id;

          return (
            <article
              key={q.id}
              id={`qa-card-${q.id}`}
              className={`rounded-xl border transition-all overflow-hidden ${
                isHighlighted
                  ? 'ring-2 ring-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/30 border-indigo-300 dark:border-indigo-700'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xs'
              }`}
            >
              {/* Question Header (Tap to toggle) */}
              <button
                type="button"
                onClick={() => toggleOpen(q.id)}
                className="w-full text-left p-3.5 flex items-start justify-between gap-3 bg-white dark:bg-slate-800 hover:bg-slate-50/80 dark:hover:bg-slate-700/60 transition-colors"
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    Q{q.qNum}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/80 px-1.5 py-0.5 rounded">
                        {q.unit}
                      </span>
                      <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-100 dark:border-indigo-800/60">
                        {q.marks || 8} Marks
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {q.question}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0 p-1 text-slate-400 dark:text-slate-500">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Answer Body */}
              {isOpen && (
                <div className="px-3.5 pb-4 pt-1 border-t border-slate-100 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/40 space-y-3 animate-fadeIn">
                  {/* Summary Callout */}
                  <div className="p-2.5 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 text-xs text-indigo-950 dark:text-indigo-200 font-medium leading-relaxed">
                    <span className="font-bold text-indigo-800 dark:text-indigo-300 block mb-0.5">
                      💡 सारांश (Concept Summary):
                    </span>
                    {q.answerSummary}
                  </div>

                  {/* Detailed Points */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>विस्तृत परीक्षा उत्तर बिंदु:</span>
                    </h4>
                    <ol className="space-y-2">
                      {q.points.map((pt, idx) => (
                        <li
                          key={idx}
                          className="text-xs leading-relaxed text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-700 shadow-2xs flex items-start gap-2"
                        >
                          <span className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="flex-1">{pt}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Key Terms */}
                  {q.keyTerms && q.keyTerms.length > 0 && (
                    <div className="pt-1">
                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 block mb-1">
                        🎯 अनिवार्य कीवर्ड्स (Key Terms):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {q.keyTerms.map((term, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 px-2 py-0.5 rounded-md"
                          >
                            ✓ {term}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Exam Tip Card */}
                  {q.examTip && (
                    <div className="p-2.5 rounded-lg bg-amber-50/90 dark:bg-amber-950/40 border-l-4 border-amber-500 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div className="leading-snug">
                        <b className="font-bold">Exam Scoring Tip: </b>
                        {q.examTip}
                      </div>
                    </div>
                  )}

                  {/* Actions Bar */}
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/80">
                    <button
                      onClick={() => handleCopy(q.id, q.question, q.points)}
                      className="flex items-center gap-1 text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md shadow-2xs transition-all"
                    >
                      {copiedId === q.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-700 dark:text-emerald-300">कॉपी हो गया!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>उत्तर कॉपी करें</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};
