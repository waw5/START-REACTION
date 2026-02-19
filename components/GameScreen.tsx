import React from 'react';
import styles from './GameScreen.module.css';

interface GameScreenProps {
  gameState: 'idle' | 'ready' | 'lighting' | 'waiting' | 'go' | 'result' | 'falseStart';
  reactionTime: number | null;
  onStart: () => void;
  showHistory: () => void;
  bestScore: number | null;
  averageScore: number | null;
  totalAttempts: number;
  lightsOn?: number;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  gameState,
  reactionTime,
  onStart,
  showHistory,
  bestScore,
  averageScore,
  totalAttempts,
  lightsOn = 0,
}) => {
  const getMessage = () => {
    switch (gameState) {
      case 'idle':
        return {
          title: '',
          subtitle: 'Maintenez n\'importe quel bouton pour commencer',
          showButton: false,
          buttonText: '',
          showRules: false,
        };
      case 'lighting':
        return {
          title: 'Préparez-vous...',
          subtitle: '',
          showButton: false,
        };
      case 'waiting':
        return {
          title: 'Attendez...',
          subtitle: '',
          showButton: false,
        };
      case 'go':
        return {
          title: 'GO !',
          subtitle: 'CLIQUEZ !',
          showButton: false,
          isGo: true,
        };
      case 'result':
        return {
          title: `${reactionTime} ms`,
          subtitle: getPerformanceMessage(reactionTime),
          showButton: false,
          buttonText: '',
          isSuccess: true,
        };
      case 'falseStart':
        return {
          title: 'FAUX DÉPART',
          subtitle: 'Relâché trop tôt',
          showButton: false,
          buttonText: '',
          isError: true,
        };
      default:
        return {
          title: '',
          subtitle: '',
          showButton: false,
        };
    }
  };

  const getPerformanceMessage = (time: number | null): string => {
    if (time === null) return '';
    
    if (time < 150) return 'Excellent - Niveau F1';
    if (time < 200) return 'Très bien - Rapide';
    if (time < 250) return 'Bien - Bon temps';
    if (time < 350) return 'Correct - À améliorer';
    return 'Lent - Réessayez';
  };

  const message = getMessage();

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.messageBox} ${
          message.isGo ? styles.go : ''
        } ${message.isSuccess ? styles.success : ''} ${
          message.isError ? styles.error : ''
        }`}
      >
        <h2 className={styles.title}>{message.title}</h2>
        <p className={styles.subtitle}>{message.subtitle}</p>
        
        {message.showRules && (
          <div className={styles.rulesBox}>
            <p className={styles.rulesTitle}>Règles FIA</p>
            <ul className={styles.rulesList}>
              <li>Maintenez le bouton enfoncé dès le début</li>
              <li>5 feux rouges s'allument (1 sec d'intervalle)</li>
              <li>Délai aléatoire de 1 à 5 secondes</li>
              <li>Relâchez quand tous les feux s'éteignent</li>
              <li>Relâcher trop tôt = Faux départ</li>
            </ul>
          </div>
        )}
        
        
        {(gameState === 'idle' || gameState === 'result' || gameState === 'falseStart') && totalAttempts > 0 && (
          <button 
            className={styles.buttonSecondary}
            onClick={showHistory}
            aria-label="Voir l'historique"
          >
            Historique
          </button>
        )}
      </div>
      
      {totalAttempts > 0 && (
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Meilleur</span>
            <span className={styles.statValue}>
              {bestScore ? `${bestScore} ms` : '-'}
            </span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Moyenne</span>
            <span className={styles.statValue}>
              {averageScore ? `${averageScore} ms` : '-'}
            </span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Essais</span>
            <span className={styles.statValue}>{totalAttempts}</span>
          </div>
        </div>
      )}
      
      {(gameState === 'result' || gameState === 'falseStart') && (
        <div className={styles.focusHint}>
          <p>💡 Maintenez n'importe quel bouton pour recommencer</p>
        </div>
      )}
    </div>
  );
};
