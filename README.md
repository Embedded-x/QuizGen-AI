<div align="center">

# 🤖 QuizGen AI

### AI-Powered Quiz Generator using React, FastAPI & OpenRouter

Generate high-quality multiple-choice quizzes on any topic in seconds.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.13-3776AB?logo=python)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# 📖 Overview

QuizGen AI is an AI-powered web application that automatically generates multiple-choice quizzes from any topic using Large Language Models through the OpenRouter API.

The project combines a modern React frontend with a FastAPI backend and is fully containerized using Docker.

---

## 🌐 Live Demo

**Frontend:** https://quiz-gen-ai-amber.vercel.app

**Backend API:** https://quizgen-ai-okns.onrender.com

---

## 📂 GitHub Repository

```
https://github.com/EMBEDDED-X/QuizGen-AI
```

# ✨ Features

- 🤖 AI-powered quiz generation
- 📚 Generate quizzes on any topic
- 🎯 Select difficulty level (Easy, Medium, Hard)
- 🔢 Choose the number of questions
- 📱 Fully responsive UI
- 📋 Copy generated quiz
- 📄 Export quiz as PDF
- ⚡ FastAPI backend
- 🔒 Secure API key handling
- ☁️ Live cloud deployment

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Axios
- CSS

## Backend

- FastAPI
- Python
- Uvicorn
- Pydantic

## AI

- OpenRouter API
- Large Language Models (LLMs)

## Deployment

- Vercel (Frontend)
- Render (Backend)

## Version Control

- Git
- GitHub

---

# 📁 Project Structure

```
QuizGen-AI
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── Dockerfile
│
├── docs/
├── screenshots/
├── docker-compose.yml
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/EMBEDDED-X/QuizGen-AI.git
cd QuizGen-AI
```

---

## Backend Setup

```bash
cd backend
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
OPENROUTER_API_KEY=your_api_key
MODEL=openrouter/free
```

Run backend:

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🐳 Docker

Run the complete application using Docker Compose:

```bash
docker-compose up --build
```

---

# 📡 API Endpoint

### Generate Quiz

```
POST /api/generate-quiz
```

Example Request

```json
{
  "topic": "Artificial Intelligence",
  "difficulty": "Medium",
  "questions": 5
}
```

---

# 📸 Screenshots

<img width="1888" height="915" alt="image" src="https://github.com/user-attachments/assets/117a9734-c48e-44af-b495-53b919d834d0" />
<img width="1885" height="917" alt="image" src="https://github.com/user-attachments/assets/1d412190-8718-4a71-bc91-4868a22cc814" />
<img width="1896" height="917" alt="image" src="https://github.com/user-attachments/assets/6e600564-c275-47e7-85e2-f2f8de35035e" />

---

# 🚀 Deployment

## Frontend

Hosted on **Vercel**

## Backend

Hosted on **Render**

The frontend communicates securely with the FastAPI backend over HTTPS, and the backend integrates with the OpenRouter API to generate quizzes in real time.

---

# 🔮 Future Enhancements

- User Authentication
- Quiz History
- Leaderboards
- Multiple Quiz Formats
- Database Integration
- Dark Mode
- Multi-language Support
- Download as DOCX
- AI Explanation for Answers

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Tarun Kumar Garg**

B.Tech – Information Technology

JSS Academy of Technical Education, Noida

GitHub:
https://github.com/EMBEDDED-X

---

# ⭐ Acknowledgements

- OpenRouter
- FastAPI
- React
- Vite
- Render
- Vercel

---

## 📬 Contact

For suggestions or collaboration, feel free to connect through GitHub.
