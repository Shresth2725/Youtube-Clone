import React from 'react';

const SearchVideo = ({ info }) => {
  // console.log(info);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col space-y-6">
        <div
          key={info.id.videoId}
          className="flex flex-col sm:flex-row items-start gap-4 bg-white shadow-sm hover:shadow-md rounded-lg p-3 transition-all duration-200"
        >
          <img
            src={info.snippet.thumbnails.high.url}
            alt={info.snippet.title}
            className="w-full sm:w-60 h-36 object-cover rounded-lg"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-red-600 line-clamp-2">
              {info.snippet.title}
            </h3>
            <p className="text-sm text-gray-700">{info.snippet.channelTitle}</p>
            <p className="text-xs text-gray-500">
              {new Date(info.snippet.publishedAt).toLocaleDateString()} • 100K views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVideo;
