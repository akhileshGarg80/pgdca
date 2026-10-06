import React from 'react';
import { HelpCircle, BookOpen, FileSpreadsheet } from 'lucide-react';

export type ActiveTab = 'only-questions' | 'qa' | 'pattern';

interface BottomNavBarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200/80 dark:border-slate-800 shadow-md px-3 py-1 safe-bottom transition-colors">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-1">
        {/* Tab 1: Only Questions */}
        <button
          onClick={() => onTabChange('only-questions')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-all ${
            activeTab === 'only-questions'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50/80 dark:bg-indigo-950/60'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
          }`}
          aria-label="Only Questions"
        >
          <HelpCircle
            className={`w-4.5 h-4.5 transition-transform ${
              activeTab === 'only-questions' ? 'scale-105 stroke-[2.4]' : 'stroke-2'
            }`}
          />
          <span className="text-[10px] mt-0.5 tracking-tight leading-none text-center">
            Only Questions
          </span>
        </button>

        {/* Tab 2: Questions + Answers */}
        <button
          onClick={() => onTabChange('qa')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-all ${
            activeTab === 'qa'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50/80 dark:bg-indigo-950/60'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
          }`}
          aria-label="Questions and Answers"
        >
          <BookOpen
            className={`w-4.5 h-4.5 transition-transform ${
              activeTab === 'qa' ? 'scale-105 stroke-[2.4]' : 'stroke-2'
            }`}
          />
          <span className="text-[10px] mt-0.5 tracking-tight leading-none text-center">
            Question + Ans
          </span>
        </button>

        {/* Tab 3: Paper Pattern */}
        <button
          onClick={() => onTabChange('pattern')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-all ${
            activeTab === 'pattern'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50/80 dark:bg-indigo-950/60'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
          }`}
          aria-label="Paper Pattern"
        >
          <FileSpreadsheet
            className={`w-4.5 h-4.5 transition-transform ${
              activeTab === 'pattern' ? 'scale-105 stroke-[2.4]' : 'stroke-2'
            }`}
          />
          <span className="text-[10px] mt-0.5 tracking-tight leading-none text-center">
            Paper Pattern
          </span>
        </button>
      </div>
    </nav>
  );
};
