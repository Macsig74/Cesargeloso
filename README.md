# 🎵 Site Association César Geloso & Pénélope Bigazzi

Site web pour l'association dédiée à la promotion et la préservation de l'œuvre des compositeurs César Geloso et Pénélope Bigazzi.

## 📁 Structure des fichiers

```
votre-site/
│
├── index.html              # Page d'accueil
├── association.html        # Page de présentation de l'association
├── cesar-geloso.html       # Page dédiée à César Geloso
├── penelope-bigazzi.html   # Page dédiée à Pénélope Bigazzi
├── cd.html                 # Page de présentation du CD
├── contact.html            # Page de contact avec formulaire
├── style.css               # Toutes les styles du site
├── script.js               # JavaScript (menu, formulaire)
│
└── images/                 # Dossier pour vos images
    ├── banniere.png        # Logo/Bannière pour la navigation
    ├── cd-cover.jpg        # Pochette du CD
    └── ...                 # Autres images
```

## 🚀 Installation

1. **Téléchargez tous les fichiers** sur votre hébergement web
2. **Créez un dossier `images/`** à la racine
3. **Ajoutez vos images** dans ce dossier
4. **C'est prêt !** Le site est fonctionnel

## ✏️ Personnalisation du contenu

### 🎨 **1. BANDEAU ET LOGO (OBLIGATOIRE)**

**Structure du header :**
Le header contient maintenant **2 éléments** :
1. **Un bandeau pleine largeur** (en haut)
2. **Un logo + titre** (en dessous dans la navigation)

**Fichiers concernés :** Tous les fichiers HTML

#### 📸 **BANDEAU PLEINE LARGEUR**
```html
<div class="header-banner">
    <img src="images/banniere.jpg" alt="Bandeau Association">
</div>
```

**À faire :**
- Créez une image de bandeau (photo, illustration, etc.)
- Format recommandé : JPG ou PNG
- Dimensions recommandées : **1920px de large x 120-150px de haut**
- Nommez-la `banniere.jpg`
- Placez-la dans `images/banniere.jpg`

#### 🏷️ **LOGO + TITRE**
```html
<div class="logo">
    <img src="images/logo.png" alt="Logo Association">
    <h1>César Geloso & Pénélope Bigazzi</h1>
</div>
```

**À faire :**
- Créez votre logo (format PNG avec fond transparent recommandé)
- Dimensions : **hauteur 60px**, largeur libre
- Nommez-le `logo.png`
- Placez-le dans `images/logo.png`
- Modifiez le titre `<h1>` selon votre association

**💡 Option sans logo :** Si vous n'avez pas de logo, supprimez la ligne `<img>` et gardez juste le `<h1>`.

---

### 📄 **2. PAGE ACCUEIL (index.html)**

**Section Introduction :**
```html
<section class="introduction">
    <div class="container">
        <h2>Notre Association</h2>
        <p>Notre association a pour vocation de promouvoir...</p>
```
➡️ **Modifiez** le paragraphe pour décrire votre association.

---

### 🏛️ **3. PAGE ASSOCIATION (association.html)**

**Sections à personnaliser :**

**Qui sommes-nous ?**
```html
<div class="biography">
    <h3>Qui sommes-nous ?</h3>
    <p><strong>Insérez ici l'histoire...</strong></p>
```
➡️ Remplacez le contenu entre les balises `<p>` et `<ul><li>`

**Nos Missions** → Décrivez vos objectifs  
**Nos Activités** → Listez vos activités  
**Notre Équipe** → Présentez les membres  
**Nos Partenaires** → Listez vos partenaires  
**Nous Rejoindre** → Expliquez comment adhérer  
**Soutenir l'Association** → Détaillez les moyens de soutien

---

### 👤 **4. PAGE CÉSAR GELOSO (cesar-geloso.html)**

**Sections à remplir :**

**Biographie :**
```html
<div class="biography">
    <h3>Biographie</h3>
    <p><strong>Insérez ici la biographie...</strong></p>
```
➡️ Ajoutez la biographie complète du compositeur

**Œuvres Principales :**
```html
<div class="works">
    <h3>Œuvres Principales</h3>
    <ul>
        <li>Œuvre 1 - Description</li>
```
➡️ Listez ses œuvres majeures

