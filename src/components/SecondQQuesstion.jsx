import { useEffect, useState } from "react";

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);
  return debounce;
};

export const SecondQQuesstion = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000); //1000ms delay
  return (
    <div>
      <h2>Debounce Hook Tester</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something.."
        style={{ marginRight: "10px" }}
      />
      <p>Debounce Value :{debouncedText}</p>
    </div>
  );
};
