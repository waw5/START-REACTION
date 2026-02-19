# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer au F1 Reaction Test ! Ce document vous guidera à travers le processus de contribution.

## 📋 Table des Matières

1. [Code de Conduite](#code-de-conduite)
2. [Comment Contribuer](#comment-contribuer)
3. [Configuration du Projet](#configuration-du-projet)
4. [Standards de Code](#standards-de-code)
5. [Process de Pull Request](#process-de-pull-request)
6. [Rapporter des Bugs](#rapporter-des-bugs)
7. [Proposer des Fonctionnalités](#proposer-des-fonctionnalités)

---

## 📜 Code de Conduite

En participant à ce projet, vous acceptez de respecter notre code de conduite :

- ✅ Soyez respectueux et inclusif
- ✅ Acceptez les critiques constructives
- ✅ Concentrez-vous sur ce qui est meilleur pour la communauté
- ❌ Pas de harcèlement, discrimination ou comportement inapproprié

---

## 🚀 Comment Contribuer

Il y a plusieurs façons de contribuer :

### 1. Rapporter des Bugs 🐛
Trouvé un bug ? [Créez une issue](../../issues/new?template=bug_report.md)

### 2. Proposer des Fonctionnalités 💡
Une idée géniale ? [Créez une issue](../../issues/new?template=feature_request.md)

### 3. Améliorer la Documentation 📚
Fautes de frappe, clarifications, traductions...

### 4. Contribuer au Code 💻
Corrigez des bugs, ajoutez des fonctionnalités, optimisez le code

### 5. Améliorer le Design 🎨
Proposez des améliorations UX/UI

---

## 🛠️ Configuration du Projet

### Prérequis

- **Node.js** : version 18+ recommandée
- **npm** : version 9+
- **Git** : dernière version

### Installation

```bash
# 1. Forker le projet sur GitHub
# 2. Cloner votre fork
git clone https://github.com/VOTRE-USERNAME/f1-reaction-game.git
cd f1-reaction-game

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev

# 5. Ouvrir http://localhost:3000
```

### Structure du Projet

```
f1-reaction-game/
├── app/                      # Pages Next.js
│   ├── page.tsx             # Page principale
│   ├── layout.tsx           # Layout global
│   ├── globals.css          # Styles globaux
│   └── page.module.css      # Styles de la page
├── components/              # Composants React
│   ├── GameScreen.tsx       # Écran de jeu principal
│   ├── TrafficLights.tsx    # Feux de signalisation
│   └── History.tsx          # Historique des scores
├── hooks/                   # Hooks personnalisés
│   └── useF1Game.ts         # Logique principale du jeu
├── types/                   # Types TypeScript
│   └── game.ts              # Types pour le jeu
├── utils/                   # Utilitaires
│   └── storage.ts           # Gestion du localStorage
└── public/                  # Fichiers statiques
```

---

## 📏 Standards de Code

### TypeScript

- ✅ Utilisez TypeScript strict
- ✅ Typez toutes les fonctions et variables
- ✅ Évitez `any` - utilisez `unknown` si nécessaire
- ✅ Utilisez des interfaces pour les objets complexes

```typescript
// ✅ Bon
interface GameProps {
  score: number;
  onRestart: () => void;
}

// ❌ Mauvais
const props: any = { ... };
```

### React

- ✅ Utilisez des composants fonctionnels
- ✅ Privilégiez les hooks (`useState`, `useEffect`, etc.)
- ✅ Utilisez `React.FC` pour typer les composants
- ✅ Mémoïsez avec `useMemo` et `useCallback` si nécessaire

```typescript
// ✅ Bon
export const MyComponent: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

// ❌ Mauvais
export class MyComponent extends React.Component { ... }
```

### CSS

- ✅ Utilisez CSS Modules
- ✅ Nommez les classes en camelCase
- ✅ Organisez les styles logiquement
- ✅ Utilisez des variables CSS pour les couleurs

```css
/* ✅ Bon */
.container {
  display: flex;
  gap: 20px;
}

.primaryButton {
  background: var(--red);
}

/* ❌ Mauvais */
.Container { ... }
div { ... }
```

### Nommage

- **Variables** : `camelCase`
- **Constantes** : `UPPER_SNAKE_CASE`
- **Composants** : `PascalCase`
- **Fichiers** : `PascalCase.tsx` pour composants, `camelCase.ts` pour utilitaires

```typescript
// ✅ Bon
const reactionTime = 150;
const MAX_SCORES = 10;
export const TrafficLights: React.FC = () => { ... };

// ❌ Mauvais
const ReactionTime = 150;
const max_scores = 10;
export const trafficLights = () => { ... };
```

### Commits

Utilisez des messages de commit clairs et descriptifs :

```
✅ Bon:
feat: add sound effects for traffic lights
fix: correct false start detection timing
docs: update installation instructions
style: improve button hover animations
refactor: simplify localStorage utility functions
test: add unit tests for useF1Game hook

❌ Mauvais:
updated stuff
fix bug
wip
asdfasdf
```

#### Convention de Commit

Suivez [Conventional Commits](https://www.conventionalcommits.org/fr/) :

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, CSS
- `refactor:` Refactoring de code
- `test:` Ajout/modification de tests
- `chore:` Tâches de maintenance

---

## 🔄 Process de Pull Request

### 1. Créer une Branche

```bash
git checkout -b feat/nom-de-la-fonctionnalite
# ou
git checkout -b fix/nom-du-bug
```

### 2. Faire vos Modifications

- Écrivez du code propre et testé
- Commentez le code complexe
- Mettez à jour la documentation si nécessaire

### 3. Tester Localement

```bash
# Vérifier qu'il n'y a pas d'erreurs
npm run build

# Tester en local
npm start
```

### 4. Committer vos Changements

```bash
git add .
git commit -m "feat: add amazing new feature"
```

### 5. Pousser vers votre Fork

```bash
git push origin feat/nom-de-la-fonctionnalite
```

### 6. Créer une Pull Request

1. Allez sur GitHub
2. Cliquez sur "Compare & pull request"
3. Remplissez le template de PR
4. Attendez la review

### Template de Pull Request

```markdown
## Description
Brève description des changements

## Type de Changement
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Breaking change
- [ ] Documentation

## Checklist
- [ ] Mon code suit les standards du projet
- [ ] J'ai commenté le code complexe
- [ ] J'ai mis à jour la documentation
- [ ] Mes changements ne génèrent pas de warnings
- [ ] J'ai testé localement
- [ ] Le build passe (`npm run build`)

## Screenshots (si applicable)
[Ajoutez des screenshots ici]

## Notes Additionnelles
[Informations supplémentaires]
```

---

## 🐛 Rapporter des Bugs

### Avant de Rapporter

1. ✅ Vérifiez que le bug n'est pas déjà rapporté
2. ✅ Assurez-vous que vous utilisez la dernière version
3. ✅ Essayez de reproduire le bug

### Template de Bug Report

```markdown
## Description du Bug
Brève description du problème

## Étapes pour Reproduire
1. Aller sur '...'
2. Cliquer sur '...'
3. Scroller jusqu'à '...'
4. Voir l'erreur

## Comportement Attendu
Ce qui devrait se passer

## Comportement Actuel
Ce qui se passe réellement

## Screenshots
[Si applicable]

## Environnement
- OS: [Windows 10, macOS, Ubuntu, etc.]
- Navigateur: [Chrome 120, Firefox 121, Safari 17, etc.]
- Version: [1.0.0]
- Appareil: [Desktop, Mobile, Tablette]

## Informations Additionnelles
[Logs de console, messages d'erreur, etc.]
```

---

## 💡 Proposer des Fonctionnalités

### Template de Feature Request

```markdown
## Fonctionnalité Proposée
Brève description de la fonctionnalité

## Problème à Résoudre
Quel problème cette fonctionnalité résout-elle ?

## Solution Proposée
Comment cette fonctionnalité devrait fonctionner ?

## Alternatives Considérées
Autres solutions envisagées

## Mockups/Designs (optionnel)
[Images, wireframes, prototypes]

## Priorité
- [ ] Critique
- [ ] Haute
- [ ] Moyenne
- [ ] Basse

## Notes Additionnelles
[Informations supplémentaires]
```

---

## 🧪 Tests

### Ajouter des Tests (Future)

Quand le système de tests sera en place :

```typescript
// __tests__/useF1Game.test.ts
import { renderHook, act } from '@testing-library/react';
import { useF1Game } from '@/hooks/useF1Game';

describe('useF1Game', () => {
  it('should start in idle state', () => {
    const { result } = renderHook(() => useF1Game());
    expect(result.current.gameState).toBe('idle');
  });
  
  // Plus de tests...
});
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

## 🎉 Reconnaissance

Tous les contributeurs seront listés dans le README et les release notes !

### Hall of Fame
<!-- Sera rempli automatiquement -->

---

## 📞 Questions ?

- 💬 Créez une [Discussion](../../discussions)
- 📧 Contactez les mainteneurs
- 📖 Consultez la [Documentation](./README.md)

---

Merci de contribuer au F1 Reaction Test ! 🏎️💨
