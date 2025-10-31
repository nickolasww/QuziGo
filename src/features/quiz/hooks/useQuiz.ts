import { useState, useEffect, useCallback } from 'react';
import type { Question, QuizState } from '../types/quiz';

const TIME_PER_QUESTION = 10; 

export const useQuiz = (questions: Question[]) => {
  const [quizState, setQuizState] = useState<QuizState>({
    questions,
    currentQuestionIndex: 0,
    answers: {},
    score: 0,
    lives: 0,
    timeRemaining: TIME_PER_QUESTION,
    isCompleted: false,
  });

  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [showingAnswer, setShowingAnswer] = useState(false);

  // Update questions when they are loaded
  useEffect(() => {
    if (questions.length > 0) {
      setQuizState((prev) => ({
        ...prev,
        questions,
        timeRemaining: TIME_PER_QUESTION,
      }));
    } 
  }, [questions]);

  // Timer countdown - per question
  useEffect(() => {
    if (!isTimerRunning || quizState.isCompleted || showingAnswer) return;

    const timer = setInterval(() => {
      setQuizState((prev) => {
        if (prev.timeRemaining <= 1) {
          // Time's up for this question - move to next
          const nextIndex = prev.currentQuestionIndex + 1;
          
          if (nextIndex >= prev.questions.length) {
            setIsTimerRunning(false);
            return { ...prev, timeRemaining: 0, isCompleted: true };
          }
          
          // Move to next question and reset timer
          return {
            ...prev,
            currentQuestionIndex: nextIndex,
            timeRemaining: TIME_PER_QUESTION,
          };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, quizState.isCompleted, showingAnswer, quizState.questions.length]);

  const formatTime = (seconds: number): string => {
    // For per-question timer, just show seconds
    return `${seconds}s`;
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
        
        // Move to next question and reset timer
        return {
          ...prev,
          currentQuestionIndex: nextIndex,
          timeRemaining: TIME_PER_QUESTION, // Reset timer for next question
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
