import type { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | undefined;
  onAnswerSelect: (answerId: string) => void;
  showingAnswer: boolean;
}

export const QuestionCard = ({ question, selectedAnswer, onAnswerSelect, showingAnswer }: QuestionCardProps) => {
  const getButtonStyle = (optionId: string) => {
    if (!showingAnswer) {
      // Before answer is selected
      return selectedAnswer === optionId
        ? 'border-purple-500 bg-purple-500/10'
        : 'border-gray-700 bg-gray-800 hover:border-purple-400 hover:bg-gray-700';
    }
    
    // After answer is selected
    const isCorrect = optionId === question.correctAnswer;
    const isSelected = optionId === selectedAnswer;
    
    if (isCorrect) {
      return 'border-green-500 bg-green-500/20';
    }
    
    if (isSelected && !isCorrect) {
      return 'border-red-500 bg-red-500/20';
    }
    
    return 'border-gray-700 bg-gray-800';
  };

  const getBadgeStyle = (optionId: string) => {
    if (!showingAnswer) {
      return selectedAnswer === optionId
        ? 'bg-purple-500 text-white'
        : 'bg-gray-700 text-gray-300';
    }
    
    const isCorrect = optionId === question.correctAnswer;
    const isSelected = optionId === selectedAnswer;
    
    if (isCorrect) {
      return 'bg-green-500 text-white';
    }
    
    if (isSelected && !isCorrect) {
      return 'bg-red-500 text-white';
    }
    
    return 'bg-gray-700 text-gray-300';
  };

  return (
    <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
      {/* Points and Difficulty */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-purple-500 px-4 py-2 rounded-full">
          <span className="text-white font-semibold">{question.points} points</span>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <span className="text-white">{question.difficulty}</span>
        </div>
      </div>

      {/* Question */}
      <h2 className="text-white text-2xl font-semibold mb-8">
        {question.question}
      </h2>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswerSelect(option.id)}
            disabled={showingAnswer}
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${getButtonStyle(option.id)} ${
              showingAnswer ? 'cursor-not-allowed' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-semibold ${getBadgeStyle(option.id)}`}>
                {option.id}
              </div>
              <span className="text-white text-lg">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
