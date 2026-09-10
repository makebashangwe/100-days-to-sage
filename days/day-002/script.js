const startButton = document.getElementById("start-button");
const powerButton = document.getElementById("power-button");
const countButton = document.getElementById("count-button");
const statusDisplay = document.getElementById("status-display");
const completedBuildsDisplay = document.getElementById("completed-builds");

startButton.addEventListener("click", function() {
    statusDisplay.textContent = "Building...";
    document.body.classList.remove("idle-mode");
    document.body.classList.add("start-mode");
});

powerButton.addEventListener("click", function() {
    statusDisplay.textContent = "Idle...";
    document.body.classList.remove("start-mode");
    document.body.classList.add("idle-mode");
});

countButton.addEventListener("click", function() {
    completedBuildsDisplay.textContent = parseInt(completedBuildsDisplay.textContent) + 1;
});

