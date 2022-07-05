const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let birthday = "July 5, 2022 16:05:00"; 
let countDown = new Date(birthday).getTime()
console.log(countDown);
x = setInterval(function () {

    let now = new Date().getTime(),
        distance = countDown - now;
        
        document.getElementById("day").innerText = Math.floor(distance / (day)),
        document.getElementById("hour").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minute").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("second").innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    if (distance < 0) {
    //    window.location="3-index.html";
        location.replace('3-index.html');
        // let headline = document.getElementById("headline"),
        //    var count = document.getElementsByClassName(.countdown);
            // content = document.getElementById("content");
let vv=document.querySelector('.countdown');
        // headline.innerText = "It's my birthday!";
        // var cn=window.getComputedStyle(count,null);

        document.querySelector('h2').style.display='none';
        vv.style.display = "none";
        // document.getElementById('day').innerText="SANYA";
        let container=document.querySelector('.container');
        // container.h2.innerHTML = "sa";
        let v=document.querySelector('.bg');
        console.log(v.innerHTML);
           v.style.background="blue";
        clearInterval(x);
    }
   
    //seconds
}, 1000)
