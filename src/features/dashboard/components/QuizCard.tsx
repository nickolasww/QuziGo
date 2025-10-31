import { FaClock, FaCheckCircle, FaGraduationCap } from "react-icons/fa";

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

interface QuizCardProps {
  quiz: Quiz;
  onStartQuiz: (quizId: number) => void;
}

export const QuizCard = ({ quiz, onStartQuiz }: QuizCardProps) => {
  const handleCardClick = () => {
    onStartQuiz(quiz.id);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStartQuiz(quiz.id);
  };

  return (
    <div
      className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-6 hover:border-purple-600 transition-all cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`${quiz.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
          {quiz.icon}
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-2">
        {quiz.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        {quiz.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <FaGraduationCap />
          <span>{quiz.questions} questions</span>
        </div>
        <div className="flex items-center gap-1">
          <FaClock />
          <span>{quiz.duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <FaCheckCircle className="text-green-500" />
          <span>{quiz.completions} completions</span>
        </div>
        <button 
          onClick={handleButtonClick}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};
