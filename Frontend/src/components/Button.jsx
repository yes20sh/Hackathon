import React from 'react';

function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
    >
      Click Me
    </button>
  );
}

export default Button;
