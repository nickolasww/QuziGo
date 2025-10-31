interface QuizHeaderProps {
  onBack: () => void;
  title: string;
}

export const QuizHeader = ({ onBack, title }: QuizHeaderProps) => {
  return (
    <div className="border-b border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-white text-xl font-semibold">{title}</h1>
          <div className="w-6" /> {/* Spacer for centering */}
        </div>
      </div>
    </div>
  );
};
