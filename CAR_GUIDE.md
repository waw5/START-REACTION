# 🏎️ Guide Visuel - Anatomie de la Voiture F1

Ce document explique tous les éléments de la voiture F1 présente dans le jeu.

## 🔧 Éléments de la Voiture

```
                    Aileron Arrière
                           |
                           ▼
        Halo          ╔════╗
         ↓            ║    ║
    ┌────────┐        ║    ║
    │ Pilote │   ╔════╩════╩════════════════╗
    │ (casque)   ║  1  │ Cockpit│  Pontons ║  ←── Corps Principal
    └────────┘   ╚════╦════╦════════════════╝
                      ║    ║
                      ╚════╝
                        ↑
                  Numéro (1)

         ╔═══╗ ←── Aileron Avant
         ╚═══╝

    ◉           ◉  ←── Roues Avant
         
    ◉           ◉  ←── Roues Arrière
```

## 📐 Composants Détaillés

### 1. Aileron Avant (Front Wing)
**Fonction :** Appui aérodynamique à l'avant
- **Couleur :** Noir/Gris foncé
- **Position :** Tout à l'avant de la voiture
- **Détails :** 3 niveaux d'ailerons superposés

### 2. Roues (4x)
**Fonction :** Propulsion et adhérence
- **Couleur :** Noir avec jantes grises
- **Animation :** Rotation rapide au démarrage
- **Effet :** Fumée blanche lors du lancement (wheelspin)

