NextFlow — AI Workflow Builder (Krea-style Clone)

NextFlow is a pixel-perfect AI workflow builder inspired by Krea.ai.
It allows users to visually design workflows using nodes like Text, Image, Video, and LLM, connect them, and execute AI-powered pipelines.

This project demonstrates full-stack SaaS architecture, including authentication, database persistence, workflow execution, and modern UI/UX.

🌟 Key Highlights
 Pixel-perfect UI inspired by Krea
 Node-based workflow builder (React Flow)
 AI integration using Google Gemini API
 Input chaining across nodes
 Authentication using Clerk
 Workflow persistence using PostgreSQL (Neon)
 Fast and modern stack (Next.js App Router)
 Beautiful UI (glassmorphism + glow effects)
🛠 Tech Stack
Category	Technology
Frontend	Next.js 14+, React
Styling	Tailwind CSS
State	Zustand
Workflow Engine	React Flow
Backend	Next.js API Routes
Database	PostgreSQL (Neon)
ORM	Prisma
Auth	Clerk
AI	Google Gemini API
File Upload	Transloadit
Processing	FFmpeg (via Trigger.dev)
📂 Complete Project Structure
nextflow/
│
├── prisma/
│   ├── schema.prisma          # Database schema
│
├── public/                    # Static assets
│
├── src/
│   │
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout (ClerkProvider)
│   │   ├── page.tsx           # Main dashboard page
│   │   ├── globals.css        # Global styles (Tailwind + custom)
│   │   │
│   │   ├── sign-in/           # Clerk auth route
│   │   │   └── [[...sign-in]]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── sign-up/           # Clerk auth route
│   │   │   └── [[...sign-up]]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── api/               # Backend APIs
│   │   │   ├── generate/      # Gemini AI API
│   │   │   │   └── route.ts
│   │   │   │
│   │   │   └── workflow/      # Save & fetch workflows
│   │   │       └── route.ts
│   │
│   ├── components/
│   │   │
│   │   ├── layout/            # UI layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── SidebarLeft.tsx
│   │   │   └── SidebarRight.tsx
│   │   │
│   │   ├── workflow/          # Workflow nodes & canvas
│   │   │   ├── Canvas.tsx
│   │   │   ├── NodeText.tsx
│   │   │   ├── NodeImage.tsx
│   │   │   ├── NodeVideo.tsx
│   │   │   ├── NodeLLM.tsx
│   │   │   ├── NodeCrop.tsx
│   │   │   └── NodeFrame.tsx
│   │   │
│   │   └── ui/                # Reusable UI components
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   │
│   ├── store/
│   │   └── useStore.ts        # Zustand global state
│   │
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client
│   │   └── utils.ts           # Helper functions
│
├── .env.local                # Environment variables
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/nextflow.git
cd nextflow
2️⃣ Install dependencies
npm install
3️⃣ Setup environment variables

Create .env.local:

DATABASE_URL=your_neon_database_url
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_secret_key
4️⃣ Setup database
npx prisma migrate dev
npx prisma generate
5️⃣ Run the project
npm run dev
 Core Features Explained
🔹 1. Workflow Canvas
Built using React Flow
Supports drag, drop, zoom, pan
Nodes connected via edges
🔹 2. Node Types
Node	Function
Text Node	Input text
Image Node	Upload image
Video Node	Upload video
LLM Node	AI processing
Crop Node	Image editing
Frame Node	Extract video frame
🔹 3. LLM Integration
Uses Google Gemini API
Accepts:
system prompt
user message
images
Output displayed directly on node
🔹 4. Authentication
Powered by Clerk
Secure login/signup
User session handling
🔹 5. Workflow Persistence
Stored in PostgreSQL
Linked to userId
Loaded in history panel
🔄 Sample Workflow (How it works)
Upload image
Crop image
Add text prompt
Send to LLM
Generate AI output

 Learning Outcomes
Full-stack SaaS development
API integration with AI
Database design with Prisma
Authentication system
Advanced UI/UX design
Workflow engine logic

👨‍💻 Author

Apoorva Singh
B.Tech MAE | Web Developer

⭐ Conclusion

NextFlow is a powerful AI workflow builder that combines modern frontend technologies, backend architecture, and AI capabilities into a single interactive application.

This project is ideal for:

Internship portfolios
Startup prototypes
Full-stack learning
