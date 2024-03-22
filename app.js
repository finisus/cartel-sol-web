// execute program after DOM content loads...
document.addEventListener("DOMContentLoaded", function() {
  
  /* Audio playback */
  const audio = new Audio('./metadata/the-godfather-theme-song.mp3');
  audio.loop = true;
  audio.volume = 0.69;
  const muteBtn = document.getElementById('mute-music');
  const unmuteBtn = document.getElementById('unmute-music');

  // show mute button by default
  muteBtn.style.display = 'block';
  unmuteBtn.style.display = 'none';

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

  // ensure audio playback on user interaction
  document.addEventListener('click', function() {
    audio.play().catch(error => {
      console.log("Autoplay was prevented. Please interact with the page to play audio.");
    });
  });

  // ensure audio playback on user interaction (click or touch)
  const interactionEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
  document.addEventListener(interactionEvent, function() {
    audio.play().catch(error => {
      console.log("Autoplay was prevented. Please interact with the page to play audio.");
    });
  });

  /* landing page */
  const landingPage = document.getElementById('landing-page');
  const closeLandingBtn = document.getElementById('close-landing-button');
  
  
  /* UNCOMMENT TO SHOW */
  /* landingPage.style.display = 'flex'; */
  landingPage.style.display = 'none';

  closeLandingBtn.addEventListener('click', function() {
    landingPage.style.display = 'none';
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


/*
Add a landing page 
  -landing page needs button to click to enter so that takes care of autoplay music
  -landing page should have a dark background elusive pepe that is shhh

for main page-
  -have two floating pictures 
  -one coming from left to right at the top
  -the other coming from right to left at the bottom
*/