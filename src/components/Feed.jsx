import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { fetchFromAPI } from '../utils/fetch-from-api'
import Sidebar from './Sidebar'
import Videos  from './Videos'

function Feed() {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const data = fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      console.log(data.items)
      setVideos(data.items)
    })
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setselectedCategory}
        />

        <Typography className='copyright' variant='body2' sx={{ mt: "1.5", color: '#fff' }}>
          Copyright 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{
        overflowY: 'auto', height: '90vh',
        flex: 2
      }}>
        <Typography variant='h4'
          fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>
            Videos
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed