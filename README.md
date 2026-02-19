# 🏎️ F1 Reaction Test

<div align="center">

![F1 Reaction Test](https://img.shields.io/badge/F1-Reaction%20Test-e10600?style=for-the-badge&logo=formula1)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Testez vos réflexes comme un pilote de Formule 1 !**

[🎮 Jouer](https://f1-reaction-game.vercel.app) · [📝 Documentation](#documentation) · [🐛 Reporter un Bug](../../issues) · [💡 Proposer une Fonctionnalité](../../issues)

</div>

---

## 📖 À Propos

F1 Reaction Test est un jeu web qui simule les départs de Formule 1. Attendez que les 5 feux rouges s'allument puis s'éteignent, et cliquez le plus rapidement possible pour mesurer votre temps de réaction !

### ✨ Fonctionnalités

- ⏱️ **Mesure Précise** : Temps de réaction en millisecondes avec `performance.now()`
- 🚨 **Détection des Faux Départs** : Cliquez trop tôt ? C'est un faux départ !
- 📊 **Statistiques Complètes** : Meilleur score, moyenne, nombre d'essais
- 📜 **Historique** : Les 10 derniers essais sauvegardés localement
- 📱 **Responsive** : Fonctionne parfaitement sur mobile et desktop
- ⌨️ **Accessibilité** : Support clavier (Espace/Entrée) et ARIA labels
- 🎨 **Design Moderne** : Interface inspirée de la F1 avec animations fluides
- 🌐 **PWA Ready** : Installation possible comme application

---

## 🎮 Comment Jouer

1. **Cliquez sur "Jouer"** pour commencer une partie
2. **Attendez** que les 5 feux rouges s'allument un par un
3. **Cliquez dès que les feux s'éteignent** (ou appuyez sur Espace)
4. **Consultez votre score** et essayez de vous améliorer !

⚠️ **Attention** : Cliquer avant l'extinction des feux = **Faux Départ** !

---

## 🏆 Barème de Performance

| Temps | Évaluation | Emoji |
|-------|-----------|-------|
| < 150 ms | Réflexes de pilote F1 ! | 🏆 |
| 150-200 ms | Excellent ! | 🎯 |
| 200-250 ms | Bien joué ! | ✨ |
| 250-350 ms | Pas mal ! | 👍 |
| > 350 ms | Tu peux faire mieux ! | 🐌 |

---

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Cloner le repository
git clone https://github.com/VOTRE-USERNAME/f1-reaction-game.git
cd f1-reaction-game

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Ouvrir http://localhost:3000
```

### Commandes

```bash
npm run dev      # Serveur de développement
npm run build    # Build pour production
npm start        # Serveur de production
npm run lint     # Vérifier le code
```

---

## 📁 Structure du Projet

```
f1-reaction-game/
├── 📱 app/                    # Pages Next.js (App Router)
│   ├── page.tsx              # Page principale du jeu
│   ├── layout.tsx            # Layout global avec metadata
│   ├── globals.css           # Styles globaux
│   └── page.module.css       # Styles de la page
│
├── 🧩 components/            # Composants React réutilisables
│   ├── GameScreen.tsx        # Écran de jeu et messages
│   ├── GameScreen.module.css
│   ├── TrafficLights.tsx     # Animation des 5 feux
│   ├── TrafficLights.module.css
│   ├── History.tsx           # Modal d'historique
│   └── History.module.css
│
├── 🎣 hooks/                 # Custom React Hooks
│   └── useF1Game.ts          # Logique principale du jeu
│
├── 🔧 utils/                 # Fonctions utilitaires
│   └── storage.ts            # Gestion du localStorage
│
├── 📘 types/                 # Définitions TypeScript
│   └── game.ts               # Types du jeu
│
├── 📄 Documentation
│   ├── README.md             # Ce fichier
│   ├── DEPLOYMENT.md         # Guide de déploiement Vercel
│   ├── CONTRIBUTING.md       # Guide de contribution
│   ├── ROADMAP.md            # Fonctionnalités futures
│   └── LICENSE               # License MIT
│
└── ⚙️ Configuration
    ├── package.json          # Dépendances et scripts
    ├── tsconfig.json         # Config TypeScript
    ├── next.config.js        # Config Next.js
    └── vercel.json           # Config Vercel
```

---

## 🛠️ Technologies

| Technologie | Description |
|------------|-------------|
| **[Next.js 14](https://nextjs.org)** | Framework React avec App Router |
| **[TypeScript 5](https://www.typescriptlang.org)** | Typage statique pour JavaScript |
| **[React 18](https://react.dev)** | Bibliothèque UI avec Hooks |
| **CSS Modules** | Styles scopés et maintenables |
| **LocalStorage API** | Persistance des scores côté client |
| **Performance API** | Mesure précise du temps en ms |

---

## 📐 Architecture

### Composants Principaux

#### 🎮 `useF1Game` Hook
Gère toute la logique du jeu :
- États du jeu (idle, lighting, waiting, go, result, falseStart)
- Animation séquentielle des feux
- Détection des clics et calcul du temps de réaction
- Support clavier (Espace/Entrée)

#### 🚦 `TrafficLights` Component
Affiche les 5 feux avec animations :
- Animation d'allumage progressive
- Effet de glow pour les feux allumés
- Responsive (s'adapte à la taille de l'écran)

#### 🎯 `GameScreen` Component
Interface utilisateur principale :
- Messages dynamiques selon l'état du jeu
- Boutons d'action (Jouer, Rejouer, Historique)
- Affichage des statistiques en temps réel

#### 📊 `History` Component
Modal d'historique avec :
- Liste des 10 derniers essais
- Résumé statistique
- Mise en évidence du meilleur score
- Bouton pour effacer l'historique

---

## 🎨 Design System

### Couleurs

```css
--f1-red: #e10600;        /* Rouge F1 officiel */
--success-green: #00ff00; /* Validation */
--error-red: #ff0000;     /* Faux départ */
--dark-bg: #0a0a0a;       /* Fond principal */
--card-bg: #1a1a1a;       /* Cartes */
--text-primary: #ffffff;  /* Texte principal */
--text-secondary: #999;   /* Texte secondaire */
```

### Typographie

- **Famille** : System fonts (-apple-system, Segoe UI, Roboto)
- **Titres** : 800-900 (Extra Bold)
- **Corps** : 400-600 (Normal à Semi-Bold)

---

## 📊 Données et Stockage

### Format des Scores

```typescript
interface GameScore {
  reactionTime: number;    // Temps en millisecondes
  timestamp: number;       // Date.now()
  isFalseStart: boolean;   // true si faux départ
}
```

### LocalStorage

- **Clé** : `f1-reaction-scores`
- **Limite** : 10 derniers essais
- **Format** : JSON stringifié
- **Persistance** : Jusqu'à suppression manuelle

---

## 🚀 Déploiement sur Vercel

### Méthode Rapide

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/VOTRE-USERNAME/f1-reaction-game)

### Méthode Manuelle

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

📖 **Guide détaillé** : Consultez [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🧪 Règles du Jeu (Spécifications Techniques)

### 🏁 Règles Officielles FIA Respectées

Ce jeu respecte les **vraies règles de départ de la Formule 1** définies par la FIA :

### Séquence de Jeu

1. **Phase d'Allumage** (`lighting`) :
   - 5 feux rouges s'allument séquentiellement
   - **Délai : Exactement 1 seconde entre chaque feu** (règle officielle FIA)
   - Ordre : 1er feu → 2ème feu → 3ème feu → 4ème feu → 5ème feu

2. **Phase d'Attente** (`waiting`) :
   - Tous les 5 feux sont allumés (rouge)
   - **Délai aléatoire entre 1 et 5 secondes** (règle officielle FIA)
   - Cette variabilité empêche d'anticiper le départ

3. **Phase GO** (`go`) :
   - **Tous les feux s'éteignent simultanément** 
   - Démarrage du chronomètre (`performance.now()`)
   - C'est le signal de départ !

4. **Détection du Clic** :
   - ❌ **Avant extinction** → Faux Départ (pénalité en F1 réelle)
   - ✅ **Après extinction** → Mesure du temps de réaction

### Configuration (Règles FIA)

```typescript
{
  minRandomDelay: 1000,      // 1 seconde minimum (règle FIA)
  maxRandomDelay: 5000,      // 5 secondes maximum (règle FIA)
  minLightInterval: 1000,    // Exactement 1 sec entre feux (règle FIA)
  maxLightInterval: 1000,    // Exactement 1 sec entre feux (règle FIA)
  totalLights: 5,            // 5 feux (règle FIA)
  maxStoredScores: 10        // Scores sauvegardés
}
```

### 📐 Timing Exact d'un Départ F1

**Exemple de séquence réelle :**
```
0.0s  → 1er feu s'allume 🔴
1.0s  → 2ème feu s'allume 🔴🔴
2.0s  → 3ème feu s'allume 🔴🔴🔴
3.0s  → 4ème feu s'allume 🔴🔴🔴🔴
4.0s  → 5ème feu s'allume 🔴🔴🔴🔴🔴
4.0s-9.0s → Attente aléatoire (1-5 sec)
?.?s  → Tous les feux s'éteignent → GO ! 🏁
```

**Temps total du départ :** Entre 5 et 9 secondes

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. 🍴 Fork le projet
2. 🌿 Créez une branche (`git checkout -b feat/amazing-feature`)
3. 💾 Commitez vos changements (`git commit -m 'feat: add amazing feature'`)
4. 📤 Poussez vers la branche (`git push origin feat/amazing-feature`)
5. 🔃 Ouvrez une Pull Request

📖 Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour les guidelines détaillées.

---

## 🗺️ Roadmap

### Version 1.1 (Prochaine)
- [ ] 🔊 Effets sonores
- [ ] 🌐 Partage sur réseaux sociaux
- [ ] ✨ Animations améliorées

### Version 1.2
- [ ] 🏆 Leaderboard global
- [ ] 🎮 Modes de jeu additionnels
- [ ] 📊 Statistiques avancées

📖 Consultez [ROADMAP.md](./ROADMAP.md) pour la roadmap complète.

---

## 📝 License

Ce projet est sous license MIT. Voir [LICENSE](./LICENSE) pour plus de détails.

```
MIT License - Copyright (c) 2026 F1 Reaction Test
```

---

## 🙏 Remerciements

- Inspiré par les vrais départs de Formule 1
- Construit avec ❤️ par des passionnés de F1 et de développement web
- Merci à tous les [contributeurs](../../graphs/contributors)

---

## 📞 Support

- 🐛 [Reporter un Bug](../../issues/new?template=bug_report.md)
- 💡 [Proposer une Fonctionnalité](../../issues/new?template=feature_request.md)
- 💬 [Discussions](../../discussions)
- 📧 Contact : [Créer une issue](../../issues)

---

## 🌟 Statistiques

![GitHub Stars](https://img.shields.io/github/stars/VOTRE-USERNAME/f1-reaction-game?style=social)
![GitHub Forks](https://img.shields.io/github/forks/VOTRE-USERNAME/f1-reaction-game?style=social)
![GitHub Issues](https://img.shields.io/github/issues/VOTRE-USERNAME/f1-reaction-game)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/VOTRE-USERNAME/f1-reaction-game)

---

<div align="center">

**[⬆ Retour en haut](#-f1-reaction-test)**

Fait avec 💚 par la communauté • [Jouer maintenant](https://f1-reaction-game.vercel.app)

</div>
