# 🚀 Guide de Déploiement sur Vercel

## Méthode 1 : Déploiement via GitHub (Recommandé)

### Étape 1 : Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com) et créez un nouveau repository
2. Initialisez Git dans votre projet local :

```bash
cd "C:\Users\Dan Anaelle\Desktop\StartF1"
git init
git add .
git commit -m "Initial commit - F1 Reaction Game"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/f1-reaction-game.git
git push -u origin main
```

### Étape 2 : Déployer sur Vercel

1. Connectez-vous sur [Vercel](https://vercel.com)
2. Cliquez sur **"Add New Project"**
3. Importez votre repository GitHub
4. Vercel détectera automatiquement Next.js
5. Les paramètres par défaut sont corrects :
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Cliquez sur **"Deploy"**

✅ Votre jeu sera en ligne en quelques minutes !

---

## Méthode 2 : Déploiement via CLI Vercel

### Prérequis
```bash
# Installer Vercel CLI globalement
npm install -g vercel
```

### Déploiement

```bash
# Se connecter à Vercel
vercel login

# Se déplacer dans le dossier du projet
cd "C:\Users\Dan Anaelle\Desktop\StartF1"

# Déployer en mode test (preview)
vercel

# Déployer en production
vercel --prod
```

La CLI vous guidera à travers les étapes :
1. **Set up and deploy?** → `Y`
2. **Which scope?** → Sélectionnez votre compte
3. **Link to existing project?** → `N` (première fois)
4. **What's your project's name?** → `f1-reaction-game`
5. **In which directory is your code located?** → `./`

---

## Configuration Post-Déploiement

### Domaine Personnalisé (Optionnel)

1. Dans le tableau de bord Vercel, allez dans **Settings** → **Domains**
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions pour configurer les DNS

### Variables d'Environnement (Si Nécessaire)

Actuellement, le jeu n'utilise pas de variables d'environnement car tout est stocké dans le `localStorage` du navigateur.

Si vous souhaitez ajouter des fonctionnalités nécessitant des variables d'environnement (API backend, analytics, etc.) :

1. Allez dans **Settings** → **Environment Variables**
2. Ajoutez vos variables
3. Redéployez le projet

---

## Vérifications Avant Déploiement

✅ **Checklist**

- [ ] Le projet build correctement localement (`npm run build`)
- [ ] Pas d'erreurs TypeScript
- [ ] Le fichier `vercel.json` est présent
- [ ] Le fichier `.gitignore` est configuré
- [ ] Les dépendances sont dans `package.json`

### Tester le Build en Local

```bash
# Builder le projet
npm run build

# Tester le build en production
npm start
```

Si tout fonctionne en local, ça fonctionnera sur Vercel !

---

## Performance et Optimisations

Le projet est déjà optimisé pour Vercel :

✅ **Optimisations incluses :**
- Static Generation (SSG) pour des performances maximales
- CSS Modules pour des styles optimisés
- Images optimisées automatiquement par Next.js
- Compression automatique par Vercel
- CDN global avec Vercel Edge Network

### Scores Lighthouse Attendus
- 🟢 Performance : 95-100
- 🟢 Accessibility : 95-100
- 🟢 Best Practices : 95-100
- 🟢 SEO : 95-100

---

## Surveillance et Monitoring

### Analytics Vercel (Optionnel)

Pour activer les analytics Vercel :

1. Dans le dashboard Vercel → **Analytics**
2. Activez **Web Analytics**
3. Ajoutez ce code dans `app/layout.tsx` :

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

4. Installez le package :
```bash
npm install @vercel/analytics
```

---

## Rollback en Cas de Problème

Si un déploiement pose problème :

1. Dans le dashboard Vercel → **Deployments**
2. Trouvez la version stable précédente
3. Cliquez sur les 3 points → **Promote to Production**

---

## URLs Après Déploiement

Vous aurez trois types d'URLs :

1. **Production** : `https://f1-reaction-game.vercel.app`
2. **Preview** : `https://f1-reaction-game-git-branch-username.vercel.app`
3. **Development** : `https://f1-reaction-game-random.vercel.app`

---

## Support et Dépannage

### Erreurs Courantes

#### Erreur : "Build failed"
```bash
# Vérifiez les erreurs TypeScript
npm run build

# Vérifiez les dépendances
npm install
```

#### Erreur : "Module not found"
```bash
# Réinstallez les dépendances
rm -rf node_modules
npm install
```

#### Page blanche après déploiement
- Vérifiez la console du navigateur (F12)
- Vérifiez les logs Vercel

### Logs Vercel

Pour voir les logs de build et runtime :
1. Dashboard Vercel → **Deployments**
2. Cliquez sur un déploiement
3. Onglet **Logs**

---

## Mises à Jour Futures

Pour mettre à jour votre jeu après le déploiement initial :

### Via GitHub (si Méthode 1)
```bash
git add .
git commit -m "Description des changements"
git push origin main
```

Vercel redéploiera automatiquement ! 🎉

### Via CLI Vercel (si Méthode 2)
```bash
vercel --prod
```

---

## Resources Utiles

- 📚 [Documentation Vercel](https://vercel.com/docs)
- 📚 [Documentation Next.js](https://nextjs.org/docs)
- 💬 [Support Vercel](https://vercel.com/support)
- 🐛 [GitHub Issues du Projet](https://github.com/VOTRE-USERNAME/f1-reaction-game/issues)

---

🏁 **Bon déploiement !** Si vous avez des questions, consultez la documentation ou créez une issue sur GitHub.
