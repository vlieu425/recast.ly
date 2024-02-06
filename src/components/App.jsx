//import statement for examplesvideo data.
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
const { useState, useEffect } = React;
import Search from './Search.js';
// import searchYouTube from '../lib/searchYouTube.js';

var App = () => {

  const [videos, setVideos] = useState(exampleVideoData);
  const [currentVideo, setCurrentVideo] = useState
  (exampleVideoData[0]);
  //state for search bar value
  const [currentSearch, setCurrentSearch] = useState();
  //function handles "search"
  var handleSearch = function(e, targetValue) {
    e.preventDefault();
    setCurrentSearch(targetValue);
    console.log(currentSearch);
  };

  // searchYouTube(currentSearch, (data) => {console.log(data)});


  var handleClick = function(e, video) {
    e.preventDefault();
    setCurrentVideo(video);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>Search</em><Search submitClick={handleSearch}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> <VideoPlayer video={currentVideo}/></h5></div>
        </div>
        <div className="col-md-5">
          <div>
            <h5><em>videoList</em>
              <VideoList videoClick={handleClick} videos={videos}/>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
