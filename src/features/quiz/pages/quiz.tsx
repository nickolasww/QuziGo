import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { QuizHeader } from '../components/QuizHeader';
import { QuizContent } from '../components/QuizContent';
import { QuizResults } from '../components/QuizResults';
import { fetchTriviaQuestions } from '../services/triviaApi';
import type { Question } from '../types/quiz';

export const QuizPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch questions from API when component mounts
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const categoryNum = categoryId ? parseInt(categoryId) : 17;
        
        const fetchedQuestions = await fetchTriviaQuestions(
          10,
          categoryNum,
          'easy',
          'boolean'
        );

        setQuestions(fetchedQuestions);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Failed to load quiz: ${err.message}`);
        } else {
          setError('Failed to load quiz questions. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [categoryId]);

  const {
    quizState,
    currentQuestion,
    progress,
    selectedAnswer,
    showingAnswer,
    formatTime,
    handleAnswerSelect,
    calculateStats,
  } = useQuiz(questions);

  const handleBack = () => {
    navigate('/dashboard');
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading quiz questions...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || questions.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-white text-3xl font-bold mb-4">Oops!</h1>
          <p className="text-gray-400 text-lg mb-8">{error || 'No questions available'}</p>
          <button
            onClick={handleBack}
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

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

  // Get quiz title based on category
  const getQuizTitle = (catId: string | undefined) => {
    const titles: { [key: string]: string } = {
      '17': 'Science & Nature Quiz',
    };
    return titles[catId || '17'] || 'Trivia Quiz';
  };

  // Show quiz content
  return (
    <div className="min-h-screen bg-black">
      <QuizHeader 
        onBack={handleBack} 
        title={getQuizTitle(categoryId)} 
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
