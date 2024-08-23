function updateTimeAndDate() {
let current = new Date();
let hour = current.getHours();
let minuten = current.getMinutes();
let secondn = current.getSeconds();
let monthn = current.getMonth(); // Month, 0-11
let dayofweekn = current.getDay(); // Day of week, 0-6
let day = current.getDate();
let year = current.getFullYear();

let minute; // This changes the minute 0-9 to 00-09
if (minuten === 0) {
    minute = "00";
} else if (minuten === 1) {
    minute = "01";
} else if (minuten === 2) {
    minute = "02";
} else if (minuten === 3) {
    minute = "03";
} else if (minuten === 4) {
    minute = "04";
} else if (minuten === 5) {
    minute = "05";
} else if (minuten === 6) {
    minute = "06";
} else if (minuten === 7) {
    minute = "07";
} else if (minuten === 8) {
    minute = "08";
} else if (minuten === 9) {
    minute = "09";
} else {
    minute = minuten;
}

let second; // This changes the second 0-9 to 00-09
if (secondn === 0) {
    second = "00";
} else if (secondn === 1) {
    second = "01";
} else if (secondn === 2) {
    second = "02";
} else if (secondn === 3) {
    second = "03";
} else if (secondn === 4) {
    second = "04";
} else if (secondn === 5) {
    second = "05";
} else if (secondn === 6) {
    second = "06";
} else if (secondn === 7) {
    second = "07";
} else if (secondn === 8) {
    second = "08";
} else if (secondn === 9) {
    second = "09";
} else {
    second = secondn;
}

let dayofweek; // This changes the day of week from 0-6 to Sunday-Saturday
if (dayofweekn === 0) {
    dayofweek = "Sunday";
} else if (dayofweekn === 1) {
    dayofweek = "Monday";
} else if (dayofweekn === 2) {
    dayofweek = "Tuesday";
} else if (dayofweekn === 3) {
    dayofweek = "Wednesday";
} else if (dayofweekn === 4) {
    dayofweek = "Thursday";
} else if (dayofweekn === 5) {
    dayofweek = "Friday";
} else if (dayofweekn === 6) {
    dayofweek = "Saturday";
}

let month; // This changes the month from 0-11 to January-December
if (monthn === 0) {
    month = "January";
} else if (monthn === 1) {
    month = "February";
} else if (monthn === 2) {
    month = "March";
} else if (monthn === 3) {
    month = "April";
} else if (monthn === 4) {
    month = "May";
} else if (monthn === 5) {
    month = "June";
} else if (monthn === 6) {
    month = "July";
} else if (monthn === 7) {
    month = "August";
} else if (monthn === 8) {
    month = "September";
} else if (monthn === 9) {
    month = "October";
} else if (monthn === 10) {
    month = "November";
} else if (monthn === 11) {
    month = "December";
}



let currentTime = `${hour}:${minute}:${second}`;
let currentDate = `${dayofweek}, ${month} ${day}, ${year}`;

document.getElementById('currenttime').textContent = currentTime;
document.getElementById('currentdate').textContent = currentDate;

updateTimeAndDate();
}
setInterval(updateTimeAndDate, 1); // updates date and time every millisecond
