import React from 'react';

const VideoCards = ({ info }) => {
  // console.log(info);
  
  if (!info || !info.snippet || !info.snippet.thumbnails) {
    return <div className="text-gray-500 text-center">Loading...</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount, likeCount } = statistics;

  const formatNumber = (num) =>
    new Intl.NumberFormat('en', { notation: 'compact' }).format(num);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200 w-full max-w-sm">
      <img
        className="w-full h-48 object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="p-4">
        <h3
          className="text-md font-semibold line-clamp-2"
          title={title}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{channelTitle}</p>
        <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
          <span>{formatNumber(viewCount)} views</span>
          <span>{formatNumber(likeCount)} likes</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
