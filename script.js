function playVideo(videoSource) {
    const videoPlayer = document.getElementById('main-video');
    videoPlayer.src = videoSource;
    videoPlayer.play();
}
