import { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, GameConfig, DEFAULT_CONFIG, GameScore } from '@/types/game';
import { saveScore } from '@/utils/storage';

export const useF1Game = (config: GameConfig = DEFAULT_CONFIG) => {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [lightsOn, setLightsOn] = useState<number>(0);
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [isHolding, setIsHolding] = useState<boolean>(false);
  
  const startTimeRef = useRef<number | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const clickedBeforeGoRef = useRef<boolean>(false);

  // Nettoyer tous les timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];
  }, []);

  // Démarrer le jeu
  const startGame = useCallback(() => {
    console.log('🚀 startGame() appelé');
    clearAllTimeouts();
    setLightsOn(0);
    setReactionTime(null);
    // NE PAS réinitialiser isHolding ici car l'utilisateur maintient toujours!
    clickedBeforeGoRef.current = false;
    setGameState('lighting');
    console.log('✅ État changé en "lighting"');
    
    let currentLight = 0;
    
    // Allumer les feux un par un
    const lightUpSequence = () => {
      if (currentLight < config.totalLights) {
        currentLight++;
        setLightsOn(currentLight);
        console.log('💡 Feu allumé:', currentLight);
        
        const delay = Math.random() * (config.maxLightInterval - config.minLightInterval) + config.minLightInterval;
        const timeout = setTimeout(lightUpSequence, delay);
        timeoutsRef.current.push(timeout);
      } else {
        // Tous les feux sont allumés, attendre un délai aléatoire
        setGameState('waiting');
        console.log('⏳ État changé en "waiting"');
        
        const randomDelay = Math.random() * (config.maxRandomDelay - config.minRandomDelay) + config.minRandomDelay;
        
        const goTimeout = setTimeout(() => {
          if (!clickedBeforeGoRef.current) {
            setGameState('go');
            setLightsOn(0);
            startTimeRef.current = performance.now();
            console.log('🏁 État changé en "go"');
          }
        }, randomDelay);
        
        timeoutsRef.current.push(goTimeout);
      }
    };
    
    lightUpSequence();
  }, [config, clearAllTimeouts]);

  // Gérer le maintien (mousedown/keydown)
  const handleHoldStart = useCallback(() => {
    console.log('🔵 handleHoldStart appelé - gameState:', gameState, 'isHolding:', isHolding);
    
    if (gameState === 'idle' || gameState === 'result' || gameState === 'falseStart') {
      console.log('🟢 État valide pour démarrer, setIsHolding(true)');
      // Marquer qu'on maintient
      setIsHolding(true);
      
      // Démarrer le jeu après un court délai (vérifier qu'on maintient vraiment)
      const holdCheckTimeout = setTimeout(() => {
        console.log('⏰ Timeout atteint, appel de startGame()');
        startGame();
      }, 100); // 100ms pour vérifier qu'on maintient vraiment
      
      timeoutsRef.current.push(holdCheckTimeout);
      return;
    }
    
    if (gameState === 'lighting' || gameState === 'waiting' || gameState === 'go') {
      console.log('🟡 État en jeu, setIsHolding(true)');
      setIsHolding(true);
    }
  }, [gameState, startGame, isHolding]);

  // Gérer le relâchement (mouseup/keyup)
  const handleRelease = useCallback(() => {
    if (!isHolding) return;
    
    setIsHolding(false);
    
    // Si on est en idle/result/falseStart et qu'on relâche, on annule le démarrage
    if (gameState === 'idle' || gameState === 'result' || gameState === 'falseStart') {
      clearAllTimeouts();
      return;
    }
    
    if (gameState === 'lighting' || gameState === 'waiting') {
      // Faux départ! Relâché trop tôt
      clickedBeforeGoRef.current = true;
      clearAllTimeouts();
      setGameState('falseStart');
      setLightsOn(0); // Éteindre les feux
      
      const falseStartScore: GameScore = {
        reactionTime: 0,
        timestamp: Date.now(),
        isFalseStart: true,
      };
      saveScore(falseStartScore);
      return;
    }
    
    if (gameState === 'go' && startTimeRef.current) {
      // Calculer le temps de réaction
      const endTime = performance.now();
      const reaction = Math.round(endTime - startTimeRef.current);
      setReactionTime(reaction);
      setGameState('result');
      
      const score: GameScore = {
        reactionTime: reaction,
        timestamp: Date.now(),
        isFalseStart: false,
      };
      saveScore(score);
      
      clearAllTimeouts();
    }
  }, [gameState, isHolding, clearAllTimeouts]);

  // Gérer le clic (pour compatibilité)
  const handleClick = useCallback(() => {
    if (gameState === 'idle' || gameState === 'result' || gameState === 'falseStart') {
      startGame();
    }
  }, [gameState, startGame]);

  // Gérer les touches clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handleHoldStart();
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handleRelease();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleHoldStart, handleRelease]);

  // Nettoyer au démontage
  useEffect(() => {
    return () => clearAllTimeouts();
  }, [clearAllTimeouts]);

  return {
    gameState,
    lightsOn,
    reactionTime,
    isHolding,
    startGame,
    handleClick,
    handleHoldStart,
    handleRelease,
  };
};
