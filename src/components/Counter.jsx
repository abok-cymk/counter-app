import { ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";
import { useState } from "react";
import StepSelector from "./StepSelector";

const Counter = ({ count, onCountChange }) => {
    const [stepSize, setStepSize] = useState(1);

    // Handle increment/decrement/reset
    const handleIncrement = () => {
        onCountChange(count + stepSize);
    }

    const handleDecrement = () => {
        onCountChange(count - stepSize);
    }

    const handleReset = () => {
        onCountChange(0);
    }

    // Dynamically change background color based on count
    let bgColor = "bg-gray-800";
    if (count > 0) {
        bgColor = "bg-green-600";
    } else if (count < 0) {
        bgColor = "bg-red-600";
    }
  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`p-4 rounded-lg text-4xl font-bold ${bgColor}`}>
        {count}
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleDecrement}
          className="bg-gray-700 hover:bg-gray-600 p-2 rounded-l"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-700 hover:bg-gray-600 p-2 rounded-l"
        >
          <RefreshCw size={24} />
        </button>
        <button
          onClick={handleIncrement}
          className="bg-gray-700 hover:bg-gray-600 p-2 rounded-l"
        >
          <ArrowRight size={24} />
        </button>
      </div>
      <StepSelector value={stepSize} onChange={setStepSize} />
    </div>
  );
}

export default Counter;
