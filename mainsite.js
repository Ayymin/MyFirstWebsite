const portraitImg = document.querySelector('.portraits-container img');
const changePortraitBtn = document.getElementById("changePortraitBtn")
const portraitPaths = ["Portraits/cutevieradoodle.png", "/Portraits/icanexplain.png", "/Portraits/miqofaces.png"];

let currentPortraitIndex = 0;

changePortraitBtn.addEventListener('click', () => {
    currentPortraitIndex++;
    if(currentPortraitIndex >= portraitPaths.length) {
        currentPortraitIndex =0;
        console.log("yooo")
    }
    portraitImg.src = portraitPaths[currentPortraitIndex];
});