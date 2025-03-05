// background color changing
const randomBgColor = document.getElementById('theme-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = randomColor();
})

// present calender setup

const presentDay = document.getElementById('day');
const presentDate = document.getElementById('date');
const presentMonth = document.getElementById('month');
const presentYear = document.getElementById('year');

const date= new Date();
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const getPresentDay = date.getDay();

const months = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const getPresentMonth = date.getMonth();

presentDay.innerText = days[getPresentDay];
presentDate.innerText = date.getDate();
presentMonth.innerText = months[getPresentMonth];
presentYear.innerText = date.getFullYear();
//

// main section 
document.getElementById('btn-1').addEventListener('click', function(){
updateTask('btn-1','title-1', 'activity-log1');
})
document.getElementById('btn-2').addEventListener('click', function(){
updateTask('btn-2','title-2', 'activity-log2');
})
document.getElementById('btn-3').addEventListener('click', function(){
updateTask('btn-3','title-3', 'activity-log3');
})
document.getElementById('btn-4').addEventListener('click', function(){
updateTask('btn-4','title-4', 'activity-log4');
})
document.getElementById('btn-5').addEventListener('click', function(){
updateTask('btn-5','title-5', 'activity-log5');
})
document.getElementById('btn-6').addEventListener('click', function(){
updateTask('btn-6','title-6', 'activity-log6');
})


// clear button



document.getElementById('clear-btn').addEventListener('click', function(){
   
   document.getElementById('activity_text').style.display = 'none';


})
