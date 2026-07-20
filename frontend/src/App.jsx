import { useState } from "react";
import "./App.css";
import QuizForm from "./components/QuizForm";
import QuizOutput from "./components/QuizOutput";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">

      <div className="header">
        <h1>🧠QuizGen AI</h1>
        <p>
          Generate AI-powered quizzes in seconds.
        </p>
      </div>

      <QuizForm 
        setQuiz={setQuiz}
        loading={loading}
        setLoading={setLoading}
      />

      {quiz.length > 0 && (
        <button
          className="clear-btn"
          onClick={() => setQuiz([])}
        >
          Clear Quiz
        </button>
      )}

      <QuizOutput 
        quiz={quiz}
        loading={loading}
      />

    </div>
  );
}

export default App;