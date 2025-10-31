import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { QuizHeader } from '../components/QuizHeader';
import { QuizContent } from '../components/QuizContent';
import { QuizResults } from '../components/QuizResults';
import { SAMPLE_QUESTIONS } from '../data/sampleQuestions';

export const QuizPage = () => {
  const navigate = useNavigate();

  const {
    quizState,
    currentQuestion,
    progress,
    selectedAnswer,
    showingAnswer,
    formatTime,
    handleAnswerSelect,
    calculateStats,
  } = useQuiz(SAMPLE_QUESTIONS);

  const handleBack = () => {
    navigate('/dashboard');
  };

  // Show results when quiz is completed
  if (quizState.isCompleted) {
    const stats = calculateStats();
    
    return (
      <QuizResults
        score={quizState.score}
        stats={stats}
        totalQuestions={quizState.questions.length}
        timeRemaining={quizState.timeRemaining}
        onBack={handleBack}
      />
    );
  }

  // Show quiz content
  return (
    <div className="min-h-screen bg-black">
      <QuizHeader 
        onBack={handleBack} 
        title="Science & Technology Quiz" 
      />
      
      <QuizContent
        progress={progress}
        currentQuestionIndex={quizState.currentQuestionIndex}
        totalQuestions={quizState.questions.length}
        timeRemaining={quizState.timeRemaining}
        formatTime={formatTime}
        currentQuestion={currentQuestion}
        selectedAnswer={selectedAnswer}
        showingAnswer={showingAnswer}
        onAnswerSelect={handleAnswerSelect}
      />
    </div>
  );
};
