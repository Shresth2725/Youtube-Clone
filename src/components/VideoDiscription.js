import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_KEY } from '../utils/Links';

const VideoDescription = ({ id }) => {
  const [info, setInfo] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (id) loadVideoAPI();
  }, [id]);

  const loadVideoAPI = async () => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${YOUTUBE_API_KEY}`
      );
      const json = await res.json();
      // console.log(json);
      setInfo(json.items[0]);
    } catch (err) {
      console.error(err);
    }
  };

  if (!info) return <div className="p-4 text-gray-600">Loading...</div>;

  const { snippet, statistics } = info;

  return (
    <div className="bg-white p-4 rounded-lg shadow border w-full">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-3 text-gray-900">{snippet.title}</h1>

      {/* Channel and Subscribe */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={`https://ui-avatars.com/api/?name=${snippet.channelTitle}`}
            alt="channel"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center gap-1 font-medium text-gray-800">
              {snippet.channelTitle}
              <span title="Verified">✔️</span>
            </div>
            <p className="text-sm text-gray-500">1.89M subscribers</p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800">
          Subscribe
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-1 px-4 py-2 rounded-full border text-sm font-medium ${
            liked ? 'bg-blue-100 border-blue-400 text-blue-700' : 'hover:bg-gray-100'
          }`}
        >
          👍 {liked ? (statistics.likeCount)/1000 : statistics.likeCount/1000}K
        </button>
        <button className="flex items-center gap-1 px-4 py-2 rounded-full border text-sm font-medium hover:bg-gray-100">
          👎
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${id}`)}
          className="flex items-center gap-1 px-4 py-2 rounded-full border text-sm font-medium hover:bg-gray-100"
        >
          🔗 Share
        </button>
        <button className="flex items-center gap-1 px-4 py-2 rounded-full border text-sm font-medium hover:bg-gray-100">
          ⬇️ Download
        </button>
        <button className="flex items-center gap-1 px-3 py-2 rounded-full border text-sm font-medium hover:bg-gray-100">
          ⋯
        </button>
      </div>

      {/* Stats */}
      <p className="text-sm text-gray-700 mb-2">
        {Number(statistics.viewCount).toLocaleString()} views •{' '}
        {new Date(snippet.publishedAt).toLocaleDateString()}
      </p>

      {/* Description */}
      <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-800">
        <div
          className="cursor-pointer font-medium flex justify-between items-center"
          onClick={() => setShowFullDesc(!showFullDesc)}
        >
          <span>{showFullDesc ? 'Hide' : 'Show'} description</span>
          <span>{showFullDesc ? '▲' : '▼'}</span>
        </div>
        {showFullDesc && (
          <div className="mt-2 whitespace-pre-line">
            {snippet.description.split('\n').map((line, i) =>
              line.includes('http') ? (
                <a
                  key={i}
                  href={line.match(/https?:\/\/[^\s]+/g)?.[0]}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {line}
                </a>
              ) : (
                <p key={i}>{line}</p>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDescription;
