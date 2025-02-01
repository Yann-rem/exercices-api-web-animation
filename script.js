// Sélection des éléments HTML
const redBox = document.querySelector(".container1 .box");
const greenBox1 = document.querySelector(".container2 .box1");
const greenBox2 = document.querySelector(".container2 .box2");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");

// Variables de contrôle pour la direction des animations
let isRedBoxAtStart = false;
let isGreenBoxAtStart = false;

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

// Animation des boîtes vertes
const greenBox1Keyframes = [{ transform: "translateX(450px)" }];
const greenBox2Keyframes = [{ transform: "translateX(-450px)" }];
const greenBoxOptions = { duration: 1000, fill: "forwards", easing: "ease-in-out" };

const greenBoxesAnimation = [
  createAnimation(greenBox1, greenBox1Keyframes, greenBoxOptions),
  createAnimation(greenBox2, greenBox2Keyframes, greenBoxOptions),
];

button2.addEventListener("click", () => {
  const direction = isGreenBoxAtStart ? -1 : 1;

  greenBoxesAnimation.forEach((animation) => {
    if (animation.playState === "running") {
      animation.playbackRate = direction;
    } else {
      animation.playbackRate = direction;
      animation.play();
    }
  });

  isGreenBoxAtStart = !isGreenBoxAtStart;
});
