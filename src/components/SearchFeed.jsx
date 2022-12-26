import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    // <Stack sx={{flexDirection: { sx:'column', md: 'row'}}}>
    //   <Box sx={{height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
    // <Sidebar 
    // selectedCategory={selectedCategory}
    // setSelectedCategory={setSelectedCategory}/>
    // <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: 'white'}}>
    //   Copyright 2022 Youtube
    // </Typography>
    //   </Box>
      
    // </Stack>
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed