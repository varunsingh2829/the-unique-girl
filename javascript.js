var inc = 1000;
let datetime = document.querySelector(".date-time");
let dayele = document.querySelector(".day");
let dateele = document.querySelector(".date");
let monthele = document.querySelector(".month");
let yearele = document.querySelector(".year");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fulldays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
let day = days[date.getDay()];
let month =
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
let year = date.getFullYear();
let dte = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
clock();
function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  const h = hours < 10 ? `0${hours}` : hours;
  const m = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".hours").innerHTML = h;
  document.querySelector(".mins").innerHTML = m;
  document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
  document.querySelector(".second").style.transform = `rotate(${second}deg)`;
}
setInterval(clock, inc);

let dateelement = document.createElement("h3");

//    console.log(date);

dateelement.classList.add("date");
dateelement.innerHTML = `
           <h3>${day}&nbsp;&nbsp;${dte}/${month}/${year}</h3>
       `;
datetime.append(dateelement);

dayele.innerText = fulldays[date.getDay()];
dateele.innerText = dte;
monthele.innerText = months[date.getMonth()];
yearele.innerText = year;
