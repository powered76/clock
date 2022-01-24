const handH = document.querySelector('.clock-h')
const handM = document.querySelector('.clock-m')
const handS = document.querySelector('.clock-s')


function clock() {
    const dt = new Date()
    let h = dt.getHours() * 30 + .5 * dt.getMinutes()
    let m = dt.getMinutes() * 6 + .1 * dt.getSeconds()
    // let s = dt.getSeconds() * 6 + .006 * dt.getMilliseconds()
    let s = dt.getSeconds() * 6

    handH.style.transform = `rotate(${h}deg)`
    handM.style.transform = `rotate(${m}deg)`
    handS.style.transform = `rotate(${s}deg)`

    // setTimeout(clock, 20)
    setTimeout(clock, 1000)
}

  // ============= Get the month and date=============================
  
    const month = document.querySelector(".month-window");
    const day = document.querySelector(".date-window");
    const date = new Date();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
month.innerHTML = months[date.getMonth()];
day.innerHTML = date.getDate();

//=============Cet the day of the week=======================
let week = document.querySelector(".dayOftheWeek");
let daysWeek = [
  "Sun",
  "Mon",
  "Tues",
  "Wedn",
  "Thur",
  "Frid",
  "Sat"
  ];
week.innerHTML = daysWeek[date.getDay()];

//=============Get the am-pm in the hours====================

amPm = document.querySelector(".am-pm-window");
function amAndPm() {
let h = date.getHours();
if (h >= 12) {
  amPm = "pm";
} else {
  amPm = "am";
}

return amPm;
}
amPm.innerHTML = amAndPm();



clock()
