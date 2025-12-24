import lottieWeb from 'https://cdn.skypack.dev/lottie-web';
const audioPlayerContainer = document.getElementById("audio-player-container");
const playIconContainer = document.getElementById('play-icon');
let state = 'play';

console.log("Script connected!");
const animation = lottieWeb.loadAnimation({
    container: playIconContainer,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Demo Animation",
});

animation.goToAndStop(14, true);

// adds an event listener to the button so that when it is clicked, the the player toggles between play and pause


const audio = document.querySelector('audio');
const durationContainer = document.getElementById('duration');
const bufferedAmount = audio?.buffered.end(audio.buffered.length - 1);
const seekableAmount = audio?.seekable.end(audio.seekable.length - 1);
const currentTimeContainer = document.getElementById('current-time');
const seekSlider = document.getElementById('seek-slider');

seekSlider.addEventListener('input', () => {
  currentTimeContainer.textContent = calculateTime(seekSlider.value);
  if(!audio.paused){
    cancelAnimationFrame(rAF);
  }
});



const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
  durationContainer.textContent = calculateTime(audio.duration);
}

if (audio.readyState > 0) {
  displayDuration();
} else {
  audio.addEventListener('loadedmetadata', () => {
    displayDuration();
  });
}


const setSliderMax = () => {
  seekSlider.max = Math.floor(audio.duration);
}

if (audio.readyState > 0) {
  displayDuration();
  setSliderMax();
} else {
  audio.addEventListener('loadedmetadata', () => {
    displayDuration();
    setSliderMax();
  });
}

let rAF = null;

const whilePlaying = ()=>{
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
    rAF = requestAnimationFrame(whilePlaying);
}

playIconContainer.addEventListener('click', () => {
  if(state === 'play') {
    audio.play();
    animation.playSegments([14, 27], true);
    state = 'pause';
  } else {
    audio.pause();
    animation.playSegments([0, 14], true);
    state = 'play';
  }
});

seekSlider.addEventListener('change', () => {
  audio.currentTime = seekSlider.value;
  if(!audio.paused){
    requestAnimationFrame(whilePlaying);
  }
});

audio.addEventListener('timeupdate', () => {
  seekSlider.value = Math.floor(audio.currentTime);
  currentTimeContainer.textContent = calculateTime(audio.currentTime);
});