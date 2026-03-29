# 🧠 Conceptly — Understand Better, Learn Faster

[![React version](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite version](https://img.shields.io/badge/Vite-6-purple.svg)](https://vite.dev/)
[![Tailwind version](https://img.shields.io/badge/Tailwind-4-cyan.svg)](https://tailwindcss.com/)
[![Groq AI](https://img.shields.io/badge/AI-Groq%20(Llama%203.3)-orange.svg)](https://groq.com/)

**Conceptly** is a premium, AI-powered education platform designed to transform how students learn. Built with a sleek glassmorphism aesthetic and powered by high-speed inference via the Groq Llama 3.3 model, it provides an interactive, personalized learning experience from beginner to advanced levels.

---

## ✨ Key Features

### 🚀 Interactive AI Concept Explainer
Input any concept (e.g., *Quantum Mechanics*, *Photosynthesis*) and receive an instant, multi-tiered explanation.
- **Beginner Level**: Simple analogies and jargon-free language.
- **Intermediate Level**: Standard terminology and conceptual depth.
- **Advanced Level**: Technical precision and academic rigor.
- **Built-in Utils**: Text-to-Speech (native browser API) and Copy-to-Clipboard.

### 💬 Personal AI Tutor (Chat)
A conversational AI assistant that remembers your history. Stuck on a math problem or a coding bug? Conceptly provides step-by-step guidance in real-time.

### 📊 Performance Dashboard
Track your mastery with granular, interactive data visualization.
- **Weekly Progress Flow**: Animated Area Charts powered by Recharts.
- **Live Stats**: Bi-directional data sync between quizzes and your dashboard.
- **Subject Mastery**: Dynamic progress bars tracking your strength in specific topics.

### 📝 Dynamic Quiz Engine
Generate quizzes on-the-fly based on your chosen subject and difficulty. Results are instantly calculated and updated to your global learning profile.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6+](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Inference Engine**: [Groq SDK](https://groq.com/) (Llama 3.3-70b-versatile)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Groq API Key](https://console.groq.com/keys)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aashishrajput9838/conceptly.git
   cd conceptly
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Launch the platform**:
   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) to start learning!

---

## 🔒 Security Note
This project uses `dangerouslyAllowBrowser: true` for the Groq SDK to enable client-side inference for this prototype. For a production deployment, it is highly recommended to move the API calls to a secure backend proxy to protect your API keys.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Developed with ❤️ for the future of education.
