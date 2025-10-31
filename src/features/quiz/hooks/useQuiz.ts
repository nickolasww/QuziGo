import { useState, useEffect, useCallback } from 'react';
import type { Question, QuizState } from '../types/quiz';

const INITIAL_TIME = 600; // 10 minutes in seconds

export const useQuiz = (questions: Question[]) => {
  const [quizState, setQuizState] = useState<QuizState>({
    questions,
    currentQuestionIndex: 0,
    answers: {},
    score: 0,
    lives: 0,
    timeRemaining: INITIAL_TIME,
    isCompleted: false,
  });

  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [showingAnswer, setShowingAnswer] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (!isTimerRunning || quizState.isCompleted) return;

    const timer = setInterval(() => {
      setQuizState((prev) => {
        if (prev.timeRemaining <= 1) {
          setIsTimerRunning(false);
          return { ...prev, timeRemaining: 0, isCompleted: true };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, quizState.isCompleted]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = useCallback((answerId: string) => {
    if (showingAnswer) return; // Prevent multiple selections
    
    setShowingAnswer(true);
    
    setQuizState((prev) => {
      const currentQuestion = prev.questions[prev.currentQuestionIndex];
      const isCorrect = answerId === currentQuestion.correctAnswer;
      
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [prev.currentQuestionIndex]: answerId,
        },
        score: isCorrect ? prev.score + currentQuestion.points : prev.score,
      };
    });

    // Auto advance to next question after 1.5 seconds
    setTimeout(() => {
      setQuizState((prev) => {
        const nextIndex = prev.currentQuestionIndex + 1;
        
        if (nextIndex >= prev.questions.length) {
          return { ...prev, isCompleted: true };
        }
        
        return {
          ...prev,
          currentQuestionIndex: nextIndex,
        };
      });
      setShowingAnswer(false);
    }, 1500);
  }, [showingAnswer]);

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const progress = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;
  const selectedAnswer = quizState.answers[quizState.currentQuestionIndex];

  // Calculate quiz statistics
  const calculateStats = useCallback(() => {
    const totalAnswered = Object.keys(quizState.answers).length;
    let correctCount = 0;
    let wrongCount = 0;

    Object.entries(quizState.answers).forEach(([questionIndex, answerId]) => {
      const question = quizState.questions[parseInt(questionIndex)];
      if (question.correctAnswer === answerId) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    return {
      totalAnswered,
      correctCount,
      wrongCount,
    };
  }, [quizState.answers, quizState.questions]);

  return {
    quizState,
    currentQuestion,
    progress,
    selectedAnswer,
    showingAnswer,
    formatTime,
    handleAnswerSelect,
    calculateStats,
  };
};
