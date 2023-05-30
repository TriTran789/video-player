import './App.css';
import Menu from './Menu'
import Video from './Video'
import {useState} from 'react'

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

const videoNames = Object.keys(videos)

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos.spider)

  function onSelectVideo(video) {
    const videosrc = videos[video]
    setSelectedVideo(videosrc)
  }

  return (
    <div className="App">
      <main className='main'>
        <h1 className='project-name'>Project 6: Video Player</h1>
        <Menu videoNames={videoNames} onSelectVideo={onSelectVideo} />
        <Video selectedVideo={selectedVideo} />
      </main>
    </div>
  );
}

export default App;
