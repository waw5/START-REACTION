# 🚀 Quick Start Guide

Bienvenue dans le F1 Reaction Test ! Ce guide vous permettra de lancer le projet en 5 minutes.

## ⚡ Installation Express

### Option 1 : Script Automatique (Recommandé)

**macOS / Linux :**
```bash
curl -fsSL https://raw.githubusercontent.com/VOTRE-USERNAME/f1-reaction-game/main/scripts/install.sh | bash
```

**Windows (PowerShell) :**
```powershell
irm https://raw.githubusercontent.com/VOTRE-USERNAME/f1-reaction-game/main/scripts/install.ps1 | iex
```

### Option 2 : Installation Manuelle

```bash
# 1. Cloner le projet
git clone https://github.com/VOTRE-USERNAME/f1-reaction-game.git
cd f1-reaction-game

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:3000
```

## 🎮 Premiers Pas

1. **Cliquez sur "Jouer"** pour démarrer
2. **Attendez** que les 5 feux s'allument
3. **Cliquez dès qu'ils s'éteignent**
4. **Consultez votre score !**

## 🛠️ Commandes Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement (port 3000)

# Production
npm run build        # Compile le projet pour la production
npm start           # Lance le serveur de production

# Qualité du code
npm run lint        # Vérifie le code avec ESLint
```

## 📦 Technologies Utilisées

- **Next.js 14** - Framework React moderne
- **TypeScript** - Typage statique
- **React 18** - UI library
- **CSS Modules** - Styles scopés

## 🎯 Fonctionnalités Principales

✅ Mesure précise du temps de réaction  
✅ Détection des faux départs  
✅ Historique des scores  
✅ Statistiques en temps réel  
✅ Design responsive  
✅ Support clavier

## 🌐 Déployer sur Vercel

### Déploiement en 1 clic

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/VOTRE-USERNAME/f1-reaction-game)

### Déploiement via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

Votre jeu sera en ligne en moins de 2 minutes ! 🎉

## 🔧 Personnalisation

### Modifier les Délais

Éditez `types/game.ts` :

```typescript
export const DEFAULT_CONFIG: GameConfig = {
  minRandomDelay: 200,      // Délai min avant GO (ms)
  maxRandomDelay: 3000,     // Délai max avant GO (ms)
  minLightInterval: 300,    // Délai min entre feux (ms)
  maxLightInterval: 800,    // Délai max entre feux (ms)
  totalLights: 5,           // Nombre de feux
  maxStoredScores: 10,      // Scores sauvegardés
};
```

### Modifier les Couleurs

Éditez `app/globals.css` ou les CSS Modules des composants.

### Ajouter des Sons

1. Ajoutez vos fichiers audio dans `public/sounds/`
2. Créez `utils/sound.ts`
3. Appelez les sons dans les composants

## 📱 Support des Navigateurs

| Navigateur | Version Minimale |
|-----------|------------------|
| Chrome    | 90+              |
| Firefox   | 88+              |
| Safari    | 14+              |
| Edge      | 90+              |

## 🐛 Problèmes Courants

### Le serveur ne démarre pas

```bash
# Nettoyer les dépendances et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreurs TypeScript

```bash
# Vérifier les types
npx tsc --noEmit
```

### Le build échoue

```bash
# Vérifier qu'il n'y a pas d'erreurs
npm run lint
npm run build
```

## 📚 Documentation Complète

- [README.md](./README.md) - Documentation principale
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Guide de contribution
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guide de déploiement
- [ROADMAP.md](./ROADMAP.md) - Fonctionnalités futures

## 💬 Aide et Support

- 🐛 [Signaler un bug](../../issues/new?template=bug_report.md)
- 💡 [Proposer une fonctionnalité](../../issues/new?template=feature_request.md)
- 💬 [Discussions](../../discussions)

## 🎉 Prêt à Jouer ?

```bash
npm run dev
```

Rendez-vous sur [http://localhost:3000](http://localhost:3000) et testez vos réflexes ! 🏎️💨

---

**Temps estimé pour tout configurer** : ⏱️ 5 minutes

Bonne chance et que le meilleur temps gagne ! 🏆
