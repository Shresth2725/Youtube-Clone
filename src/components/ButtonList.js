import React, { useRef } from 'react';
import Button from './Button';

const ButtonList = () => {
  const list = [
    "All", "Live", "Gaming", "Songs", "Cricket", "Soccer", "Cooking", "Valentines",
    "News", "Podcasts", "Movies", "Trailers", "Comedy", "Science", "Technology",
    "DIY", "Vlogs", "Education", "Fitness", "Beauty", "Travel", "Art", "History",
    "Documentary", "Kids", "Motivation", "Finance", "Stocks", "Coding", "Space",
    "Animals", "Nature", "Photography", "Short Films", "Drama", "Action", "Horror",
    "K-pop", "Anime", "Fashion", "TikTok", "Reviews", "ASMR", "Instrumental"
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex items-center bg-white py-2 px-2">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 z-20 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        onClick={() => scroll('left')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" transform="rotate(180 10 10)" />
        </svg>
      </button>

      {/* Scrollable Button List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-3 mx-8"
      >
        {list.map((e, index) => (
          <Button key={index} name={e} />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 z-20 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        onClick={() => scroll('right')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.707 4.293a1 1 0 010 1.414L4.414 9H16a1 1 0 110 2H4.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonList;
