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

# ✨ Features

- 🤖 AI-powered quiz generation
- 📚 Generate quizzes on any topic
- 🎯 Custom number of questions
- 📋 Copy quiz with one click
- 📄 Download quizzes as PDF
- ⚡ Progressive question reveal
- 🎨 Responsive modern UI
- 🐳 Docker support
- 🔥 FastAPI REST API
- 🌐 OpenRouter AI integration

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React, Vite, CSS |
| Backend | FastAPI, Python |
| AI | OpenRouter API |
| PDF | jsPDF |
| HTTP | Axios |
| Containerization | Docker |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```text
QuizGen-AI/
│
├── backend/
│   ├── app/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── LICENSE
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/EMBEDDED-X/QuizGen-AI.git

cd QuizGen-AI
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
OPENROUTER_API_KEY=your_api_key_here

MODEL=openrouter/free
```

---

# 🐳 Docker

Build the containers

```bash
docker compose build
```

Run the application

```bash
docker compose up
```

Stop containers

```bash
docker compose down
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/generate-quiz` | Generate AI Quiz |
| GET | `/docs` | Swagger UI |
| GET | `/openapi.json` | API Schema |

---

# 🚀 Future Enhancements

- User Authentication
- Quiz History
- Difficulty Levels
- Category Selection
- Leaderboard
- Dark Mode
- Voice-based Quiz Generation
- Image-based Quiz Generation
- Export to Word
- Export to Excel

---

# 📸 Screenshots

> Screenshots will be added after deployment.

- Home Page
- Quiz Generation
- PDF Download
- Docker Running
- API Documentation

---

# 👨‍💻 Author

**Tarun Garg**

GitHub: https://github.com/EMBEDDED-X

---

# 📜 License

This project is licensed under the MIT License.