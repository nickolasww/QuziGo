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

    console.log('🔍 [TriviaAPI] Fetching questions from:', url);
    console.log('🔍 [TriviaAPI] Parameters:', { amount, category, difficulty, type });

    const response = await fetch(url);
    
    console.log('🔍 [TriviaAPI] Response status:', response.status);
    
    if (!response.ok) {
      console.error('❌ [TriviaAPI] HTTP error:', response.status, response.statusText);
      throw new Error(`Failed to fetch trivia questions: ${response.status} ${response.statusText}`);
    }

    const data: TriviaResponse = await response.json();
    
    console.log('🔍 [TriviaAPI] API Response Code:', data.response_code);
    console.log('🔍 [TriviaAPI] Number of questions received:', data.results?.length || 0);

    if (data.response_code !== 0) {
      const errorMessages: { [key: number]: string } = {
        1: 'No Results - Not enough questions in database',
        2: 'Invalid Parameter - Invalid category/difficulty/type',
        3: 'Token Not Found',
        4: 'Token Empty',
      };
      const errorMsg = errorMessages[data.response_code] || 'Unknown error';
      console.error('❌ [TriviaAPI] API Error:', errorMsg);
      throw new Error(`API Error: ${errorMsg}`);
    }

    const questions = data.results.map((q, idx) => convertToQuestion(q, idx));
    console.log('✅ [TriviaAPI] Successfully converted', questions.length, 'questions');
    console.log('🔍 [TriviaAPI] First question:', questions[0]);
    
    return questions;
  } catch (error) {
    console.error('❌ [TriviaAPI] Error in fetchTriviaQuestions:', error);
    if (error instanceof Error) {
      console.error('❌ [TriviaAPI] Error message:', error.message);
      console.error('❌ [TriviaAPI] Error stack:', error.stack);
    }
    throw error;
  }
};

// Category mapping for Open Trivia DB
export const TRIVIA_CATEGORIES = {
  GENERAL_KNOWLEDGE: 9,
  BOOKS: 10,
  FILM: 11,
  MUSIC: 12,
  MUSICALS_THEATRES: 13,
  TELEVISION: 14,
  VIDEO_GAMES: 15,
  BOARD_GAMES: 16,
  SCIENCE_NATURE: 17,
  COMPUTERS: 18,
  MATHEMATICS: 19,
  MYTHOLOGY: 20,
  SPORTS: 21,
  GEOGRAPHY: 22,
  HISTORY: 23,
  POLITICS: 24,
  ART: 25,
  CELEBRITIES: 26,
  ANIMALS: 27,
  VEHICLES: 28,
  COMICS: 29,
  GADGETS: 30,
  ANIME_MANGA: 31,
  CARTOON_ANIMATIONS: 32,
};
