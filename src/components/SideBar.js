import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-64 h-screen bg-white shadow-lg text-sm border-r border-gray-200">
      <div className="mt-4 flex flex-col max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        
        {/* Section 1 */}
        <ul className="space-y-1 px-2">
            <Link to={"/"}>
              <li
                className="py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
              >
                Home
              </li>
            </Link>
          {['Shorts', 'Subscription'].map((item) => (
            <li
              key={item}
              className="py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        <hr className="my-4 border-gray-200" />

        {/* Section 2 */}
        <h1 className="text-gray-600 font-medium mb-1 px-4">You</h1>
        <ul className="space-y-1 px-2">
          {['History', 'Playlist', 'Your Videos', 'Watch Later'].map((item) => (
            <li
              key={item}
              className="py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        <hr className="my-4 border-gray-200" />

        {/* Section 3 */}
        <h1 className="text-gray-600 font-medium mb-1 px-4">Subscriptions</h1>
        <ul className="space-y-1 px-2">
          {['Music', 'Sports', 'Gaming', 'Movies'].map((item) => (
            <li
              key={item}
              className="py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        <hr className="my-4 border-gray-200" />

        {/* Section 4 */}
        <h1 className="text-gray-600 font-medium mb-1 px-4">Explore</h1>
        <ul className="space-y-1 px-2 mb-4">
          {['Trending', 'Shopping', 'Live', 'News', 'Learning', 'Fashion & Beauty'].map((item) => (
            <li
              key={item}
              className="py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
