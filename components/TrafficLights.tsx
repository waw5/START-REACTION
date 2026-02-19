import React from 'react';
import styles from './TrafficLights.module.css';

interface TrafficLightsProps {
  totalLights: number;
  lightsOn: number;
  gameState: 'idle' | 'ready' | 'lighting' | 'waiting' | 'go' | 'result' | 'falseStart';
}

export const TrafficLights: React.FC<TrafficLightsProps> = ({ totalLights, lightsOn, gameState }) => {
  return (
    <div className={styles.lightsRig}>
      {/* Support métallique */}
      <div className={styles.metalSupport} />
      
      {/* 5 Panneaux de feux */}
      <div className={styles.panelsContainer}>
        {Array.from({ length: totalLights }, (_, index) => {
          const lightNumber = index + 1;
          const isOn = lightsOn >= lightNumber && (gameState === 'lighting' || gameState === 'waiting');
          
          return (
            <div key={index} className={styles.lightPanel}>
              {/* Cadre noir du panneau */}
              <div className={styles.panelFrame}>
                {/* 2 feux rouges par panneau (haut et bas) */}
                <div className={`${styles.redLight} ${styles.topLight} ${isOn ? styles.lightOn : ''}`}>
                  {isOn && <div className={styles.lightGlow} />}
                </div>
                <div className={`${styles.redLight} ${styles.bottomLight} ${isOn ? styles.lightOn : ''}`}>
                  {isOn && <div className={styles.lightGlow} />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Câbles électriques */}
      <div className={styles.cables}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={styles.cable} style={{ left: `${20 + i * 20}%` }} />
        ))}
      </div>
    </div>
  );
};
