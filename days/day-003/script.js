const startButton = document.getElementById("start-button");
const powerButton = document.getElementById("power-button");
const countButton = document.getElementById("count-button");

const statusDisplay = document.getElementById("status-display");
const completedBuildsDisplay = document.getElementById("completed-builds");

const milestoneList = document.getElementById("milestone-list");
const addMilestone = document.getElementById("add-milestone");
const removeMilestone = document.getElementById("remove-milestone");
const milestones = [
    {
        name: "Organize BuilderOS",
        completed: true
    },
    {
        name: "Build Interactive Console",
        completed: true
    },
    {
        name: "Learn JavaScript State",
        completed: false
    }
];

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

function renderMilestones(){
    milestoneList.innerHTML="";
    milestones.forEach(function(milestone){
        const listItem = document.createElement("li");
        const symbol = milestone.completed? "✓" : "○";
        listItem.textContent = `${symbol} ${milestone.name}`;        
        milestoneList.appendChild(listItem);
    });
}

renderMilestones();

addMilestone.addEventListener("click", function(){
    const newMilestoneName = document.getElementById("new-milestone-name").value;
    const checkedStatus = document.querySelector('input[name="completion-status"]:checked');
    if (newMilestoneName.trim() === "" || checkedStatus === null) {
        console.log("Enter a milestone name and choose its status.");
        return;
    }

    milestones.push({
        name : newMilestoneName,
        completed: checkedStatus.value === "yes"

    });
    renderMilestones();
});

removeMilestone.addEventListener("click", function(){
    const oldMilestoneName = document.getElementById("remove-milestone-name").value;
    const index = milestones.findIndex(function(milestone){
        if (milestone.name===oldMilestoneName){
            return true;
        }
    });
    if (index!==-1){
        milestones.splice(index,1);
        renderMilestones();
    }else{
        console.log(`${oldMilestoneName} does not exist.`);
        return;
    }
});