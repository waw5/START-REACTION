import React, { useState, useEffect } from 'react';
import { GameScore } from '@/types/game';
import { getScores, clearScores } from '@/utils/storage';
import styles from './History.module.css';

interface HistoryProps {
  onClose: () => void;
}

export const History: React.FC<HistoryProps> = ({ onClose }) => {
  const [scores, setScores] = useState<GameScore[]>([]);

  useEffect(() => {
    setScores(getScores());
  }, []);

  const handleClear = () => {
    if (confirm('Êtes-vous sûr de vouloir effacer tout l\'historique ?')) {
      clearScores();
      setScores([]);
    }
  };

  const validScores = scores.filter(s => !s.isFalseStart);
  const falseStarts = scores.filter(s => s.isFalseStart).length;

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>📊 Historique</h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Fermer">
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {scores.length === 0 ? (
            <div className={styles.empty}>
              <p>Aucun essai pour le moment.</p>
              <p>Commencez à jouer pour voir vos scores ici !</p>
            </div>
          ) : (
            <>
              <div className={styles.summary}>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Total essais</span>
                  <span className={styles.summaryValue}>{scores.length}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>Faux départs</span>
                  <span className={styles.summaryValue}>{falseStarts}</span>
                </div>
                {validScores.length > 0 && (
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Meilleur</span>
                    <span className={styles.summaryValue}>
                      {Math.min(...validScores.map(s => s.reactionTime))} ms
                    </span>
                  </div>
                )}
              </div>

              <div className={styles.list}>
                {scores.map((score, index) => (
                  <div 
                    key={index} 
                    className={`${styles.scoreItem} ${
                      score.isFalseStart ? styles.falseStart : ''
                    } ${
                      !score.isFalseStart && 
                      score.reactionTime === Math.min(...validScores.map(s => s.reactionTime))
                        ? styles.best
                        : ''
                    }`}
                  >
                    <div className={styles.scoreRank}>#{index + 1}</div>
                    <div className={styles.scoreInfo}>
                      <div className={styles.scoreValue}>
                        {score.isFalseStart ? (
                          <span className={styles.falseStartText}>Faux départ</span>
                        ) : (
                          <span>{score.reactionTime} ms</span>
                        )}
                      </div>
                      <div className={styles.scoreDate}>
                        {formatDate(score.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className={styles.clearButton} onClick={handleClear}>
                Effacer l'historique
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
