import React, { useState, useEffect } from 'react';
import { SEM1_SUBJECTS } from './data/sem1_subjects';
import { SEM2_SUBJECTS } from './data/sem2_subjects';
import { CompactHeader } from './components/CompactHeader';
import { SubjectBar } from './components/SubjectBar';
import { BottomNavBar, ActiveTab } from './components/BottomNavBar';
import { QuestionsOnlyView } from './components/QuestionsOnlyView';
import { QuestionsAnswersView } from './components/QuestionsAnswersView';
import { PaperPatternView } from './components/PaperPatternView';

export default function App() {
  const [currentSem, setCurrentSem] = useState<1 | 2>(1);
  const [activeTab, setActiveTab] = useState<ActiveTab>('qa');
  const [highlightQuestionId, setHighlightQuestionId] = useState<number | null>(null);

  // Bulletproof Dark Mode state (safe for restricted iframes)
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const saved = window.localStorage.getItem('pgdca_theme');
        if (saved === 'dark') return true;
        if (saved === 'light') return false;
      }
      if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
        const query = window.matchMedia('(prefers-color-scheme: dark)');
        return query && query.matches;
      }
    } catch {
      // Fallback to light mode in sandboxed iframes
    }
    return false;
  });

  useEffect(() => {
    try {
      if (typeof document !== 'undefined' && document.documentElement) {
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('pgdca_theme', isDark ? 'dark' : 'light');
      }
    } catch {
      // Ignore storage restrictions
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const currentSubjects = currentSem === 1 ? SEM1_SUBJECTS : SEM2_SUBJECTS;
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(
    currentSubjects[0]?.id || '1pgdca1'
  );

  // If semester changes, ensure selectedSubjectId belongs to the new semester
  const handleSelectSem = (sem: 1 | 2) => {
    setCurrentSem(sem);
    const newSubjects = sem === 1 ? SEM1_SUBJECTS : SEM2_SUBJECTS;
    if (newSubjects.length > 0) {
      setSelectedSubjectId(newSubjects[0].id);
    }
    setHighlightQuestionId(null);
  };

  const handleSelectSubject = (id: string) => {
    setSelectedSubjectId(id);
    setHighlightQuestionId(null);
  };

  // Safe fallback to active subject
  const activeSubject =
    currentSubjects.find((s) => s.id === selectedSubjectId) || currentSubjects[0];

  // Callback when user taps "उत्तर देखें" from the "Only Questions" view
  const handleViewAnswerFromOnlyQuestions = (qId: number) => {
    setHighlightQuestionId(qId);
    setActiveTab('qa');
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col font-sans text-slate-800 dark:text-slate-100 antialiased transition-colors duration-200">
      {/* 1. Compact Top Header (No search bar, clean, dark/light toggle) */}
      <CompactHeader
        currentSem={currentSem}
        onSelectSem={handleSelectSem}
        selectedSubjectCode={activeSubject?.code || '1PGDCA1'}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* 2. Slim Horizontal Subject Switcher (Only shown for questions & Q+A tabs) */}
      {activeTab !== 'pattern' && (
        <SubjectBar
          subjects={currentSubjects}
          selectedSubjectId={activeSubject?.id || ''}
          onSelectSubject={handleSelectSubject}
        />
      )}

      {/* 3. Main Body Content (Mobile-optimized container with bottom padding for fixed nav) */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-3.5 pt-3 pb-16">
        {activeTab === 'only-questions' && activeSubject && (
          <QuestionsOnlyView
            subject={activeSubject}
            onViewAnswer={handleViewAnswerFromOnlyQuestions}
          />
        )}

        {activeTab === 'qa' && activeSubject && (
          <QuestionsAnswersView
            subject={activeSubject}
            highlightQuestionId={highlightQuestionId}
          />
        )}

        {activeTab === 'pattern' && <PaperPatternView />}
      </main>

      {/* 4. Fixed Mobile Bottom Bar (3 Icons: Only Questions, Q+A, Paper Pattern) */}
      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
