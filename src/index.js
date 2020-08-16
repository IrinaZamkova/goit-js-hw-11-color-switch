import './styles.css';

const refs = {
  bodyRef: document.querySelector('body'),
  startRef: document.querySelector('button[data-action="start"]'),
  stopRef: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const colorSwich = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      refs.bodyRef.style.background =
        colors[Math.floor(Math.random() * colors.length)];
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startRef.addEventListener(`click`, colorSwich.start.bind(colorSwich));
refs.stopRef.addEventListener(`click`, colorSwich.stop.bind(colorSwich));
