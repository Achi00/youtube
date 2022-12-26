import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactPlayer from 'react-player'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl} from "../utils/constants"
import '../App.css'

const VideoCard = ({ video: { id: {videoId}, snippet, contentDetails, statistics } }) => {
  return (
    <Card
    className="hover" sx={{ width: { xs: '100%', sm:'358px', md: '320px' }, boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
            alt={snippet?.title}
            sx={{width: {
              xs: '100%', sm: '358px', md: '320px'
            }, height: 180}}
            image={snippet?.thumbnails?.high?.url}/>
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: 106}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="white">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold" color="white">
            {snippet?.publishTime}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard