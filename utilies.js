function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getInnerTextFromID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function setInnerTextByIDandValue(id, value) {
    document.getElementById(id).innerText = value;
}

function updateTask(buttonId, titleId, activityId) {
    const button = document.getElementById(buttonId);
    const title = document.getElementById(titleId);
    const activityLog = document.getElementById(activityId);

    alert('Board Updated Successfullly');

    let taskNumber = getInnerTextFromID('task-number');
    let currentTaskNumber = taskNumber - 1;
    setInnerTextByIDandValue('task-number', currentTaskNumber);

    let totalTask = getInnerTextFromID('total-task');
    let currentTotalTask = totalTask + 1;
    setInnerTextByIDandValue('total-task', currentTotalTask);

    button.style.backgroundColor = "#E0E0E0";
    button.style.color = "#A0A0A0";

    activityLog.innerText = `You have completed the task ${title.innerText} at ${new Date().toLocaleDateString()}`;
    activityLog.style.display = 'block'

    if(currentTaskNumber === 0) {
        alert("congrates!!!You have completed all the task")
    }
    return currentTaskNumber;

}