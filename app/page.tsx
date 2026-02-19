'use client';

import { useState, useEffect } from 'react';
import { useF1Game } from '@/hooks/useF1Game';
import { TrafficLights } from '@/components/TrafficLights';
import { GameScreen } from '@/components/GameScreen';
import { History } from '@/components/History';
import { F1Car } from '@/components/F1Car';
import { getBestScore, getAverageScore, getTotalAttempts } from '@/utils/storage';
import styles from './page.module.css';

export default function Home() {
  const { gameState, lightsOn, reactionTime, isHolding, startGame, handleClick, handleHoldStart, handleRelease } = useF1Game();
  const [showHistory, setShowHistory] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [averageScore, setAverageScore] = useState<number | null>(null);
  const [totalAttempts, setTotalAttempts] = useState<number>(0);

  // Mettre à jour les statistiques
  useEffect(() => {
    const updateStats = () => {
      setBestScore(getBestScore());
      setAverageScore(getAverageScore());
      setTotalAttempts(getTotalAttempts());
    };

    updateStats();

    // Mettre à jour après chaque résultat
    if (gameState === 'result' || gameState === 'falseStart') {
      const timer = setTimeout(updateStats, 100);
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  const canClick = 
    gameState === 'idle' ||
    gameState === 'lighting' || 
    gameState === 'waiting' || 
    gameState === 'go' ||
    gameState === 'result' ||
    gameState === 'falseStart';

  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <div className={styles.grid}></div>
      </div>

      <div 
        className={`${styles.gameArea} ${styles.clickable} ${isHolding ? styles.holding : ''}`}
        onMouseDown={handleHoldStart}
        onMouseUp={handleRelease}
        onMouseLeave={handleRelease}
        role="button"
        tabIndex={0}
        aria-label="Zone de jeu - Maintenez appuyé puis relâchez quand les feux s'éteignent"
      >
        <header className={styles.header}>
          <h1 className={styles.logo}>
            <span className={styles.logoF1}>START</span>
            <span className={styles.logoText}>REACTION</span>
          </h1>
        </header>

        {/* Affichage du jeu - TOUJOURS visible */}
        {(gameState === 'idle' || gameState === 'lighting' || gameState === 'waiting' || gameState === 'go' || gameState === 'result' || gameState === 'falseStart') && (
          <>
            <TrafficLights 
              totalLights={5} 
              lightsOn={lightsOn} 
              gameState={gameState}
            />
            
            {/* F1 juste en dessous des feux */}
            <div className={styles.carUnderLights}>
              <F1Car gameState={gameState} />
            </div>
          </>
        )}

        {/* Bouton rond pour mobile - TOUJOURS visible */}
        <div className={styles.mobileButtonContainer}>
          <button
            className={`${styles.mobileButton} ${isHolding ? styles.mobileButtonActive : ''}`}
            onTouchStart={(e) => {
              e.preventDefault();
              handleHoldStart();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleRelease();
            }}
            onMouseDown={handleHoldStart}
            onMouseUp={handleRelease}
            aria-label="Bouton de démarrage/relâchement"
          >
            {gameState === 'idle' || gameState === 'result' || gameState === 'falseStart' ? (
              <span className={styles.mobileButtonText}>MAINTENIR</span>
            ) : gameState === 'go' ? (
              <span className={styles.mobileButtonText}>RELÂCHER!</span>
            ) : (
              <span className={styles.mobileButtonText}>TENIR...</span>
            )}
          </button>
        </div>

        {/* Game Screen - Visible seulement pour les résultats */}
        <div className={styles.gameContent}>
          {(gameState === 'result' || gameState === 'falseStart') && (
            <GameScreen
              gameState={gameState}
              reactionTime={reactionTime}
              onStart={startGame}
              showHistory={() => setShowHistory(true)}
              bestScore={bestScore}
              averageScore={averageScore}
              totalAttempts={totalAttempts}
              lightsOn={lightsOn}
            />
          )}
        </div>

        <footer className={styles.footer}>
          <p>Inspiré par les départs de Formule 1</p>
          <p className={styles.instructions}>
            Maintenez n'importe quel bouton pour commencer
          </p>
        </footer>
      </div>

      {showHistory && (
        <History onClose={() => {
          setShowHistory(false);
          // Mettre à jour les stats après fermeture de l'historique
          setBestScore(getBestScore());
          setAverageScore(getAverageScore());
          setTotalAttempts(getTotalAttempts());
        }} />
      )}
    </main>
  );
}
