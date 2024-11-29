import React from 'react';

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
  return (
    <div className="flex relative flex-col p-6 w-64 h-64 bg-white rounded-lg border shadow-md transition border-neutral-200 group hover:shadow-lg">
      <div className="flex flex-col flex-grow">
        <h2 className="pb-5 text-lg font-medium text-gray-800 group-hover:text-neutral-900">
          {title}
        </h2>
        <p className="text-sm text-neutral-600 group-hover:text-neutral-700">
          {description}
        </p>
      </div>

      <button
        onClick={onClick}
        className="inline-flex justify-center items-center px-6 py-2 mt-4 text-sm font-medium text-white bg-blue-800 rounded-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
      >
        View Component
      </button>
    </div>
  );
};

export default Card;
