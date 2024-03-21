// execute program after DOM content loads...
document.addEventListener("DOMContentLoaded", function() {
  
  /* Audio playback */
  const audio = new Audio('./metadata/the-godfather-theme-song.mp3');
  audio.loop = true;
  audio.volume = 0.69;
  const playBtn = document.getElementById('play-music');
  const muteBtn = document.getElementById('mute-music');
  const unmuteBtn = document.getElementById('unmute-music');

  // show play button by default
  playBtn.style.display = 'block';
  muteBtn.style.display = 'none';
  unmuteBtn.style.display = 'none';

  // Play audio on play button click
  playBtn.addEventListener('click', function() {
    audio.play();
    playBtn.style.display = 'none';
    muteBtn.style.display = 'block';
  });

  // mute audio
  muteBtn.addEventListener('click', function() {
    audio.muted = true;
    muteBtn.style.display = 'none';
    unmuteBtn.style.display = 'block';
  });

  // unmute audio
  unmuteBtn.addEventListener('click', function() {
    audio.muted = false;
    muteBtn.style.display = 'block';
    unmuteBtn.style.display = 'none';
  });

  /* Card-switch b/w main-tokenomics */
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