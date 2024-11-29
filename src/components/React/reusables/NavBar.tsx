import React from 'react';

const Navbar: React.FC = () => {
  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200">
      <button
        onClick={navigateToHome}
        className="px-4 py-2 text-sm font-semibold rounded-md text-neutral-700 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
      >
        Menu
      </button>

      <div className="mx-auto text-2xl font-bold text-blue-800">React</div>

      <a
        href="https://github.com/j-casimiro"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 items-center text-sm font-medium underline transition-colors text-neutral-500 hover:text-black"
      >
        <img
          className="w-6 h-6 transition-colors group-hover:text-neutral-700"
          src="/github.svg"
          alt="GitHub Logo"
        />
        @j-casimiro
      </a>
    </nav>
  );
};

export default Navbar;
