const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathText = document.querySelector(".breath-text");
let breathsLeft = 3;

//Observando las respiraciones seleccionadas por el usuario
numberOfBreaths.addEventListener("change", () => {
    breathsLeft = numberOfBreaths.value;
    breathText.innerText = breathsLeft;
});

//Grow/Shrink Circle
const growCircle = () => {
    circleProgress.classList.add("circle-grow");
    setTimeout(() => {
        circleProgress.classList.remove("circle-grow");
    }, 8000);
};

//Instrucciones para la respiracion
const breathTextUpdate = () => {
    breathsLeft--;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Breath in";
    setTimeout(() => {
        instructions.innerText = "Hold Breath";
        setTimeout(() => {
            instructions.innerText = "Exhale Breath Slowly";
        }, 4000);
    }, 4000);
};

//Breathing App Function
const breathingApp = () => {
    const breathingAnimtaion = setInterval(() => {
        if (breathsLeft === 0) {
            clearInterval(breathingAnimtaion);
            instructions.innerText = "Breathing session completed. Click Begin to Start another session";
            start.classList.remove("button-inactive");
            breathsLeft = numberOfBreaths.value;
            breathText.innerText = breathsLeft;
            return;
        }
        growCircle();
        breathTextUpdate();
    }, 12000);
};

//Start Breathing
start.addEventListener("click", () => {
    start.classList.add("button-inactive");
    instructions.innerText = "Get relaxed, and ready to begin breathing";
    setTimeout(() => {
        instructions.innerText = "Breathing is abput to begin...";
        setTimeout(() => {
            breathingApp();
            growCircle();
            breathTextUpdate();
        }, 2000);
    }, 2000);
});

