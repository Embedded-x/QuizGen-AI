import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

function QuizOutput({ quiz }) {
  const [displayedQuiz, setDisplayedQuiz] = useState([]);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (!quiz || quiz.length === 0) {
      setDisplayedQuiz([]);
      setGenerating(false);
      return;
    }
  
    setDisplayedQuiz([]);
    setGenerating(true);
  
    let cancelled = false;
  
    const revealQuestion = (index) => {
      if (cancelled) return;
  
      if (index >= quiz.length) {
        setGenerating(false);
        return;
      }
  
      setDisplayedQuiz((prev) => [...prev, quiz[index]]);
  
      setTimeout(() => {
        revealQuestion(index + 1);
      }, 500);
    };
  
    revealQuestion(0);
  
    return () => {
      cancelled = true;
    };
  }, [quiz]);

  const [copied, setCopied] = useState(false);

  const copyQuiz = () => {
    let text = "";

    quiz.forEach((q, index) => {
      text += `Question ${index + 1}\n`;
      text += `${q.question}\n\n`;

      text += `A. ${q.options.A}\n`;
      text += `B. ${q.options.B}\n`;
      text += `C. ${q.options.C}\n`;
      text += `D. ${q.options.D}\n\n`;

      text += `Answer: ${q.answer}\n`;
      text += `Explanation: ${q.explanation}\n`;
      text += "\n--------------------------------------\n\n";
    });

    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("QuizGen AI", 20, y);

    y += 15;

    displayedQuiz.forEach((q, index) => {
      if (y > 250) {
        doc.addPage();
        y = 20;
      }

      doc.setFont("helvetica", "bold");
      doc.text(`Question ${index + 1}`, 20, y);

      y += 8;

      doc.setFont("helvetica", "normal");

      const question = doc.splitTextToSize(q.question, 170);
      doc.text(question, 20, y);

      y += question.length * 7;

      doc.text(`A. ${q.options.A}`, 25, y);
      y += 7;

      doc.text(`B. ${q.options.B}`, 25, y);
      y += 7;

      doc.text(`C. ${q.options.C}`, 25, y);
      y += 7;

      doc.text(`D. ${q.options.D}`, 25, y);
      y += 10;

      doc.setFont("helvetica", "bold");
      doc.text(`Answer: ${q.answer}`, 20, y);

      y += 8;

      doc.setFont("helvetica", "normal");

      const explanation = doc.splitTextToSize(
        `Explanation: ${q.explanation}`,
        170
      );

      doc.text(explanation, 20, y);

      y += explanation.length * 7 + 12;
    });

    doc.save("QuizGenAI_Quiz.pdf");
  };

  if (!quiz || quiz.length === 0) {
    return (
      <div className="output-card">
        <h2>📝 Generated Quiz</h2>
        <p className="empty">
          Your generated quiz will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="output-card">
      <div className="output-header">
        <h2>📝 Generated Quiz</h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            className="copy-btn"
            onClick={copyQuiz}
          >
            {copied ? "✅ Copied!" : "📋 Copy Quiz"}
          </button>

          <button
            className="copy-btn"
            onClick={downloadPDF}
          >
            📄 Download PDF
          </button>
        </div>
      </div>

      {generating && (
        <div className="loading">
          🤖 AI is generating your quiz...
        </div>
      )}

      {displayedQuiz.filter(Boolean).map((q, index) => (
        <div
          key={index}
          className="question-card"
        >
          <h3>Question {index + 1}</h3>

          <p className="question">
            {q.question}
          </p>

          <ul>
            <li>A. {q.options.A}</li>
            <li>B. {q.options.B}</li>
            <li>C. {q.options.C}</li>
            <li>D. {q.options.D}</li>
          </ul>

          <div className="answer">
            ✅ Correct Answer: <strong>{q.answer}</strong>
          </div>

          <div className="explanation">
            💡 <strong>Explanation:</strong> {q.explanation}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuizOutput;