import React, { useState } from 'react';
import Card from './components/React/reusables/Card';
import DragAndDrop from './components/React/DragAndDrop';
import Navbar from './components/React/reusables/NavBar';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const openModal = (content: JSX.Element) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const components = [
    {
      title: 'Drag and Drop',
      description: 'Drag and Drop',
      component: <DragAndDrop />,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-neutral-100">
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>

        <div
          className="flex flex-wrap gap-6 justify-center mt-[30px] w-full m-[50px]"
          style={{ minHeight: 'calc(100vh - 200px)' }}
        >
          {components.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              onClick={() => openModal(item.component)}
            />
          ))}
        </div>

        {isModalOpen && (
          <div
            className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-70"
            onClick={closeModal}
          >
            <div
              className="overflow-auto relative p-6 w-full h-full bg-white rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full text-neutral-800 bg-neutral-200 hover:bg-neutral-300 hover:text-neutral-600 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex justify-center items-center">
                {modalContent}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
