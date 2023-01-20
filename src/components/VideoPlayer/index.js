import ReactPlayer from 'react-player'
import './index.css'

const videoUrl = 'https://youtu.be/YE7VzlLtp-4'
const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url={videoUrl} />
    </div>
  </div>
)

export default VideoPlayer
