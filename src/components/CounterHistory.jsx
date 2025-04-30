const CounterHistory = ({ history, onRestore }) => {
  return (
    <div className="flex items-center gap-2 bg-red-300 py-3 px-4 rounded-lg">
      <h2 className="text-xl font-bold text-gray-700">Counter History:</h2>
      <ul className="flex gap-2 overflow-x-auto whitespace-nowrap items-center">
        {history.map((value, index) => (
          <li
            key={index}
            className="bg-gray-700 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-600"
            onClick={() => onRestore(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CounterHistory;
