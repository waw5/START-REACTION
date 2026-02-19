// Types pour le jeu
export interface GameScore {
  reactionTime: number;
  timestamp: number;
  isFalseStart: boolean;
}

export type GameState = 
  | 'idle'           // Avant de commencer
  | 'ready'          // Prêt à démarrer
  | 'lighting'       // Feux s'allument
  | 'waiting'        // Attente avant extinction
  | 'go'             // Feux éteints, GO!
  | 'result'         // Affichage du résultat
  | 'falseStart';    // Faux départ

export interface GameConfig {
  minRandomDelay: number;
  maxRandomDelay: number;
  minLightInterval: number;
  maxLightInterval: number;
  totalLights: number;
  maxStoredScores: number;
}

// Configuration basée sur les VRAIES règles de la Formule 1
export const DEFAULT_CONFIG: GameConfig = {
  minRandomDelay: 1000,      // Min 1 seconde (règle F1)
  maxRandomDelay: 5000,      // Max 5 secondes (règle F1)
  minLightInterval: 1000,    // Exactement 1 seconde entre chaque feu (règle F1)
  maxLightInterval: 1000,    // Exactement 1 seconde entre chaque feu (règle F1)
  totalLights: 5,
  maxStoredScores: 10,
};