### 3. Corps Principal (Chassis)
**Fonction :** Structure principale de la voiture
- **Couleur :** Rouge F1 (#e10600) avec dégradé
- **Détails :** 
  - Numéro 1 en blanc
  - Reflets métalliques
  - Ombre portée

### 4. Pontons (Sidepods)
**Fonction :** Refroidissement et aérodynamique
- **Couleur :** Rouge plus clair
- **Position :** Côtés du châssis
- **Style :** Profilés et arrondis

### 5. Cockpit
**Fonction :** Habitacle du pilote
- **Couleur :** Noir semi-transparent
- **Contenu :** Casque du pilote visible
- **Protection :** Bordure grise

### 6. Halo
**Fonction :** Protection de la tête du pilote (obligatoire depuis 2018)
- **Couleur :** Noir/Gris foncé
- **Forme :** Arc en demi-cercle
- **Matériau :** Titane (dans la réalité)

### 7. Pilote (Casque)
**Fonction :** Représentation du conducteur
- **Couleur :** Or/Jaune (#FFD700)
- **Position :** Dans le cockpit
- **Effet :** Glow doré

### 8. Aileron Arrière (Rear Wing)
**Fonction :** Appui aérodynamique maximal
- **Couleur :** Noir/Gris foncé
- **Position :** Tout à l'arrière, surélevé
- **Hauteur :** Le point le plus haut de la voiture

## 🎬 Effets Visuels au Démarrage

### 1. Fumée des Pneus (Smoke Effect)
**Quand :** Au moment du GO!
- **Couleur :** Gris/Blanc
- **Position :** Derrière les roues arrière
- **Animation :** Se dissipe vers l'arrière
- **Réalisme :** Simule le patinage des pneus

### 2. Flammes d'Échappement (Exhaust Flame)
**Quand :** Au moment du GO!
- **Couleur :** Orange → Jaune
- **Position :** Arrière de la voiture
- **Animation :** Clignotement rapide
- **Réalisme :** Gaz brûlés du moteur

### 3. Lignes de Vitesse (Speed Lines)
**Quand :** Pendant l'accélération
- **Couleur :** Blanc semi-transparent
- **Position :** Derrière la voiture
- **Animation :** Défilement horizontal
- **Effet :** Sensation de vitesse extrême

### 4. Rotation des Roues (Wheel Spin)
**Quand :** Au moment du GO!
- **Vitesse :** Rotation ultra-rapide (100ms par tour)
- **Animation :** Transform rotate(360deg)
- **Effet :** Patinage au démarrage

## 🎨 Palette de Couleurs

```css
Corps Principal:
  - Rouge F1: #e10600 → #8b0000 (dégradé)
  - Glow rouge: rgba(225, 6, 0, 0.5)

Roues:
  - Noir: #000000 → #1a1a1a (dégradé radial)
  - Jantes: #2a2a2a

Pilote (Casque):
  - Or: #FFD700 → #FFA500 (dégradé)
  - Glow: rgba(255, 215, 0, 0.5)

Ailerons:
  - Noir: #1a1a1a → #2a2a2a (dégradé)

Fumée:
  - Gris: rgba(150, 150, 150, 0.6)

Flammes:
  - Orange → Jaune: rgba(255, 100, 0) → rgba(255, 200, 0)
```

## 📏 Dimensions

```
Voiture Totale:
  - Largeur: 200px (desktop) / 140px (mobile)
  - Hauteur: 80px (desktop) / 60px (mobile)

Corps Principal:
  - Largeur: 160px (desktop) / 120px (mobile)
  - Hauteur: 60px (desktop) / 45px (mobile)

Roues:
  - Diamètre: 24px (desktop) / 18px (mobile)

Aileron Arrière:
  - Largeur: 12px
  - Hauteur: 50px

Cockpit:
  - Largeur: 40px
  - Hauteur: 30px
```

## 🎯 Positionnement sur la Piste

```
Écran complet:
├─ [Ligne de départ] (damier noir/blanc)
├─ [Grille de départ] (boxes)
├─ [Voiture F1] ←── Position initiale (100px du bord)
│      │
│      └─── [Piste avec lignes]
│
└─ → → → [Défilement] → → → (quand GO!)
```

## 🏁 Environnement de Circuit

### Ligne de Départ
- **Style :** Damier noir et blanc (pattern classique F1)
- **Largeur :** 8px
- **Position :** Tout à gauche
- **Effet :** Glow blanc pour la visibilité

### Grille de Départ (Starting Grid)
- **Boxes :** 2 rectangles superposés
- **Style :** Lignes diagonales (45°)
- **Couleur :** Blanc transparent
- **Fonction :** Délimite la zone de départ

### Piste (Track)
- **Fond :** Gris foncé avec dégradé
- **Lignes :** Traits blancs horizontaux
- **Animation :** Défilement horizontal
- **Bordures :** Lignes blanches haut et bas

## 🎬 Séquence d'Animation Complète

```
État 1 : IDLE
┌────────────────────────────────────┐
│                                    │
│  🏎️ Voiture statique sur la grille │
│     (position: left: 100px)        │
│                                    │
└────────────────────────────────────┘

État 2 : LIGHTING (feux s'allument)
┌────────────────────────────────────┐
│  🔴 Feu 1                          │
│  🏎️ Voiture statique               │
│     (pas de mouvement)             │
└────────────────────────────────────┘

État 3 : WAITING (attente)
┌────────────────────────────────────┐
│  🔴🔴🔴🔴🔴 Tous les feux            │
│  🏎️ Voiture prête                  │
│     (tension maximale)             │
└────────────────────────────────────┘

État 4 : GO! (départ)
┌────────────────────────────────────┐
│  ⚪⚪⚪⚪⚪ Feux éteints              │
│  🏎️💨🔥 → → → →                    │
│     ◉◉ ← Roues en rotation         │
│     💨 ← Fumée                      │
│     🔥 ← Flammes                    │
│     - - - ← Lignes de vitesse      │
│                                    │
│  Animation: 0 → 150vw en 1.5s      │
└────────────────────────────────────┘

État 5 : RESULT
┌────────────────────────────────────┐
│  [Voiture hors écran]              │
│                                    │
│  "187 ms" ✅                        │
│  "Excellent !"                     │
└────────────────────────────────────┘
```

## 🔄 États de la Voiture

| État | Classe CSS | Comportement |
|------|-----------|--------------|
| **Idle** | - | Statique, prête |
| **Lighting** | - | Statique, feux s'allument |
| **Waiting** | - | Statique, tous feux allumés |
| **Go** | `.carLaunching` | Accélération, effets activés |
| **False Start** | `.carStalled` | Vibration (shake) |
| **Result** | `.carLaunching` | Hors écran |

## 💡 Détails Techniques

### Animations CSS

```css
/* Départ */
@keyframes carLaunch {
  0%   → Position initiale
  20%  → Légère inclinaison (-2deg)
  100% → Hors écran (translateX: 150vw)
}

/* Roues */
@keyframes wheelSpin {
  0°   → 360° (rotation continue)
}

/* Fumée */
@keyframes smokeEffect {
  0%   → Petite, opaque
  100% → Grande, transparente
}

/* Flammes */
@keyframes flameFlicker {
  0%, 100% → Pleine intensité
  50%      → Intensité réduite
}
```

### Performance

- **GPU Accelerated :** Utilisation de `transform` et `opacity`
- **60 FPS :** Animations fluides
- **Responsive :** S'adapte à toutes les tailles d'écran
- **Optimisé :** Pas de calculs JavaScript lourds

## 📱 Adaptation Mobile

### Changements Desktop → Mobile

| Élément | Desktop | Mobile |
|---------|---------|--------|
| Voiture | 200x80px | 140x60px |
| Roues | 24px | 18px |
| Position départ | 100px | 50px |
| Grille départ | 60x80px | 40x60px |

---

## 🎯 Fidélité au Réel

### Éléments Réalistes
✅ Proportions respectées  
✅ Halo (obligatoire depuis 2018)  
✅ Ailerons avant/arrière  
✅ Pontons latéraux  
✅ Cockpit ouvert  
✅ 4 roues visibles  
✅ Numéro de course  

### Simplifications Artistiques
⚠️ Pas de détails sponsors (volontaire)  
⚠️ Forme simplifiée (pour performance)  
⚠️ Couleurs génériques (rouge F1)  

---

🏎️ **Cette voiture représente l'esprit de la Formule 1 !** 🏁
