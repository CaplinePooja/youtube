import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {Videos, ChanneCard} from './';
import { fetchFromAPI } from '../utils/fetch-from-api';

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] =useState(null)
  const [videos, setVideos] = useState([])
  
  const {id} =useParams();

  console.log(ChannelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelID=${id}&part=snippet&order=data`)
    .then((data) => setVideos(data?.items));
  },[id])

  return (
    <div>{id}</div>
  )
}

export default ChannelDetail