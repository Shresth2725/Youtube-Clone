import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_KEY } from '../utils/Links';

const CommentsVideo = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);  // New loading state
  const [error, setError] = useState(null);  // New error state

  useEffect(() => {
    if (id) {
      LoadVideoAPI();
    }
  }, [id]);

  const LoadVideoAPI = async () => {
    setLoading(true);  // Set loading true when starting the request
    setError(null);    // Reset error if any new request happens

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${YOUTUBE_API_KEY}`
      );
      const json = await response.json();
      console.log(json);

      if (json?.items) {
        const topComments = json.items.map(
          (item) => item.snippet.topLevelComment.snippet
        );
        setComments(topComments);
      } else {
        setComments([]);  // If no comments, set empty array
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError('Error fetching comments');  // Set error message
    } finally {
      setLoading(false);  // Set loading to false once request is complete
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        {loading ? 'Loading comments...' : `${comments.length} Comments`}
      </h3>
      {loading ? (
        <p className="text-gray-500">Loading comments...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>  // Display error if present
      ) : comments.length === 0 ? (
        <p className="text-gray-500">No comments found.</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className="flex gap-4 mb-6">
            {/* Avatar */}
            <img
              src={comment.authorProfileImageUrl}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />

            {/* Comment Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-800">
                  {comment.authorDisplayName}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(comment.publishedAt).toLocaleDateString()}
                </span>
              </div>
              <p
                className="text-sm text-gray-800"
                dangerouslySetInnerHTML={{ __html: comment.textDisplay }}
              />

              {/* Like/Dislike (UI only) */}
              <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
                <button className="hover:text-black">👍 {comment.likeCount}</button>
                <button className="hover:text-black">👎</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentsVideo;
