let a;
let time;
let utc;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    utc = a.getUTCHours();
    utc = utc+3;
    if (utc<=24) {
        time = utc+':'+a.getUTCMinutes()+':'+a.getUTCSeconds();
    }
    if (utc>24) {
        time = utc-24 +':'+a.getUTCMinutes()+':'+a.getUTCSeconds();
    }
    document.getElementById('time').innerHTML = time;
}, 1000);