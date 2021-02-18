window.addEventListener("keydown", (event) => {
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  if (!audio) return;

  audio.currentTime = 0; //rewind to the start;
  audio.play();

  let key = document.querySelector(`.key[data-key='${event.keyCode}']`);
  key.classList.add("playing");
});

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
