import { GameScore } from '@/types/game';

const STORAGE_KEY = 'f1-reaction-scores';

export const saveScore = (score: GameScore): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const scores = getScores();
    scores.unshift(score);
    
    // Garder seulement les 10 derniers
    const limitedScores = scores.slice(0, 10);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedScores));
  } catch (error) {
    console.error('Error saving score:', error);
  }
};

export const getScores = (): GameScore[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading scores:', error);
    return [];
  }
};

export const clearScores = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing scores:', error);
  }
};

export const getValidScores = (): GameScore[] => {
  return getScores().filter(score => !score.isFalseStart && score.reactionTime > 0);
};

export const getBestScore = (): number | null => {
  const validScores = getValidScores();
  if (validScores.length === 0) return null;
  
  return Math.min(...validScores.map(s => s.reactionTime));
};

export const getAverageScore = (): number | null => {
  const validScores = getValidScores();
  if (validScores.length === 0) return null;
  
  const sum = validScores.reduce((acc, score) => acc + score.reactionTime, 0);
  return Math.round(sum / validScores.length);
};

export const getTotalAttempts = (): number => {
  return getScores().length;
};
