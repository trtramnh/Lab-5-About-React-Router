import { useMemo, useState } from "react";
import { quizData } from "../data/quizData";
import Question from "../components/Question";
import "./Quiz.css";

export default function Quiz() {
  // 1 State index: lưu index câu hỏi hiện tại
  const [index, setIndex] = useState(0);
  //2 State answers: lưu câu trả lời của người dùng
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  //3 State done: lưu trạng thái đã hoàn thành quiz chưa
  const [done, setDone] = useState(false);
// Lấy câu hỏi hiện tại và câu trả lời đã chọn
  const current = quizData[index];
  // Lấy câu trả lời đã chọn cho câu hỏi hiện tại
  const selected = answers[index];
// Hàm xử lý khi người dùng chọn câu trả lời
  const handleSelect = (value) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };
// Hàm xử lý khi người dùng nhấn nút Previous
  const handlePrevious = () => {
    if (index > 0) setIndex((i) => i - 1);
  };
// Hàm xử lý khi người dùng nhấn nút Next
  const handleNext = () => {
    if (selected === null) return;

    if (index === quizData.length - 1) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
    }
  };
// Tính điểm số dựa trên câu trả lời của người dùng và đáp án đúng
  const score = useMemo(() => {
    return answers.reduce((total, answer, i) => {
      return total + (answer === quizData[i].correctAnswer ? 1 : 0);
    }, 0);
  }, [answers]);

  return (
    <div className="quiz-page">
      <div className="quiz-layout">
        <div className="quiz-left">
          {!done ? (
            <>
              <h1>Question {index + 1}</h1>

              <div className="question-box">
                <p className="question-text">{current.question}</p>

                <Question
                  data={current}
                  selected={selected}
                  onSelect={handleSelect}
                />

                <button
                  className="btn-previous"
                  onClick={handlePrevious}
                  disabled={index === 0}
                >
                  Previous
                </button>

                <button
                  className="btn-next"
                  onClick={handleNext}
                  disabled={selected === null}
                >
                  {index === quizData.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </>
          ) : null}
        </div>

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