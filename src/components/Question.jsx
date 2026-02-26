//lay data tu quizData va hien thi cau hoi va cac lua chon

export default function Question({ data, selected, onSelect }) {
  return (
    <div>
      <h2>{data.question}</h2>

      {data.options.map((opt) => (
        <label key={opt} style={{ display: "block", marginBottom: 8 }}>
          <input
            type="radio"
            name={`q-${data.id}`}
            checked={selected === opt}
            onChange={() => onSelect(opt)}
          />
          {" "}{opt}
        </label>
      ))}
    </div>
  );
}