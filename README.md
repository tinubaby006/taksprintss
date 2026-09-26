# Hackathon Starter Template

A clean, modern, and minimal Next.js starter template designed for rapid prototyping and hackathon projects.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React](https://react.dev/) 19
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Utilities:** `clsx`, `tailwind-merge`

## 📁 Project Structure

```
├── app/                  # Next.js App Router (pages, layout, styles)
│   ├── favicon.ico
│   ├── globals.css       # Tailwind CSS v4 setup and theme variables
│   ├── layout.tsx        # Root layout with Header wrapper
│   └── page.tsx          # Starter landing page
├── components/           # Reusable UI components
│   └── Header.tsx        # Clean navigation header
├── data/                 # Application data and mock datasets
│   └── .gitkeep
├── lib/                  # Shared utilities and helpers
│   └── utils.ts          # cn() Tailwind class merging utility
├── public/               # Static assets and SVGs
└── types/                # TypeScript type definitions and interfaces
    └── index.ts
```

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles and builds the production application.
- `npm run start`: Runs the compiled production server.
- `npm run lint`: Runs ESLint checks.
