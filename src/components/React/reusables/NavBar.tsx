import React from 'react';

const Navbar: React.FC = () => {
  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <nav className="border-b shadow-lg  bg-neutral-800 dark:border-neutral-700">
      <div className="p-3 px-7 w-full md:flex md:items-center md:justify-between">
        <button
          onClick={navigateToHome}
          className="py-2 text-sm font-semibold text-neutral-300 hover:text-neutral-50"
        >
          MENU
        </button>

        <div className="text-2xl font-bold text-blue-400">React</div>

        <a
          href="https://github.com/j-casimiro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-sm font-medium transition-colors text-neutral-300 sm:mt-0 hover:text-white"
        >
          @j-casimiro
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
