# 🚀 ATTIMO WEBSITE — GUIDE DE TEST LOCAL

## Comment tester le site sur ton ordinateur

### Option 1 : Python (le plus simple)

**Si tu as Python installé :**

```bash
# Navigue dans le dossier website
cd website/

# Lance un serveur local
python -m http.server 8000

# Ouvre dans ton navigateur
# http://localhost:8000
```

### Option 2 : VS Code Live Server

1. Installe l'extension **Live Server** (Ritwick Dey)
2. Fais clic-droit sur `index.html` → "Open with Live Server"
3. Navigateur s'ouvre automatiquement

### Option 3 : Node.js

```bash
# Si tu as Node.js
npx http-server website/

# Ou avec yarn
yarn global add http-server
http-server website/
```

---

## ✅ Checklist de test local

### Navigation & Pages
- [ ] Accueil (index.html) se charge
- [ ] Tous les liens de navigation fonctionnent
- [ ] Pages concept, ateliers, galerie, contact accessibles
- [ ] Footer links OK

### Animations
- [ ] Hero title apparaît avec animation smooth
- [ ] Cards entrent au scroll avec rotation
- [ ] Hover sur cards = lift effect
- [ ] Curseur personnalisé vert sauge visible
- [ ] Scroll parallaxe hero image
- [ ] Boutons avec ripple effect au clic

### Responsive Design
- **Desktop (1440px+)** : Layout complet, 2-3 colonnes
- **Tablet (768px-1024px)** : Grille 2 colonnes
- **Mobile (< 768px)** : 1 colonne, textes lisibles
- [ ] Tester sur DevTools (F12) → Device Mode

### Formulaire Contact
- [ ] Tous les champs présents (nom, email, message)
- [ ] Bouton "Envoyer" visible
- [ ] Focus states sur inputs (couleur vert sauge)
- [ ] ⚠️ Note : Formspree ne fonctionne pas en local (normal)

### Performance
- [ ] Page load rapide (< 3s)
- [ ] Pas d'erreurs console (F12 → Console)
- [ ] Pas d'images broken (affichent placeholder)

### Accessibilité
- [ ] Tab navigation fonctionnelle
- [ ] Texte lisible et contrasté
- [ ] Emojis pas essentiels (juste décoration)

---

## 🐛 Dépannage

### Les animations ne fonctionnent pas
- **Cause :** GSAP CDN pas chargé
- **Fix :** Vérifie la connexion internet (GSAP charge de cdnjs.cloudflare.com)

### Fonts non chargées
- **Cause :** Google Fonts CDN pas dispo
- **Fix :** Vérife internet, sinon fallback à serif/sans-serif

### Images manquantes
- **Cause :** Encore pas téléchargées de Facebook
- **Fix :** Normal pour cette phase, placeholders OK

### Formulaire ne redirige pas
- **Cause :** Formspree pas configuré
- **Fix :** À faire après déploiement en production

---

## 📸 Points à tester spécifiquement

1. **Hero Animation** : Titre qui slide in à gauche
2. **Card Hover** : Lift + shadow = effet 3D
3. **Parallaxe Scroll** : Hero image bouge légèrement quand tu scroll
4. **Curseur** : Petit cercle vert qui suit la souris
5. **FAQ** : Details/summary s'ouvrent avec animation
6. **Mobile** : Navbar responsive, pas d'overflow

---

## 🎨 Couleurs à vérifier

- Vert sauge : `#A8B89A` (logos, accents)
- Noir profond : `#1A1A1A` (textes principaux)
- Blanc cassé : `#F5F0E8` (fonds clairs)
- Caramel doré : `#C4A882` (hover, warm accents)
- Beige pierre : `#D4C5B0` (neutres)

Tous les éléments respectent cette palette ? ✓

---

## 📱 Breakpoints à tester

```css
Mobile:      max-width: 768px
Tablet:      768px - 1024px
Desktop:     > 1024px
Ultra-wide:  > 1440px
```

Redimensionne la fenêtre et vérifie que le layout se réajuste. Pas de texte coupé ? Grilles adaptées ? ✓

---

## 🚀 Prochaine étape après test

1. Télécharge les images Facebook
2. Place-les dans `assets/images/`
3. Re-teste localement
4. Crée un repo GitHub
5. Déploie sur Vercel

---

## Questions pendant le test ?

Copie l'erreur console (F12) et partage avec moi. On debug ensemble ! 🐛✨
