import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback, errorCB = null) => {
  // TODO
  var url = "https://app-hrsei-api.herokuapp.com/api/recastly/videos";


  // $.ajax({
  //   url: url,
  //   type: 'GET',
  //   data: {query: query},
  //   contentType: 'application/json',
  //   success: (data) => {
  //     console.log(data);
  //     callback(data);
  //   },
  //   error: errorCB || function(error) {
  //     console.error('Failed to fetch videos', error);
  //   }


  // });


};

export default searchYouTube;
