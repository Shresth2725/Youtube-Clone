import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/Links'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddMenu } from '../utils/AppSlice'

const VideoContainer = () => {

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
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video, index) => (
        <Link to={"/watch?v=" + video.id} key={index} ><VideoCards info={video} /></Link>
      ))}
    </div>
  )
}

export default VideoContainer
