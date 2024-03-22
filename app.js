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
  
  
  /* COMMENT TO UNSHOW */
  landingPage.style.display = 'flex';
  /* landingPage.style.display = 'none'; */

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

  /* Hyperlinks */
  const twitterBtn = document.getElementById('twitter-button');
  twitterBtn.addEventListener('click', function() {
    window.open('https://x.com/finisusdoteth', '_blank');
  });

  const telegramBtn = document.getElementById('telegram-button');
  telegramBtn.addEventListener('click', function() {
    window.open('https://t.me/', '_blank');
  });

  const chartBtn = document.getElementById('chart-button');
  chartBtn.addEventListener('click', function() {
    window.open('https://dexscreener.com/solana/', '_blank');
  });

  const buyBtn = document.getElementById('buy-button');
  buyBtn.addEventListener('click', function() {
    window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=', '_blank');
  });

  /* Copy button logic */

});