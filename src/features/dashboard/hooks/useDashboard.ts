import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/utils/auth";
import { QUIZZES } from "../data/quizzes";

export const useDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/');
  };

  const handleStartQuiz = (quizId: number) => {
    navigate(`/quiz/${quizId}`);
  };

  const filteredQuizzes = useMemo(() => {
    return QUIZZES.filter((quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredQuizzes,
    handleLogout,
    handleStartQuiz,
  };
};
