let a;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    time = a.toUTCString()
    document.getElementById('time').innerHTML = time;
}, 1000);