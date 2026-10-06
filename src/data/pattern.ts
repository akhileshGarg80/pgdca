export interface SectionInfo {
  section: string;
  type: string;
  questionDetails: string;
  marksPerQ: number;
  totalMarks: number;
  description: string;
}

export const PAPER_SECTIONS: SectionInfo[] = [
  {
    section: 'Section A',
    type: 'Objective / Short Answer',
    questionDetails: '10 प्रश्न (सभी अनिवार्य)',
    marksPerQ: 1,
    totalMarks: 10,
    description: 'बहुविकल्पीय (MCQs), रिक्त स्थान भरें (Fill in the blanks), सही/गलत (True/False) और 1-लाइन परिभाषाएं।'
  },
  {
    section: 'Section B',
    type: 'Short Answer Questions',
    questionDetails: '7 में से किन्हीं 5 प्रश्नों के उत्तर दें',
    marksPerQ: 4,
    totalMarks: 20,
    description: 'मध्यम लंबाई के वैचारिक प्रश्न, अंतर (Differences), संक्षिप्त टिप्पणियां (Short Notes), और विशेषताएं।'
  },
  {
    section: 'Section C',
    type: 'Long / Descriptive Questions',
    questionDetails: '6 में से किन्हीं 4 प्रश्नों के उत्तर दें',
    marksPerQ: 10,
    totalMarks: 40,
    description: 'विस्तृत निबंधात्मक प्रश्न, डायग्राम, प्रक्रिया के चरण (Steps), सॉफ्टवेयर टूल के विवरण और व्यावहारिक केस।'
  }
];

export const MARKS_SUMMARY = {
  theoryPerPaper: 70,
  timeDuration: '3 Hours (180 Minutes)',
  minPassingTheory: '28 Marks (40%)',
  minPassingPractical: '12 / 8 Marks (40%)',
  totalSemesterMarks: 460,
  grandTotalDegreeMarks: 920,
  practicalDistribution: [
    { component: 'Practical Exam / Software Task', marks30: 20, marks20: 10 },
    { component: 'Lab Record & File Work', marks30: 5, marks20: 5 },
    { component: 'Viva-Voce (मौखिक परीक्षा)', marks30: 5, marks20: 5 }
  ],
  internalDistribution: [
    { component: 'First Class Test / Assignment', marks: 10 },
    { component: 'Second Class Test / Seminar & PPT', marks: 10 },
    { component: 'Attendance & Class Behavior', marks: 10 }
  ],
  examStrategy: [
    'प्रत्येक Unit से न्यूनतम 2 दीर्घ उत्तरीय व 2 लघु उत्तरीय प्रश्न तैयार करें।',
    'सॉफ्टवेयर पेपर्स (Photoshop, Tally, PageMaker, Access) में शॉर्टकट कीज़ व मेनू पाथ्स अवश्य लिखें।',
    'जहाँ भी संभव हो ब्लॉक डायग्राम, फ्लोचार्ट और तुलनात्मक टेबल (Comparison Table) बनाएं।',
    'उत्तर लिखते समय मुख्य कीवर्ड्स (Key Terms) को अंडरलाइन या हाइलाइट करें।',
    'समय प्रबंधन: Section A (20 min), Section B (50 min), Section C (100 min), रिवीजन (10 min)।'
  ]
};
