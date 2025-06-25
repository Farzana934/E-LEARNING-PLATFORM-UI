document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('course-video');
  const progress = document.getElementById('progress');

  if (video && progress) {
    video.addEventListener('timeupdate', () => {
      const percent = (video.currentTime / video.duration) * 100;
      progress.value = percent;
    });
  }
});
