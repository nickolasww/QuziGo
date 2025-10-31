import { QuizCard } from "./QuizCard";

interface Quiz {
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

interface QuizGridProps {
  quizzes: Quiz[];
  onStartQuiz: (quizId: number) => void;
}

export const QuizGrid = ({ quizzes, onStartQuiz }: QuizGridProps) => {
  if (quizzes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No quizzes found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quizzes.map((quiz) => (
        <QuizCard 
          key={quiz.id} 
          quiz={quiz} 
          onStartQuiz={onStartQuiz}
        />
      ))}
    </div>
  );
};
