import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  },[id])
  
  
  if(!videoDetail?.snippet) return "loading...";
  
  
  
  const { snippet: { title, channelId, channelTitle, description, tags }, statistics: { viewCount, likeCount,commentCount }, contentDetails: { definition } } = videoDetail;
  
  
  var numberPattern = /\d+/g;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row'}}>
          <Box flex={1}>
            <Box p={4} sx={{ width: '80%', position: 'absolute'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls
              />
              <Typography color="#fff" variant="h5" p={2}>
                {title}
              </Typography>
              <Typography color="#fff" variant="h5" p={2} sx={{ opacity: 0.7, textTransform: 'uppercase'}}>
                {definition}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography fontWeight="bold" varient={{ sm: 'subtitle1', md: 'h5'}} color="#fff">
                      {channelTitle}
                      
                      <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>
                  <Typography p={5} varient={{ sm: 'subtitle1', md: 'h5'}} color="#3DA3FA">
                  {`#${tags}`}
                  </Typography>
                  <Typography p={5} varient={{ sm: 'subtitle1', md: 'h5'}} color="#fff">
                    {description}
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alighItems='center'>
                <Typography varient="body1" sx={{ opacity: 0.7}}>
                    {parseInt(commentCount).toLocaleString()} Comments
                  </Typography>
                  <Typography varient="body1" sx={{ opacity: 0.7}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography varient="body1" sx={{ opacity: 0.7}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
      <Box px={2} py={{md:1 , xs: 5}} justifyContent="center" alignItems="center">
        <Videos videos={videos} direction="column"/>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail