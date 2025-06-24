import React from 'react';

const Button = ({ name }) => {
  return (
    <button className="px-4 py-2 m-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm whitespace-nowrap">
      {name}
    </button>
  );
};

export default Button;
