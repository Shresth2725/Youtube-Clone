import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RemoveMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router-dom';
import WatchVideo from './WatchVideo';
import CommentsVideo from './CommentsVideo';
import VideoDiscription from './VideoDiscription';
import VideoSugesstion from './VideoSugesstion';

const WatchPage = () => {
  const [searchParams] = useSearchParams();  
  const videoId = searchParams.get("v");     
  console.log(videoId) ;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RemoveMenu());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Video Section (Video + Description + Comments) */}
        <div className="col-span-3">
          <div className="video-container mb-6">
            <WatchVideo id={videoId} />
          </div>
          <div className="video-description mb-6">
            <VideoDiscription id={videoId} />
          </div>
          <div className="comments-section mb-6">
            <CommentsVideo id={videoId} />
          </div>
        </div>

        {/* Suggested Videos Section on the right side */}
        <div className="col-span-1">
          <div className="suggestions-section">
            <VideoSugesstion id={videoId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
