import { useState } from "react";
import Counter from "./components/Counter";
import CounterHistory from "./components/CounterHistory";

const App = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);

  // Finction to update count and history
  const updateCount = (newCount) => {
    setCount(newCount);

    // Update history with the new count
    setHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, newCount];
      return updatedHistory.slice(-5); // Keep only the last 5 values
    });
  };

  // Function to restore a count from history
  const restoreCount = (restoredCount) => {
    setCount(restoredCount);
  }
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Counter App</h1>
      <Counter count={count} onCountChange={updateCount}/>
      <CounterHistory history={history} onRestore={restoreCount}/>
    </div>
  );
}

export default App;
