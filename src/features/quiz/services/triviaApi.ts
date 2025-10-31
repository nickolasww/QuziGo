import type { Question } from '../types/quiz';

interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface TriviaResponse {
  response_code: number;
  results: TriviaQuestion[];
}

const decodeHTML = (html: string): string => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const getDifficultyPoints = (difficulty: string): number => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 100;
    case 'medium':
      return 150;
    case 'hard':
      return 200;
    default:
      return 100;
  }
};

// Convert API response to our Question format
const convertToQuestion = (triviaQ: TriviaQuestion, index: number): Question => {
  const allAnswers = [...triviaQ.incorrect_answers, triviaQ.correct_answer];
  
  if (triviaQ.type === 'boolean') {
    allAnswers.sort(); 
  } else {
    allAnswers.sort(() => Math.random() - 0.5);
  }

  const options = allAnswers.map((answer, idx) => ({
    id: String.fromCharCode(65 + idx), 
    text: decodeHTML(answer),
  }));

  const correctOption = options.find(opt => opt.text === decodeHTML(triviaQ.correct_answer));

  return {
    id: index + 1,
    question: decodeHTML(triviaQ.question),
    options,
    correctAnswer: correctOption?.id || 'A',
    points: getDifficultyPoints(triviaQ.difficulty),
    difficulty: (triviaQ.difficulty.charAt(0).toUpperCase() + 
                 triviaQ.difficulty.slice(1)) as 'Easy' | 'Medium' | 'Hard',
  };
};

export const fetchTriviaQuestions = async (
  amount: number = 10,
  category?: number,
  difficulty?: 'easy' | 'medium' | 'hard',
  type?: 'boolean' | 'multiple'
): Promise<Question[]> => {
  try {
    let url = `https://opentdb.com/api.php?amount=${amount}`;
    
    if (category) url += `&category=${category}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    if (type) url += `&type=${type}`;

    const response = await fetch(url);
    
    
    if (!response.ok) {
      throw new Error(`Failed to fetch trivia questions: ${response.status} ${response.statusText}`);
    }

    const data: TriviaResponse = await response.json();

    if (data.response_code !== 0) {
      const errorMessages: { [key: number]: string } = {
        1: 'No Results - Not enough questions in database',
        2: 'Invalid Parameter - Invalid category/difficulty/type',
        3: 'Token Not Found',
        4: 'Token Empty',
      };
      const errorMsg = errorMessages[data.response_code] || 'Unknown error';
      throw new Error(`API Error: ${errorMsg}`);
    }

    const questions = data.results.map((q, idx) => convertToQuestion(q, idx));
    
    return questions;
  } catch (error) {
    if (error instanceof Error) {
    }
    throw error;
  }
};
