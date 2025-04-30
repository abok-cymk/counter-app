# React + Vite

Counter App using React, following best practices with useState, useEffect, and props. The application uses Tailwind CSS for styling and Lucide React icons for visual elements. The code is clean, modular, and reusable.

![](/public/Screenshot_30-4-2025_21933_localhost.jpeg)

## Sample Code

```
import React from "react";

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
```
