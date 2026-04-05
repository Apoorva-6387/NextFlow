# NextFlow — AI Workflow Builder

A modern **full-stack SaaS workflow builder** with AI integration, inspired by node-based editors like Krea.
Built using **Next.js, Prisma, Neon DB, Clerk Auth, and Gemini AI**.

---

## ✨ Features

###  Core

*  AI-powered workflow execution (Gemini API)
*  Node-based workflow builder (React Flow)
*  Persistent workflows (PostgreSQL + Prisma)
*  Authentication with Clerk

###  UI/UX

*  Glassmorphism + modern UI
*  Smooth animations & transitions
*  Fully responsive

---

## Tech Stack

| Category | Technology               |
| -------- | ------------------------ |
| Frontend | Next.js 14, React        |
| Styling  | Tailwind CSS             |
| State    | Zustand                  |
| Backend  | Next.js API Routes       |
| Database | PostgreSQL (Neon)        |
| ORM      | Prisma                   |
| Auth     | Clerk                    |
| AI       | Google Gemini API        |
| Media    | FFmpeg (via Trigger.dev) |

---

## 📁 Project Structure
nextflow/
├── app/
│   ├── api/
│   │   ├── generate/
│   │   └── workflow/
│   ├── sign-in/
│   ├── sign-up/
│   └── page.tsx
│
├── components/
│   ├── layout/
│   ├── workflow/
│   └── ui/
│
├── lib/
│   └── prisma.ts
│
├── prisma/
│   └── schema.prisma
│
├── store/
│   └── useStore.ts
│
├── styles/
├── .env.local
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repo


git clone https://github.com/your-username/nextflow.git
cd nextflow


---

### 2️⃣ Install Dependencies


npm install


---

### 3️⃣ Setup Environment Variables

Create `.env.local`:

env
DATABASE_URL=your_neon_database_url
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_secret_key


---

### 4️⃣ Setup Database

bash
npx prisma generate
npx prisma db push


---

### 5️⃣ Run Project

npm run dev


👉 Open: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Workflow System

* Drag & drop nodes
* Connect via edges
* Supports:

  * 📝 Text nodes
  * 🖼 Image nodes
  * 🎥 Video nodes
  * 🤖 AI nodes

---

## 🤖 AI Integration

* Uses **Google Gemini API**
* Supports:

  * Text prompts
  * Image input
  * Node chaining

---

## 🔐 Authentication

* Powered by **Clerk**
* Secure login/signup
* Protected routes

---

## 📸 Preview

![App Screenshot](./dashboard.jpeg)

---

## 🚀 Future Improvements

* ⏳ Real-time collaboration
* 📊 Workflow analytics
* ☁️ Cloud storage
* 🔁 Workflow templates

---

## 👨‍💻 Author

**Apoorva Singh**

---


