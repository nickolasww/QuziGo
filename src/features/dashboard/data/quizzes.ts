export interface Quiz {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: number;
  duration: string;
  completions: number;
  category: number;
  difficulty: string;
  type: string;
}

export const QUIZZES: Quiz[] = [
  {
    id: 17, // Science & Nature category
    title: "Science & Nature",
    description: "Test your knowledge of natural sciences",
    icon: "🔬",
    color: "bg-green-500",
    questions: 10,
    duration: "10 min",
    completions: 234,
    category: 17,
    difficulty: "easy",
    type: "boolean"
  },
];
