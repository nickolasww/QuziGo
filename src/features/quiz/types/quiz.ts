export interface Question {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  points: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<number, string>;
  score: number;
  lives: number;
  timeRemaining: number;
  isCompleted: boolean;
}

export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}
