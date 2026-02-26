import { useState } from "react";
import { quizData } from "../data/quizData";
import Question from "../components/Question";
import "./Quiz.css";

export default function Quiz() {
  // 1) index: lưu vị trí câu hỏi hiện tại (0,1,2,...)
  const [index, setIndex] = useState(0);

  // 2) selected: lưu đáp án người dùng đang chọn (ban đầu chưa chọn)
  const [selected, setSelected] = useState(null);

  // 3) score: lưu điểm hiện tại (mỗi câu đúng +1)
  const [score, setScore] = useState(0);

  // 4) done: kiểm tra đã làm xong hết quiz chưa
  const [done, setDone] = useState(false);

  // 5) current: lấy câu hỏi hiện tại từ quizData theo index
  const current = quizData[index];

  // 6) handleNext: xử lý khi bấm nút Next
  const handleNext = () => {
    // 6.1) Nếu đáp án đang chọn đúng → tăng điểm
    if (selected === current.correctAnswer) setScore((s) => s + 1);

    // 6.2) Nếu đang ở câu cuối → kết thúc quiz
    if (index === quizData.length - 1) {
      setDone(true);
    } else {
      // 6.3) Nếu chưa phải câu cuối → chuyển sang câu tiếp theo
      setIndex((i) => i + 1);

      // 6.4) Reset lựa chọn cho câu mới
      setSelected(null);
    }
  };

  return (
    // 7) quiz-page: wrapper ngoài cùng của trang quiz
    <div className="quiz-page">
      {/* 8) quiz-layout: layout 2 cột (trái câu hỏi, phải kết quả) */}
      <div className="quiz-layout">
        
        {/* 9) LEFT: khu vực câu hỏi */}
        <div className="quiz-left">
          {/* 10) Nếu chưa done → hiển thị câu hỏi */}
          {!done ? (
            <>
              {/* 11) Hiển thị số thứ tự câu hỏi (index + 1 vì index bắt đầu từ 0) */}
              <h1>Question {index + 1}</h1>

              {/* 12) Box chứa nội dung câu hỏi + options + nút Next */}
              <div className="question-box">
                
                {/* 13) Hiển thị nội dung câu hỏi */}
                <p className="question-text">{current.question}</p>

                {/* 14) Component Question: render danh sách đáp án
                      - data: câu hiện tại
                      - selected: đáp án đang chọn
                      - onSelect: hàm setSelected để cập nhật lựa chọn */}
                <Question
                  data={current}
                  selected={selected}
                  onSelect={setSelected}
                />

                {/* 15) Nút Next:
                      - gọi handleNext khi bấm
                      - disable khi chưa chọn đáp án */}
                <button
                  className="btn-next"
                  onClick={handleNext}
                  disabled={selected === null}
                >
                  Next
                </button>
              </div>
            </>
          ) : null}
        </div>

        {/* 16) RIGHT: khu vực kết quả */}
        <div className="quiz-right">
          {/* 17) Nếu done → hiển thị kết quả */}
          {done ? (
            <>
              {/* 18) Thông báo hoàn thành */}
              <h1 className="quiz-completed">Quiz Completed!</h1>

              {/* 19) Hiển thị điểm */}
              <p className="quiz-score">Your score: {score}</p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}