const screenInterval = 5000;

const screenMin = 1;
const screenMax = 2;
let screenCurrent = 1;

const screen = document.getElementById("screen");
screen.src = `assets/annai_app_screen_${screenCurrent}.jpg`;

const changeScreen = () => {
  screenCurrent++;
  if (screenCurrent > screenMax) {
    screenCurrent = screenMin;
  } 

  screen.src = `assets/annai_app_screen_${screenCurrent}.jpg`;
};

setInterval(changeScreen, screenInterval);
