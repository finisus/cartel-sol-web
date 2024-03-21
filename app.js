// execute program after DOM content loads...
document.addEventListener("DOMContentLoaded", function() {

  /* music widget logic */
  const musicWidget = document.getElementById('music-widget');
  const playButton = document.getElementById('unmute-music');
  const pauseButton = document.getElementById('mute-music');
  const audio = document.getElementById('song');
  
  let isPlaying = true;

  // function to toggle play/pause
  function togglePlay() {
    if (isPlaying) {
      audio.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
    } else {
      audio.pause();
      playButton.style.display = 'block';
      pauseButton.style.display = 'none';
    }
    isPlaying = !isPlaying;
  }
  
  // toggle play/pause when music widget is clicked
  musicWidget.addEventListener('click', togglePlay);
  
  // handle when song ends
  audio.onended = function() {
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
    isPlaying = false;
  };

  // start music on page load
  musicWidget.click();

  /* card-switch b/w main-tokenomics */
  const mainCard = document.getElementById('main');
  const tokenomics = document.getElementById('tokenomics');
  const switchCard = document.getElementById('switch-card');
  tokenomics.style.display = 'none'; // hide initially
  switchCard.textContent = 'Tokenomics'; // Initial text
  switchCard.addEventListener('click', function() {
    mainCard.style.display = mainCard.style.display === 'none' ? 'flex' : 'none';
    tokenomics.style.display = tokenomics.style.display === 'none' ? 'flex' : 'none';
    switchCard.textContent = tokenomics.style.display === 'none' ? 'Tokenomics' : 'Go back';
  });


});
