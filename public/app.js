const progress = document.querySelector(".progress");
const song = document.querySelector(".song");
const ctrlIcon = document.querySelector(".ctrlIcon");
const forwardIcon = document.querySelector(".forwardIcon");
const sourceSong = document.querySelector(".sourceSong");
const songImage = document.querySelector(".song-image");
const songName = document.querySelector(".song-name");
const singer = document.querySelector(".singer");
const backwardIcon = document.querySelector(".backward-icon");

song.onloadedmetadate = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

forwardIcon.addEventListener("click", () => {
  sourceSong.src = "music/NEFFEX_-_Fight_Back_[Official_Video]_No.37(256k).mp3";
  song.load();
  song.play();
  songImage.src = "images/musicImage2.jpg";
  songName.textContent = "Fight Back";
  singer.textContent = "Neffex";
});

backwardIcon.addEventListener("click", () => {
  sourceSong.src =
    "music/NEFFEX_x_NCS_-_DESPERATE_⛓__Copyright-Free__No.203(256k).mp3";
  song.load();
  song.play();
  songImage.src = "images/musicImage.jpg";
  songName.textContent = "Desperate";
  singer.textContent = "Neffex ft. NCS";
});
