//import statement for examplesvideo data.
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
const { useState, useEffect } = React;
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';


var App = () => {
//set state forvideos and current videos
//videos is the list of videos
//currentVideo is current video on video player
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  //state for search bar value
  const [currentSearch, setCurrentSearch] = useState('');
  //function handles "search"
  //sets currentVideo to target value
  var handleSearch = function(e, targetValue) {
    e.preventDefault();
    setCurrentSearch(targetValue);
  };

//renders and makes changes to the DOM based on changes of state/dependicies
//once state is changed it invokes the first callback function
//within this function it sets video andcurrent video to the data that is obtained from API call
  useEffect(() => {
    //setTimeout(() => {
    searchYouTube(currentSearch, (data) => {
      setVideos(data);
      setCurrentVideo(data[0]);
    });
    //}, 1000);
  }, [currentSearch]);

  //handles title click
  //passes down prop to child element
  var handleClick = function(e, video) {
    e.preventDefault();
    setCurrentVideo(video);
  };


//
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
