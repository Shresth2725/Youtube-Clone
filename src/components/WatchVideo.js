import React from 'react';

const WatchVideo = ({ id }) => {
  return (
    <div className="max-w-full bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-4 mx-auto my-4">
      <iframe
        width="100%"
        height="560" 
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  );
};

export default WatchVideo;
