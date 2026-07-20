# 🤖 QuizGen AI

An AI-powered Quiz Generator that creates high-quality multiple-choice quizzes from any topic using Large Language Models. Built with **React**, **FastAPI**, and **OpenRouter AI**, QuizGen AI helps students, educators, and professionals generate quizzes instantly.

---

## ✨ Features

- 🤖 AI-powered quiz generation
- 📝 Generate quizzes on any topic
- 🎯 Custom number of questions
- 📚 Multiple-choice questions (MCQs)
- 📋 One-click copy quiz
- 📄 Download quiz as PDF
- ⚡ Progressive question reveal
- 🎨 Modern and responsive UI
- 🔒 REST API powered by FastAPI
- 🐳 Docker support

---

## 🖼️ Preview

> Add screenshots here after deployment.

### Home Page

```
/screenshots/home.png
```

### Generated Quiz

```
/screenshots/quiz.png
```

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- CSS3
- Axios

### Backend

- FastAPI
- Python
- Uvicorn

### AI

- OpenRouter API
- Large Language Models (LLMs)

### Tools

- Docker
- Git
- GitHub

---

## 📂 Project Structure

```
QuizGen-AI/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services.py
│   │   ├── main.py
│   │   └── config.py
│   │
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── App.css
│   │
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/EMBEDDED-X/QuizGen-AI.git

cd QuizGen-AI
```

---

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
OPENROUTER_API_KEY=your_api_key_here

MODEL=openrouter/free
```

---

## 🐳 Docker

Build containers

```bash
docker compose build
```

Run containers

```bash
docker compose up
```

Stop containers

```bash
docker compose down
```

---

## 🚀 Future Enhancements

- User Authentication
- Quiz History
- Difficulty Levels
- Subject Categories
- Timer Mode
- Leaderboard
- Dark Mode
- Quiz Sharing
- Export to Word
- Export to Excel
- Speech-to-Quiz
- Image-based Quiz Generation

---

## 📸 Screenshots

| Home | Quiz |
|------|------|
| Add Screenshot | Add Screenshot |

---

## 👨‍💻 Author

**Tarun Garg**

GitHub: https://github.com/EMBEDDED-X

---

## 📜 License

This project is licensed under the MIT License.
