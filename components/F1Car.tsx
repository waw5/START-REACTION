import React from 'react';
import styles from './F1Car.module.css';

interface F1CarProps {
  gameState: 'idle' | 'ready' | 'lighting' | 'waiting' | 'go' | 'result' | 'falseStart';
}

export const F1Car: React.FC<F1CarProps> = ({ gameState }) => {
  // L'animation ne se déclenche QUE quand on a cliqué (result)
  const isGo = gameState === 'result';
  const isFalseStart = gameState === 'falseStart';
  
  return (
    <div className={styles.raceScene}>
      {/* Piste avec perspective */}
      <div className={styles.trackContainer}>
        {/* Lignes de piste qui partent vers l'horizon */}
        <div className={styles.trackLine} style={{ left: '15%' }} />
        <div className={styles.trackLine} style={{ left: '42.5%' }} />
        <div className={styles.trackLine} style={{ left: '57.5%' }} />
        <div className={styles.trackLine} style={{ right: '15%' }} />
        
        {/* Tirets centraux */}
        {[...Array(18)].map((_, i) => (
          <div 
            key={i} 
            className={styles.dashLine}
            style={{ 
              top: `${5 + (i * 5.5)}%`,
              opacity: 1 - (i * 0.045)
            }}
          />
        ))}
        
        {/* Grille de départ */}
        <div className={styles.startGrid}>
          <div className={styles.gridBox}>
            <span className={styles.gridLabel}>P1</span>
          </div>
        </div>
        
        {/* Ligne damier */}
        <div className={styles.finishLine}>
          {[...Array(10)].map((_, i) => (
            <div key={i} className={i % 2 === 0 ? styles.checker1 : styles.checker2} />
          ))}
        </div>
      </div>
      
      {/* F1 Car - Image réelle vue de dos */}
      <div className={`${styles.carRearView} ${isGo ? styles.launch : ''} ${isFalseStart ? styles.shake : ''}`}>
        <img 
          src="/f1-rear.png" 
          alt="F1 Rear View" 
          className={styles.f1Image}
        />
        
        {/* Effets de démarrage */}
        {isGo && (
          <>
            <div className={styles.boostFlame} />
            <div className={styles.tyreSmoke} />
            <div className={styles.speedBlur} />
            <div className={styles.sparkles}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={styles.spark} style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};