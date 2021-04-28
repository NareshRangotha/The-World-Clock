let a;
let time;
let utc;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    utc = a.getUTCHours();
    utc = utc-5;
    if (utc>=1&&utc<=20) {
        time = utc +':'+a.getUTCMinutes()+':'+a.getUTCSeconds();
    }
    if (utc>=-4&&utc<=0) {
        time = 24+utc +':'+a.getUTCMinutes()+':'+a.getUTCSeconds();
    }
    document.getElementById('time').innerHTML = time;
}, 1000);