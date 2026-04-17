# ATTIMO WEBSITE — Documentation Technique

**Structure du projet :** Site vitrine statique HTML/CSS/JS  
**Objectif :** Présenter Attimo, ateliers créatifs à Mahajanga, Madagascar  
**Optimisation :** SEO-friendly, animations fluides, responsive mobile-first

---

## 📁 Arborescence

```
website/
├── index.html              ← Accueil
├── concept.html            ← Philosophie & histoire
├── ateliers.html           ← Ateliers, calendrier, tarifs
├── galerie.html            ← Galerie photos, témoignages
├── contact.html            ← Formulaire, localisation, FAQ
├── robots.txt              ← SEO robots config
├── sitemap.xml             ← SEO sitemap
├── css/
│   └── style.css           ← Styles globaux + responsive
├── js/
│   └── animations.js       ← GSAP animations
└── assets/
    ├── images/             ← Photos à ajouter
    └── icons/              ← Icônes SVG
```

---

## 🎨 Palette de couleurs

```css
--color-primary: #A8B89A;      /* Vert sauge doux */
--color-dark: #1A1A1A;          /* Noir profond */
--color-light: #F5F0E8;         /* Blanc cassé crème */
--color-warm: #C4A882;          /* Sable/caramel doré */
--color-neutral: #D4C5B0;       /* Beige pierre */
```

---

## 📱 Responsive Breakpoints

- **Mobile :** < 768px
- **Tablet :** 768px - 1024px
- **Desktop :** > 1024px
- **Ultra-wide :** > 1440px

---

## 🔍 SEO Optimisations Implémentées

✅ **Meta tags complets**
- Title (unique par page)
- Description (160 caractères)
- Keywords (pertinents)
- Open Graph (partage réseaux)
- Canonical URLs

✅ **Structure sémantique**
- HTML5 (header, main, section, footer, article, figure)
- Headings hiérarchisés (h1 → h2 → h3)
- Alt text sur toutes les images
- Schema.org microdata (où pertinent)

✅ **Fichiers SEO**
- `robots.txt` (directives moteurs)
- `sitemap.xml` (indexation)

✅ **Contenu**
- Mots-clés naturels (Mahajanga, ateliers créatifs, Madagascar)
- Contenu unique par page
- Appels à l'action clairs (CTA)
- Structure logique interne (liens internes)

⚠️ **À compléter après**
- Images optimisées (WebP, compression)
- Structured data (events, organization, localBusiness)
- Local SEO (Google My Business, avis)

---

## 🎬 Animations (GSAP)

À implémenter dans `js/animations.js` :

1. **Scroll parallaxe** : Hero images légèrement décalées
2. **Fade-in** : Cartes et sections apparaissent au scroll
3. **Hover effects** : Cartes se soulèvent légèrement
4. **Curseur personnalisé** : Couleur vert sauge sur liens
5. **Transitions fluides** : 300-400ms, easing ease-out

---

## 📋 Pages & Contenu

### 1. **index.html** — Accueil
- Hero attractif
- Section "Pourquoi Attimo"
- Aperçu ateliers à venir
- CTA principal

### 2. **concept.html** — Concept
- Origines & philosophie
- Valeurs clés (créativité, lenteur, communauté)
- Partenaires

### 3. **ateliers.html** — Ateliers
- Types d'ateliers (4 cartes)
- Événement vedette (Rendez-vous sous le manguier)
- Calendrier / listing ateliers
- Tarifs & infos pratiques

### 4. **galerie.html** — Galerie
- Grille photos (9+ images)
- Témoignages de participants

### 5. **contact.html** — Contact
- Localisation + adresse
- Formulaire de contact (Formspree)
- Réseaux sociaux (Facebook, Instagram)
- FAQ interactive (details/summary)

---

## 📧 Formulaire de contact

Utilise **Formspree.io** (gratuit, pas de backend nécessaire) :

1. Crée un compte sur https://formspree.io
2. Crée un formulaire (attimo-mada.com)
3. Remplace `YOUR_FORM_ID` dans `contact.html`
4. Les emails arriveront directement

---

## 🚀 Déploiement

### Phase 1 : GitHub
```bash
git init
git add .
git commit -m "Initial commit: Attimo website"
git push origin main
```

### Phase 2 : Vercel
1. Connecte repo GitHub à Vercel
2. Déploiement automatique
3. URL : https://attimo-mada.vercel.app

### Phase 3 : Domaine LWS
1. Modifie DNS LWS pour pointer vers Vercel
2. Ajoute domaine custom à Vercel
3. Attends propagation DNS (24-48h)
4. Final : https://attimo-mada.com

---

## 📊 Performance & Tests

**Objectifs :**
- Lighthouse score > 90
- Mobile Friendly ✓
- Page Load < 3s
- Accessibility WCAG AA

**À tester :**
- Chrome, Firefox, Safari, Edge
- iPhone & Android
- Écrans tactiles
- Lecteurs d'écran (accessibilité)

---

## 📸 Images à ajouter

**À récupérer de Facebook :**
- Hero image (espace ou atmosphère)
- Photos ateliers (par type : dessin, crochet, poterie)
- Photos participants en action
- Photos résultats/créations
- Photos événement (Rendez-vous)
- Façade/localisation

**Optimisation :**
- Format : JPEG ou WebP
- Résolution : 1200px min (responsive)
- Poids : < 300KB par image
- Alt text : Descriptif complet

---

## 🔐 Points de Sécurité

- ✓ Pas de données sensibles en dur
- ✓ Formulaire via Formspree (tiers de confiance)
- ✓ Pas de JavaScript externe non-sûr
- ⚠️ À faire : Ajouter HTTPS + SSL (Vercel auto)
- ⚠️ À faire : Politique de confidentialité

---

## 📝 Maintenance Future

**Mise à jour du calendrier :**
- Modifie `ateliers.html` (dates/places)

**Ajout d'ateliers :**
- Duplique une `<article>` et modifie contenu

**Changement tarifs :**
- Modifie section `practical-info` dans `ateliers.html`

**Ajout photos galerie :**
- Ajoute `<figure>` dans `galerie.html`
- Télécharge image dans `assets/images/`

---

## 👥 Support & Questions

- **Développement :** Claude Haiku 4.5 (Copilot VS Code)
- **Contenu & direction :** Mampionona
- **Bénéficiaire :** Miray (Attimo)

---

**Bon développement ! 🌻**
