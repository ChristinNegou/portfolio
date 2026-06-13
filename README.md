# Portfolio — Christin Negou

Site portfolio one-pager pour présenter mes projets et services en tant que développeur freelance à Trois-Rivières, Québec.

## Aperçu

**Live** : [christinnegou.ca](https://christinnegou.ca) · [portfolio-nu-mocha-98.vercel.app](https://portfolio-nu-mocha-98.vercel.app)

5 sections :
- **Hero** — accroche et appels à l'action
- **Projets** — cartes avec liens live et GitHub pour chaque projet vitrine
- **Services** — Sites web, Applications web, Applications mobiles
- **À propos** — parcours, UQTR, stack technique
- **Contact** — formulaire d'envoi d'email via Resend

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Langage | TypeScript 5 |
| Email | Resend |
| Déploiement | Vercel |
| Domaine | christinnegou.ca |

## Installation

```bash
git clone https://github.com/ChristinNegou/portfolio.git
cd portfolio
npm install

# Configurer les variables d'environnement
cp .env.local.example .env.local
# Remplir RESEND_API_KEY avec ta clé depuis resend.com

npm run dev
```

## Variables d'environnement

```env
# Resend — https://resend.com (gratuit jusqu'à 100 emails/jour)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

## Structure

```
src/
├── app/
│   ├── api/contact/route.ts   → Route handler formulaire de contact
│   ├── globals.css            → Tailwind v4 + thème custom
│   ├── layout.tsx             → Métadonnées, police Geist
│   └── page.tsx               → Page principale
└── components/
    ├── Navbar.tsx             → Navigation sticky responsive
    ├── Footer.tsx             → Pied de page
    └── sections/
        ├── Hero.tsx
        ├── Projects.tsx
        ├── Services.tsx
        ├── About.tsx
        └── Contact.tsx
```

## Développeur

**Christin Negou** — Développeur web & mobile, Québec  
[github.com/ChristinNegou](https://github.com/ChristinNegou) · [christinnegou.ca](https://christinnegou.ca) · 2026
