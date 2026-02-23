import { useState } from "react";
import { quizData } from "../data/quizData";
import Question from "../components/Question";
import "./Quiz.css";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = quizData[index];

  const handleNext = () => {
    if (selected === current.correctAnswer) setScore((s) => s + 1);

    if (index === quizData.length - 1) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-layout">
        {/* LEFT */}
        <div className="quiz-left">
          {!done ? (
            <>
              <h1>Question {index + 1}</h1>

              <div className="question-box">
                {/* nếu muốn dòng mô tả nhỏ như hình mẫu */}
                <p className="question-text">{current.question}</p>

                <Question
                  data={current}
                  selected={selected}
                  onSelect={setSelected}
                />

                <button className="btn-next" onClick={handleNext} disabled={!selected}>
                  Next
                </button>
              </div>
            </>
          ) : null}
        </div>

        {/* RIGHT */}
        <div className="quiz-right">
          {done ? (
            <>
              <h1 className="quiz-completed">Quiz Completed!</h1>
              <p className="quiz-score">Your score: {score}</p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}