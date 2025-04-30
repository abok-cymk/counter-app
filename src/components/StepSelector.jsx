const StepSelector = ({ value, onChange }) => {
  return (
    <div className="flex gap-2 mt-2">
      <span className="text-sm">Step size:</span>
      <button
        onClick={() => onChange(1)}
        className={`px-2 py-1 rounded-md ${
          value === 1 ? "bg-gray-700" : "bg-gray-600"
        }`}
      >
        1
      </button>
      <button
        onClick={() => onChange(5)}
        className={`px-2 py-1 rounded-md ${
          value === 5 ? "bg-gray-700" : "bg-gray-600"
        }`}
      >
        5
      </button>
      <button
        onClick={() => onChange(10)}
        className={`px-2 py-1 rounded-md ${
          value === 10 ? "bg-gray-700" : "bg-gray-600"
        }`}
      >
        10
      </button>
    </div>
  );
}

export default StepSelector;
