import type { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | undefined;
  onAnswerSelect: (answerId: string) => void;
}

export const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }: QuestionCardProps) => {
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
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedAnswer === option.id
                ? 'border-purple-500 bg-purple-500/10'
                : 'border-gray-700 bg-gray-800 hover:border-purple-400 hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-semibold ${
                selectedAnswer === option.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}>
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
