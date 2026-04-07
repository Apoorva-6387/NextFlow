# NextFlow — AI Workflow Builder

A modern **full-stack SaaS workflow builder** with AI integration using **Gemini API, Prisma, Neon DB, and Clerk Auth**.

---
## 📊 Dashboard Preview

<p align="center">
  <img src="./assets/DashBoard.jpeg" alt="Dashboard" width="100%" />
</p>
---

## 📂 Project Structure

```bash
nextflow/
├── app/                         # Next.js App Router
│   ├── api/
│   │   ├── generate/            # Gemini AI API
│   │   └── workflow/            # Workflow CRUD APIs
│   ├── sign-in/                 # Clerk auth pages
│   ├── sign-up/
│   └── page.tsx                 # Main dashboard
│
├── components/
│   ├── layout/                  # Navbar, Sidebar
│   ├── workflow/                # Nodes, Canvas, Logic
│   └── ui/                      # Reusable UI components
│
├── lib/
│   └── prisma.ts                # Prisma client setup
│
├── prisma/
│   └── schema.prisma            # Database schema
│
├── store/
│   └── useStore.ts              # Zustand global state
│
├── styles/                      # Global styles
├── .env.local                   # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/nextflow.git
cd nextflow
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env.local` file:

```env
DATABASE_URL=your_neon_database_url
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_secret_key
```

---

### 4️⃣ Setup database

```bash
npx prisma generate
npx prisma db push
```

---

### 5️⃣ Run the project

```bash
npm run dev
```

👉 Open: http://localhost:3000

---

## ✨ Features

*  AI-powered workflows (Gemini API)
*  Node-based workflow builder (React Flow)
*  Persistent data using Prisma + Neon
*  Authentication with Clerk
*  Modern UI with Tailwind CSS
*  Fast performance with Next.js

---

##  AI Workflow System

* Drag & drop nodes
* Connect via edges
* Supports:

  * Text nodes
  * Image nodes
  * Video nodes
  * AI nodes

---

##  Authentication

* Clerk-based authentication
* Secure login & signup
* Protected routes

---

## Future Improvements

* Real-time collaboration
* Workflow templates
* Analytics dashboard

---

##  Author
Apoorva Singh

---