**Galerie (optionnel) :**
```html
<img src="images/cesar-geloso-1.jpg" alt="César Geloso" class="gallery-img">
```
➡️ Ajoutez des photos du compositeur

---

### 👤 **5. PAGE PÉNÉLOPE BIGAZZI (penelope-bigazzi.html)**

**Même structure que César Geloso :**
- Biographie
- Œuvres Principales
- Galerie

➡️ Suivez les mêmes instructions que pour la page César Geloso.

---

### 💿 **6. PAGE CD (cd.html)**

**Image de la pochette :**
```html
<div class="cd-placeholder">
    <!-- Remplacez par : -->
    <img src="images/cd-cover.jpg" alt="Pochette du CD">
</div>
```
➡️ Ajoutez votre image de pochette du CD

**Informations du CD :**
```html
<h3>Titre du CD</h3>
<p><strong>Insérez ici le titre...</strong></p>
```
➡️ Remplissez :
- Titre du CD
- Description
- Prix
- Liste des pistes (avec durées)
- Informations complémentaires (interprètes, lieu d'enregistrement, etc.)

---

### 📧 **7. PAGE CONTACT (contact.html)**

**Le formulaire est déjà configuré** avec FormSpree !

**Coordonnées à ajouter :**
```html
<div class="contact-info-item">
    <h4>📧 Email</h4>
    <p><strong>Ajoutez votre email ici</strong></p>
```
➡️ Remplacez les textes en gras par :
- Votre email
- Votre téléphone
- Votre adresse postale
- Vos horaires d'ouverture

---

## 🎨 Personnalisation des couleurs

**Fichier :** `style.css`

**Dégradé principal :**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
➡️ Changez `#667eea` et `#764ba2` par vos couleurs

**Couleur des boutons actifs :**
```css
background: linear-gradient(135deg, #667eea, #764ba2);
```

---

## 📱 Responsive Design

Le site est **100% responsive** et s'adapte automatiquement à :
- 📱 Smartphones
- 📲 Tablettes  
- 💻 Ordinateurs

Le menu devient automatiquement un menu hamburger sur mobile.

---

## ✉️ Configuration du formulaire de contact

Le formulaire utilise **FormSpree** et est déjà configuré avec votre endpoint :
```html
<form action="https://formspree.io/f/myznnpky" method="POST">
```

**Comment ça marche :**
1. L'utilisateur remplit le formulaire
2. Il clique sur "Envoyer"
3. FormSpree envoie l'email à votre adresse
4. L'utilisateur voit un message de confirmation

**Aucune configuration supplémentaire nécessaire !**

---

## 🌐 Navigation

Le menu de navigation est identique sur toutes les pages :
- Accueil
- Association
- César Geloso
- Pénélope Bigazzi
- Notre CD
- Contact

La page active est mise en surbrillance automatiquement.

---

## 🎭 Design "Liquid Glass"

Le site utilise un design moderne avec :
- ✨ Effets de verre (glassmorphism)
- 🌈 Dégradés violets
- 💎 Transparences et flous
- 🎨 Animations fluides
- 🎯 Police moderne (Inter/Segoe UI)

---

## ⚠️ Points importants

1. **Créez TOUJOURS le dossier `images/`** à la racine
2. **Nommez vos images correctement** (ou modifiez les noms dans le HTML)
3. **Testez le formulaire** après mise en ligne
4. **Vérifiez que tous les liens** fonctionnent
5. **Optimisez vos images** (taille < 500 KB recommandé)

---

## 🆘 Support

Si vous avez des questions ou besoin d'aide :
- Vérifiez que tous les fichiers sont bien uploadés
- Vérifiez les chemins des images
- Assurez-vous que le dossier `images/` existe
- Testez sur différents navigateurs

---

## 📝 Checklist avant mise en ligne

- [ ] Tous les fichiers HTML, CSS, JS sont uploadés
- [ ] Le dossier `images/` est créé
- [ ] La bannière est ajoutée dans `images/banniere.png`
- [ ] Les pages César et Pénélope sont remplies
- [ ] La page CD est complétée
- [ ] Les coordonnées de contact sont ajoutées
- [ ] Le formulaire de contact fonctionne
- [ ] Le site est testé sur mobile et desktop

---

**🎉 Votre site est prêt !**

Bon courage pour la personnalisation ! 🚀