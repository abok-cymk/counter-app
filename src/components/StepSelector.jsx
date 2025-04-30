const StepSelector = ({ value, onChange }) => {
  return (
    <div className="flex gap-2 mt-2 items-center bg-stone-200 px-4 py-1 rounded-lg">
      <span className="text-sm text-gray-900">Step size:</span>
      <button
        onClick={() => onChange(1)}
        className={`px-2 py-1 rounded-md ${
          value === 1 ? "bg-stone-950 text-white" : "bg-gray-600"
        }`}
      >
        1
      </button>
      <button
        onClick={() => onChange(5)}
        className={`px-2 py-1 rounded-md ${
          value === 5 ? "bg-stone-950 text-white" : "bg-gray-600"
        }`}
      >
        5
      </button>
      <button
        onClick={() => onChange(10)}
        className={`px-2 py-1 rounded-md ${
          value === 10 ? "bg-stone-950 text-white" : "bg-gray-600"
        }`}
      >
        10
      </button>
    </div>
  );
}

export default StepSelector;
