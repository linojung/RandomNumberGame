const theForm = document.querySelector("#game");
const generator = document.querySelector("#generateNo");
const playBtn = document.querySelector("#playBtn");
const guessor = document.querySelector("#guessNo");
const chosenNo = document.querySelector("#chosenNo");
const machineNo = document.querySelector("#machineNo");
const resultBox = document.querySelector("#result");
const result = resultBox.querySelector(".result__game");
const rtnFalse = document.querySelector("#false");
const restart = document.querySelector("#restart");
const HIDDEN_CLASS = "hidden";

generator.addEventListener("change", function (e) {
  guessor.setAttribute("max", e.target.value);
});

const handlePlay = {
  onSubmit: function (e) {
    e.preventDefault();
    let genVal = parseInt(generator.value);
    let gssVal = parseInt(guessor.value);
    if (genVal < gssVal) {
      rtnFalse.classList.remove(HIDDEN_CLASS);
      rtnFalse.innerText = `the number you guess should be between 0 to ${genVal}. Try Again`;
    } else {
      let mchnCho = Math.floor(Math.random() * (genVal + 1));
      chosenNo.innerText = gssVal;
      machineNo.innerText = mchnCho;
      rtnFalse.classList.add(HIDDEN_CLASS);
      resultBox.classList.remove(HIDDEN_CLASS);
      if (gssVal != mchnCho) {
        result.innerText = "You lose";
        result.classList.add("lose");
        result.classList.remove("win");
      } else {
        result.innerText = "You Win!";
        result.classList.add("win");
        result.classList.remove("lose");
        playBtn.innerText = "You've Won";
        playBtn.disabled = true;
        restart.classList.remove(HIDDEN_CLASS);
      }
    }
  },
  onReset: function (e) {
    theForm.reset();
    playBtn.innerText = "Play!";
    playBtn.disabled = false;
    restart.classList.add(HIDDEN_CLASS);
    resultBox.classList.add(HIDDEN_CLASS);
    guessor.setAttribute("max", "");
  },
};
theForm.addEventListener("submit", handlePlay.onSubmit);
theForm.addEventListener("reset", handlePlay.onReset);
