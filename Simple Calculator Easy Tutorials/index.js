const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const audio = new Audio();
    audio.src="click-button-140881.mp3";
    audio.play();
  });
});