// Sélection des éléments HTML
const redBox = document.querySelector(".container1 .box");
const button1 = document.querySelector(".btn1");

// Variable de contrôle pour la direction de l'animation
let isRedBoxAtStart = false;

// Fonction pour créer une animation
const createAnimation = (element, keyframes, options) => {
  return new Animation(new KeyframeEffect(element, keyframes, options));
};

// Animation de la boîte rouge
const redBoxAnimation = new Animation(
  new KeyframeEffect(redBox, [{ transform: "translateX(450px)" }], {
    duration: 1000,
    fill: "forwards",
    easing: "ease-in-out",
  })
);

button1.addEventListener("click", async () => {
  const direction = isRedBoxAtStart ? -1 : 1;

  if (redBoxAnimation.playState === "running") {
    redBoxAnimation.playbackRate = direction;
  } else {
    redBoxAnimation.playbackRate = direction;
    redBoxAnimation.play();
  }

  isRedBoxAtStart = !isRedBoxAtStart;
});
