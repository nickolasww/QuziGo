interface ProgressBarProps {
  progress: number;
  currentQuestion: number;
  totalQuestions: number;
}

export const ProgressBar = ({ progress, currentQuestion, totalQuestions }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white text-sm">
          Question {currentQuestion} of {totalQuestions}
        </span>
        <span className="text-white text-sm">{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-purple-500 to-purple-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
