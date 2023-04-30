let quotesIndex = 0;
var inc = 1000;
var incquotes = 2000;
let datetime = document.querySelector(".date-time");
let dayele = document.querySelector(".day");
let dateele = document.querySelector(".date");
let monthele = document.querySelector(".month");
let yearele = document.querySelector(".year");
let quotesDiv = document.querySelector(".quotes");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const quotes = [
  `there's only one thing more precious than <br/>
our time and that's who we spend it on`,
  `always remember you are only once`,
  `Your time is limited, so spend it on valuable things.`,
  `You can not make up for lost time. <br/> You can only do better in the future`,
];
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
quotesDiv.innerHTML = quotes[0];
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
const handleQuotes = () => {
  quotesIndex = quotes.length <= quotesIndex + 1 ? 0 : ++quotesIndex;
  quotesDiv.innerHTML = quotes[quotesIndex];
};

setInterval(handleQuotes, incquotes);
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
