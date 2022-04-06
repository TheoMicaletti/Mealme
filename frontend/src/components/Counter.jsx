import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <p>
      <button
        type="button"
        onClick={() => setCount((oldCount) => oldCount + 1)}
        className="border-4 border-indigo-600/100 rounded-3xl my-6 px-8 py-2 bg-rose-100 text-indigo-900 align-middle"
      >
        Count is : {count}
      </button>
    </p>
  );
}
