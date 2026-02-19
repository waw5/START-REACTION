# 🔒 Politique de Sécurité

## 🛡️ Versions Supportées

Nous fournissons des mises à jour de sécurité pour les versions suivantes :

| Version | Supportée          |
| ------- | ------------------ |
| 1.x     | ✅ Oui             |
| < 1.0   | ❌ Non             |

## 🚨 Signaler une Vulnérabilité

La sécurité est une priorité pour nous. Si vous découvrez une vulnérabilité de sécurité, veuillez nous la signaler de manière responsable.

### Comment Signaler

**⚠️ NE PAS créer une issue publique pour les vulnérabilités de sécurité.**

Au lieu de cela :

1. **Email** : Envoyez un email à [VOTRE-EMAIL] avec :
   - Description de la vulnérabilité
   - Étapes pour reproduire
   - Impact potentiel
   - Suggestions de correction (si vous en avez)

2. **GitHub Security Advisories** : Utilisez [GitHub Security Advisories](../../security/advisories/new) pour signaler de manière privée

### Ce que nous attendons de vous

- Donnez-nous un délai raisonnable pour résoudre le problème avant de le divulguer publiquement
- Faites un effort de bonne foi pour éviter les violations de confidentialité, la destruction de données et l'interruption de service
- Ne pas exploiter la vulnérabilité au-delà de ce qui est nécessaire pour la démonstration

### Ce que vous pouvez attendre de nous

- Confirmation de réception dans les 48 heures
- Évaluation initiale dans les 5 jours ouvrables
- Mise à jour régulière sur les progrès
- Crédit public pour la découverte (si vous le souhaitez)

## 🔍 Scope de Sécurité

### Dans le Scope

- Injection XSS (Cross-Site Scripting)
- Injection de données dans localStorage
- Manipulation de scores côté client
- Problèmes d'authentification (si implémentés)
- Failles de validation de données

### Hors Scope

- DoS/DDoS (c'est une application frontend statique)
- Problèmes sur des navigateurs obsolètes non supportés
- Problèmes nécessitant un accès physique à l'appareil
- Social engineering

## 🔐 Bonnes Pratiques de Sécurité

### Pour les Utilisateurs

- ✅ Utilisez toujours HTTPS
- ✅ Gardez votre navigateur à jour
- ✅ Méfiez-vous des sites imitant notre interface
- ✅ Ne partagez pas d'informations sensibles dans le jeu

### Pour les Développeurs

- ✅ Validez toujours les entrées utilisateur
- ✅ Sanitizez les données avant stockage
- ✅ Utilisez des headers de sécurité appropriés
- ✅ Gardez les dépendances à jour
- ✅ Suivez le principe du moindre privilège

## 🛠️ Mesures de Sécurité Actuelles

### Frontend

- ✅ Pas d'utilisation de `dangerouslySetInnerHTML`
- ✅ Validation TypeScript stricte
- ✅ Sanitization des données du localStorage
- ✅ Content Security Policy (via Vercel)
- ✅ HTTPS uniquement en production

### Dépendances

- ✅ Revue régulière des dépendances
- ✅ Utilisation de `npm audit`
- ✅ GitHub Dependabot activé
- ✅ Pas de dépendances avec vulnérabilités connues

### Déploiement

- ✅ Déploiement sur Vercel (infrastructure sécurisée)
- ✅ Edge Network avec protection DDoS
- ✅ Certificats SSL/TLS automatiques
- ✅ Headers de sécurité configurés

## 📋 Checklist de Sécurité pour les Contributeurs

Avant de soumettre une PR, vérifiez :

- [ ] Pas de secrets/tokens exposés dans le code
- [ ] Validation appropriée des entrées utilisateur
- [ ] Pas de dépendances avec vulnérabilités connues (`npm audit`)
- [ ] Pas d'utilisation dangereuse de `eval()` ou équivalent
- [ ] Sanitization des données stockées
- [ ] Protection contre XSS
- [ ] Tests de sécurité effectués

## 🔄 Processus de Mise à Jour de Sécurité

1. **Évaluation** : Analyse de la vulnérabilité et de son impact
2. **Correction** : Développement et test du correctif
3. **Notification** : Alerte aux utilisateurs si nécessaire
4. **Déploiement** : Release de la version corrigée
5. **Divulgation** : Publication des détails après correction

## 📚 Ressources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/security)
- [Vercel Security](https://vercel.com/security)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)

## 📞 Contact

Pour toute question concernant la sécurité :
- Email : [VOTRE-EMAIL]
- GitHub Security : [Security Advisories](../../security/advisories)

---

**Dernière mise à jour** : 19 Février 2026

Merci de contribuer à la sécurité du F1 Reaction Test ! 🏎️🔒
