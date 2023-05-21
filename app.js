var displayhours=document.getElementById("displayhours")
var displayminutes=document.getElementById("displayminutes")
var displayseconds=document.getElementById("displayseconds")
var strtbtn=document.getElementById("strtbtn")
var pusbtn=document.getElementById("pusbtn")
var rstbtn=document.getElementById("rstbtn")
var hrs,min,sec;
hrs=0;
min=0;
sec=0;
var interval;

function rendervals(){
    displayhours.innerHTML=hrs
    displayminutes.innerHTML=min
    displayseconds.innerHTML=sec
}

function timer(){
    sec++;
    if(sec==60){
        min++;
        sec=0;
    }else if(min==59){
        hrs++;
        min=0;
    }
    rendervals()
}

function startstopwatch(){
    strtbtn.disabled=true;
pusbtn.disabled=false;
rstbtn.disabled=false;
    interval=setInterval( function(){
        timer()

    },1000)
}

function pause(){
    pusbtn.disabled=true;
    strtbtn.disabled=false;
    rstbtn.disabled=false;
    clearInterval(interval);
}

function reset(){
    pause()
    strtbtn.disabled=false;
    pusbtn.disabled=true;
    rstbtn.disabled=true;
    hrs=0;
    min=0;
    sec=0;
    rendervals();
}

