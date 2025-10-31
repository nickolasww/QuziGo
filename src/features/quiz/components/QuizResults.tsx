interface QuizResultsProps {
  score: number;
  stats: {
    totalAnswered: number;
    correctCount: number;
    wrongCount: number;
  };
  totalQuestions: number;
  timeRemaining: number;
  onBack: () => void;
}

export const QuizResults = ({
  score,
  stats,
  totalQuestions,
  timeRemaining,
  onBack,
}: QuizResultsProps) => {
  const accuracy = stats.totalAnswered > 0 
    ? Math.round((stats.correctCount / stats.totalAnswered) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4">
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-white text-4xl font-bold mb-2">Quiz Completed!</h1>
            <p className="text-gray-400 text-lg">
              {timeRemaining === 0 ? 'Time has run out!' : 'You have completed the quiz!'}
            </p>
          </div>

          {/* Score Display */}
          <div className="bg-purple-500/10 border-2 border-purple-500 rounded-lg p-6 mb-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Total Score</p>
              <p className="text-white text-5xl font-bold">{score}</p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* Total Answered */}
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-blue-400 text-3xl font-bold mb-2">
                {stats.totalAnswered}
              </div>
              <p className="text-gray-400 text-sm">All Answer Question</p>
            </div>

            {/* Correct Answers */}
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-green-400 text-3xl font-bold mb-2">
                {stats.correctCount}
              </div>
              <p className="text-gray-400 text-sm">Right Answer</p>
            </div>

            {/* Wrong Answers */}
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-red-400 text-3xl font-bold mb-2">
                {stats.wrongCount}
              </div>
              <p className="text-gray-400 text-sm">Wrong Answer</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Total Question</span>
              <span className="text-white font-semibold">{totalQuestions}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-400">Accuracy</span>
              <span className="text-white font-semibold">{accuracy}%</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onBack}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
