const CounterHistory = ({ history, onRestore }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mt-4">Counter History:</h2>
      <ul className="flex gap-2 overflow-x-auto whitespace-nowrap">
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
