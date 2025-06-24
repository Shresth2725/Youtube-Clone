import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/Links'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddMenu } from '../utils/AppSlice'

const VideoSugesstion = () => {

  const dispatch = useDispatch() ; 
  useEffect(() => {
      dispatch(AddMenu());
    }, [dispatch]);

  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideo()
  }, [])

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()
    setVideos(json.items)
  }

  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-6 sm:ml-8 sm:w-[300px]">
      {videos.slice(0, 9).map((video, index) => (  // Limit to 9 videos
        <Link to={"/watch?v=" + video.id} key={index}>
          <div className="w-full bg-white shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105">
            <VideoCards key={video.id} info={video} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default VideoSugesstion
