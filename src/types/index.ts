export interface QAItem {
  id: number;
  qNum: number;
  unit: string;
  question: string;
  marks?: number;
  answerSummary: string;
  points: string[];
  keyTerms?: string[];
  examTip?: string;
}

export interface Subject {
  id: string;
  sem: 1 | 2;
  code: string;
  name: string;
  shortName: string;
  theory: number;
  practical: number;
  internal: number;
  total: number;
  questions: QAItem[];
}
