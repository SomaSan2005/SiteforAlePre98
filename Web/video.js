gapi.load('client', function () {
  gapi.client.init({
    apiKey: '719676330615-9ka7a0s9d0mjlj59qapap0nn3scqhiag.apps.googleusercontent.com'
  }).then(function () {
    return gapi.client.request({
      path: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        channelId: 'IL_TUO_ID_CANALE_YOUTUBE',
        maxResults: 10,
        order: 'date',
        type: 'video',
        key: '719676330615-9ka7a0s9d0mjlj59qapap0nn3scqhiag.apps.googleusercontent.com'
      }
    });
  }).then(function (response) {
    var videoList = document.getElementById('video-list');
    var videos = response.result.items;
    if (videos) {
      videos.forEach(function (video) {
        var videoWrapper = document.createElement('div');
        videoWrapper.className = 'video';
        var videoLink = document.createElement('a');
        videoLink.href = 'https://www.youtube.com/watch?v=' + video.id.videoId;
        videoLink.target = '_blank';
        var videoThumbnail = document.createElement('img');
        videoThumbnail.src = video.snippet.thumbnails.maxres.url;
        videoThumbnail.alt = video.snippet.title;
        var videoTitle = document.createElement('h2');
        videoTitle.textContent = video.snippet.title;
        videoLink.appendChild(videoThumbnail);
        videoLink.appendChild(videoTitle);
        videoWrapper.appendChild(videoLink);
        videoList.appendChild(videoWrapper);
      });
    }
  }, function (reason) {
    console.log('Errore:', reason.result.error.message);
  });
});