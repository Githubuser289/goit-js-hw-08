import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');
var currentTime = 0;
console.log('savedTime=', savedTime);
if (savedTime > 0) {
  //if there is a savedTime then assign the value to the currentTime
  currentTime = savedTime;
}
player.setCurrentTime(currentTime);

player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(function (seconds) {
        currentTime = seconds;
      })
      .catch(function (error) {
        console.log(error + ' occurred');
      });
    localStorage.setItem('videoplayer-current-time', currentTime.toString());
  }, 1000)
);
