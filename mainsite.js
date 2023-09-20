const portraitImg = document.querySelector('.portraits-container img');
const portraitPaths = ["Portraits/cutevieradoodle.png", "/Portraits/icanexplain.png", "/Portraits/miqofaces.png"];
const changePortraitBtn = document.getElementById("changePortraitBtn");
let currentPortraitIndex = 0;


const music = ["Music/Persona 5 - Beneath The Mask (Rain).mp3", "Music/Gil Scott-Heron & Brian Jackson - Corners (320 kbps).mp3"];
const pauseBtn = document.getElementById("pauseButton");
let currentSongIndex = 0;


changePortraitBtn.addEventListener('click', () => {
    currentPortraitIndex++;
    if(currentPortraitIndex >= portraitPaths.length) {
        currentPortraitIndex =0;
        console.log("yooo");
    }
    portraitImg.src = portraitPaths[currentPortraitIndex];
});

