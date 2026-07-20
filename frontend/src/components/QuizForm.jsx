import { useState } from "react";
import { generateQuiz } from "../services/api";

function QuizForm({ setQuiz }) {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    setLoading(true);

    // Clear previous quiz immediately
    setQuiz([]);

    try {
      const data = await generateQuiz({
        topic,
        difficulty,
        questions: Number(questions),
      });

      setQuiz(data.questions);
    } catch (error) {
      console.error(error);
      alert("Failed to generate quiz.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label>Topic</label>

      <input
        type="text"
        placeholder="Enter topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      />

      <label>Difficulty</label>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <label>Number of Questions</label>

      <select
        value={questions}
        onChange={(e) => setQuestions(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? "✨ Generating Quiz..." : "🚀 Generate Quiz"}
      </button>

      {loading && (
        <div className="loading">
          <p>🤖 AI is preparing your quiz...</p>
          <p>Please wait a few seconds.</p>
        </div>
      )}
    </form>
  );
}

export default QuizForm;