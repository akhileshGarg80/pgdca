import React from 'react';

export const PaperPatternView: React.FC = () => {
  return (
    <div className="space-y-4 pb-4">
      {/* 1. Table: 📘 SEMESTER – I (चुने हुए पेपर) */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 shadow-xs overflow-hidden">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
          <span>📘 SEMESTER – I (चुने हुए पेपर)</span>
        </h3>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[11px]">
                <th className="py-2 pr-2 font-semibold whitespace-nowrap">Subject Code</th>
                <th className="py-2 px-2 font-semibold min-w-[150px]">Subject Name</th>
                <th className="py-2 px-1.5 font-semibold text-center whitespace-nowrap">Theory</th>
                <th className="py-2 px-1.5 font-semibold text-center whitespace-nowrap">Practical</th>
                <th className="py-2 px-1.5 font-semibold text-center whitespace-nowrap">Internal</th>
                <th className="py-2 pl-2 font-semibold text-right whitespace-nowrap">Total Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-700 dark:text-slate-200">
              <tr>
                <td className="py-2 pr-2 font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                  1PGDCA1
                </td>
                <td className="py-2 px-2">Computer Fundamentals and AI Concepts</td>
                <td className="py-2 px-1.5 text-center">70</td>
                <td className="py-2 px-1.5 text-center">30</td>
                <td className="py-2 px-1.5 text-center">0</td>
                <td className="py-2 pl-2 text-right font-bold">100</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                  1PGDCA2
                </td>
                <td className="py-2 px-2">PC Packages with AI Essentials</td>
                <td className="py-2 px-1.5 text-center">70</td>
                <td className="py-2 px-1.5 text-center">20</td>
                <td className="py-2 px-1.5 text-center">30</td>
                <td className="py-2 pl-2 text-right font-bold">120</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                  1PGDCA3 (A)
                </td>
                <td className="py-2 px-2">Digital Publishing: PageMaker, Photoshop & InDesign</td>
                <td className="py-2 px-1.5 text-center">70</td>
                <td className="py-2 px-1.5 text-center">20</td>
                <td className="py-2 px-1.5 text-center">30</td>
                <td className="py-2 pl-2 text-right font-bold">120</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                  1PGDCA4 (B)
                </td>
                <td className="py-2 px-2">MS-Access Database Management</td>
                <td className="py-2 px-1.5 text-center">70</td>
                <td className="py-2 px-1.5 text-center">20</td>
                <td className="py-2 px-1.5 text-center">30</td>
                <td className="py-2 pl-2 text-right font-bold">120</td>
              </tr>
              {/* Semester 1 Total */}
              <tr className="bg-indigo-50/70 dark:bg-indigo-950/40 font-bold text-slate-900 dark:text-white border-t-2 border-indigo-200 dark:border-indigo-900">
                <td colSpan={2} className="py-2.5 px-2 text-indigo-900 dark:text-indigo-200">
                  Semester I कुल
                </td>
                <td className="py-2.5 px-1.5 text-center">280</td>
                <td className="py-2.5 px-1.5 text-center">90</td>
                <td className="py-2.5 px-1.5 text-center">90</td>
                <td className="py-2.5 pl-2 text-right text-indigo-700 dark:text-indigo-300 text-sm">
                  460
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Table: 📗 SEMESTER – II (चुने हुए पेपर) */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 shadow-xs overflow-hidden">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
          <span>📗 SEMESTER – II (चुने हुए पेपर)</span>
        </h3>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[11px]">
                <th className="py-2 pr-2 font-semibold whitespace-nowrap">Subject Code</th>
                <th className="py-2 px-2 font-semibold min-w-[150px]">Subject Name</th>
                <th className="py-2 px-1.5 font-semibold text-center whitespace-nowrap">Theory</th>
                <th className="py-2 px-1.5 font-semibold text-center whitespace-nowrap">Practical</th>
                <th className="py-2 px-1.5 font-semibold text-center whitespace-nowrap">Internal</th>
                <th className="py-2 pl-2 font-semibold text-right whitespace-nowrap">Total Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-700 dark:text-slate-200">
              <tr>
                <td className="py-2 pr-2 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  2PGDCA1
                </td>
                <td className="py-2 px-2">Emerging Digital Technologies</td>
                <td className="py-2 px-1.5 text-center">70</td>
                <td className="py-2 px-1.5 text-center">30</td>
                <td className="py-2 px-1.5 text-center">0</td>
                <td className="py-2 pl-2 text-right font-bold">100</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  2PGDCA2
                </td>
                <td className="py-2 px-2">Web Development Technologies</td>
                <td className="py-2 px-1.5 text-center">70</td>
                <td className="py-2 px-1.5 text-center">20</td>
                <td className="py-2 px-1.5 text-center">30</td>
                <td className="py-2 pl-2 text-right font-bold">120</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  2PGDCA3 (A)
                </td>
                <td className="py-2 px-2">Financial Accounting with Tally</td>
                <td className="py-2 px-1.5 text-center">70</td>
                <td className="py-2 px-1.5 text-center">20</td>
                <td className="py-2 px-1.5 text-center">30</td>
                <td className="py-2 pl-2 text-right font-bold">120</td>
              </tr>
              <tr>
                <td className="py-2 pr-2 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  2PGDCA4 (A)
                </td>
                <td className="py-2 px-2">Multimedia Design and Production</td>
                <td className="py-2 px-1.5 text-center">70</td>
                <td className="py-2 px-1.5 text-center">20</td>
                <td className="py-2 px-1.5 text-center">30</td>
                <td className="py-2 pl-2 text-right font-bold">120</td>
              </tr>
              {/* Semester 2 Total */}
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/40 font-bold text-slate-900 dark:text-white border-t-2 border-emerald-200 dark:border-emerald-900">
                <td colSpan={2} className="py-2.5 px-2 text-emerald-900 dark:text-emerald-200">
                  Semester II कुल
                </td>
                <td className="py-2.5 px-1.5 text-center">280</td>
                <td className="py-2.5 px-1.5 text-center">90</td>
                <td className="py-2.5 px-1.5 text-center">90</td>
                <td className="py-2.5 pl-2 text-right text-emerald-700 dark:text-emerald-300 text-sm">
                  460
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Table: 📊 दोनों सेमेस्टर का संयुक्त कुल */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 shadow-xs overflow-hidden">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
          <span>📊 दोनों सेमेस्टर का संयुक्त कुल</span>
        </h3>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[11px]">
                <th className="py-2 font-semibold">सेमेस्टर</th>
                <th className="py-2 text-center font-semibold">Theory</th>
                <th className="py-2 text-center font-semibold">Practical</th>
                <th className="py-2 text-center font-semibold">Internal</th>
                <th className="py-2 text-right font-semibold">कुल अंक</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-700 dark:text-slate-200">
              <tr>
                <td className="py-2.5 font-bold text-indigo-600 dark:text-indigo-400">
                  Semester I
                </td>
                <td className="py-2.5 text-center">280</td>
                <td className="py-2.5 text-center">90</td>
                <td className="py-2.5 text-center">90</td>
                <td className="py-2.5 text-right font-bold text-slate-900 dark:text-white">
                  460
                </td>
              </tr>
              <tr>
                <td className="py-2.5 font-bold text-emerald-600 dark:text-emerald-400">
                  Semester II
                </td>
                <td className="py-2.5 text-center">280</td>
                <td className="py-2.5 text-center">90</td>
                <td className="py-2.5 text-center">90</td>
                <td className="py-2.5 text-right font-bold text-slate-900 dark:text-white">
                  460
                </td>
              </tr>
              {/* Grand Total Row */}
              <tr className="bg-gradient-to-r from-indigo-50 to-emerald-50 dark:from-indigo-950/60 dark:to-emerald-950/60 font-extrabold text-slate-900 dark:text-white border-t-2 border-indigo-300 dark:border-indigo-800">
                <td className="py-3 font-extrabold text-indigo-900 dark:text-indigo-200 text-sm">
                  कुल
                </td>
                <td className="py-3 text-center text-sm font-bold">560</td>
                <td className="py-3 text-center text-sm font-bold">180</td>
                <td className="py-3 text-center text-sm font-bold">180</td>
                <td className="py-3 text-right text-base text-indigo-700 dark:text-indigo-300 font-extrabold">
                  920
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
