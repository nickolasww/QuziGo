import { useState, useEffect, useCallback } from 'react';
import type { Question, QuizState } from '../types/quiz';

const INITIAL_LIVES = 3;
const INITIAL_TIME = 600; // 10 minutes in seconds

export const useQuiz = (questions: Question[]) => {
  const [quizState, setQuizState] = useState<QuizState>({
    questions,
    currentQuestionIndex: 0,
    answers: {},
    score: 0,
    lives: INITIAL_LIVES,
    timeRemaining: INITIAL_TIME,
    isCompleted: false,
  });

  const [isTimerRunning, setIsTimerRunning] = useState(true);

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
        lives: isCorrect ? prev.lives : Math.max(0, prev.lives - 1),
      };
    });
  }, []);

  const handleNextQuestion = useCallback(() => {
    setQuizState((prev) => {
      const nextIndex = prev.currentQuestionIndex + 1;
      
      if (nextIndex >= prev.questions.length || prev.lives === 0) {
        return { ...prev, isCompleted: true };
      }
      
      return {
        ...prev,
        currentQuestionIndex: nextIndex,
      };
    });
  }, []);

  const handleSkipQuestion = useCallback(() => {
    handleNextQuestion();
  }, [handleNextQuestion]);

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const progress = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;
  const selectedAnswer = quizState.answers[quizState.currentQuestionIndex];

  return {
    quizState,
    currentQuestion,
    progress,
    selectedAnswer,
    formatTime,
    handleAnswerSelect,
    handleNextQuestion,
    handleSkipQuestion,
  };
};
