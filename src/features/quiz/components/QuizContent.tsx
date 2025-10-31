import type { Question } from '../types/quiz';
import { ProgressBar } from '../components/ProgressBar';
import { Timer } from '../components/Timer';
import { QuestionCard } from '../components/QuestionCard';

interface QuizContentProps {
  progress: number;
  currentQuestionIndex: number;
  totalQuestions: number;
  timeRemaining: number;
  formatTime: (seconds: number) => string;
  currentQuestion: Question;
  selectedAnswer: string | undefined;
  showingAnswer: boolean;
  onAnswerSelect: (answerId: string) => void;
}

export const QuizContent = ({
  progress,
  currentQuestionIndex,
  totalQuestions,
  timeRemaining,
  formatTime,
  currentQuestion,
  selectedAnswer,
  showingAnswer,
  onAnswerSelect,
}: QuizContentProps) => {
  console.log('📄 [QuizContent] Rendering with:', {
    progress,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion: currentQuestion ? 'Available' : 'Missing',
    questionText: currentQuestion?.question?.substring(0, 50) + '...',
  });

  if (!currentQuestion) {
    console.error('❌ [QuizContent] No current question available!');
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center text-white">
          <p>Error: No question available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <ProgressBar
          progress={progress}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
        />
      </div>

      {/* Quiz Info Bar */}
      <div className="flex items-center justify-center mb-8">
        <Timer timeRemaining={timeRemaining} formatTime={formatTime} />
      </div>

      {/* Question Card */}
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={onAnswerSelect}
        showingAnswer={showingAnswer}
      />
    </div>
  );
};
