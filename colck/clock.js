let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toDateString(undefined, options);
    time = a.toTimeString();
    document.getElementById('time').innerHTML = time + "<br>on " + date;
}, 1000);