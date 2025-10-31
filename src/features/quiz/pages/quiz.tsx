import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { ProgressBar } from '../components/ProgressBar';
import { Timer } from '../components/Timer';
import { LivesDisplay } from '../components/LivesDisplay';
import { QuestionCard } from '../components/QuestionCard';
import type { Question } from '../types/quiz';

// Sample quiz data - replace with actual data from API or props
const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Which of the following energy sources cannot be replenished naturally on a human timescale, making it an example of a non-renewable resource?",
    options: [
      { id: "A", text: "Solar Power" },
      { id: "B", text: "Wind Power" },
      { id: "C", text: "Natural Gas" },
      { id: "D", text: "Hydroelectric Power" },
    ],
    correctAnswer: "C",
    points: 100,
    difficulty: "Medium",
  },
  {
    id: 2,
    question: "What is the chemical symbol for gold?",
    options: [
      { id: "A", text: "Go" },
      { id: "B", text: "Au" },
      { id: "C", text: "Gd" },
      { id: "D", text: "Ag" },
    ],
    correctAnswer: "B",
    points: 100,
    difficulty: "Easy",
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: "A", text: "Venus" },
      { id: "B", text: "Jupiter" },
      { id: "C", text: "Mars" },
      { id: "D", text: "Saturn" },
    ],
    correctAnswer: "C",
    points: 100,
    difficulty: "Easy",
  },
  {
    id: 4,
    question: "What is the speed of light in a vacuum?",
    options: [
      { id: "A", text: "299,792,458 m/s" },
      { id: "B", text: "300,000,000 m/s" },
      { id: "C", text: "186,282 miles/s" },
      { id: "D", text: "All of the above (approximately)" },
    ],
    correctAnswer: "D",
    points: 150,
    difficulty: "Hard",
  },
  {
    id: 5,
    question: "Who developed the theory of general relativity?",
    options: [
      { id: "A", text: "Isaac Newton" },
      { id: "B", text: "Albert Einstein" },
      { id: "C", text: "Stephen Hawking" },
      { id: "D", text: "Niels Bohr" },
    ],
    correctAnswer: "B",
    points: 100,
    difficulty: "Medium",
  },
  {
    id: 6,
    question: "What is the powerhouse of the cell?",
    options: [
      { id: "A", text: "Nucleus" },
      { id: "B", text: "Ribosome" },
      { id: "C", text: "Mitochondria" },
      { id: "D", text: "Chloroplast" },
    ],
    correctAnswer: "C",
    points: 100,
    difficulty: "Easy",
  },
  {
    id: 7,
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: [
      { id: "A", text: "Oxygen" },
      { id: "B", text: "Carbon Dioxide" },
      { id: "C", text: "Nitrogen" },
      { id: "D", text: "Hydrogen" },
    ],
    correctAnswer: "C",
    points: 100,
    difficulty: "Medium",
  },
  {
    id: 8,
    question: "What is the smallest unit of life?",
    options: [
      { id: "A", text: "Atom" },
      { id: "B", text: "Cell" },
      { id: "C", text: "Molecule" },
      { id: "D", text: "Organ" },
    ],
    correctAnswer: "B",
    points: 100,
    difficulty: "Easy",
  },
  {
    id: 9,
    question: "What does DNA stand for?",
    options: [
      { id: "A", text: "Deoxyribonucleic Acid" },
      { id: "B", text: "Dioxyribonucleic Acid" },
      { id: "C", text: "Dynamic Nuclear Acid" },
      { id: "D", text: "Deoxyribo Nucleotide Acid" },
    ],
    correctAnswer: "A",
    points: 100,
    difficulty: "Medium",
  },
  {
    id: 10,
    question: "What is absolute zero in Celsius?",
    options: [
      { id: "A", text: "-273.15°C" },
      { id: "B", text: "-300°C" },
      { id: "C", text: "-273°C" },
      { id: "D", text: "-250°C" },
    ],
    correctAnswer: "A",
    points: 150,
    difficulty: "Hard",
  },
];

export const QuizPage = () => {
  const navigate = useNavigate();

  const {
    quizState,
    currentQuestion,
    progress,
    selectedAnswer,
    formatTime,
    handleAnswerSelect,
    handleNextQuestion,
    handleSkipQuestion,
  } = useQuiz(SAMPLE_QUESTIONS);

  const handleBack = () => {
    navigate('/dashboard');
  };

  if (quizState.isCompleted) {
    // Navigate to results page or show completion message
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Quiz Completed!</h1>
          <p className="text-gray-400 text-xl mb-4">Your Score: {quizState.score}</p>
          <p className="text-gray-400 text-lg mb-8">
            Lives Remaining: {quizState.lives}/3
          </p>
          <button
            onClick={handleBack}
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
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
            <h1 className="text-white text-xl font-semibold">
              Science & Technology Quiz
            </h1>
            <div className="w-6" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar
            progress={progress}
            currentQuestion={quizState.currentQuestionIndex + 1}
            totalQuestions={quizState.questions.length}
          />
        </div>

        {/* Quiz Info Bar */}
        <div className="flex items-center justify-between mb-8">
          <Timer timeRemaining={quizState.timeRemaining} formatTime={formatTime} />
          <LivesDisplay lives={quizState.lives} />
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
        />

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handleSkipQuestion}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
            Skip
          </button>

          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedAnswer
                ? 'bg-purple-500 hover:bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next Question
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
