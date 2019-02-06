//start,stop and reset buttons
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
//to display sec and min
var seconds=document.getElementById('sec');
var minutes=document.getElementById('min');
//declaring sec and minute as 0 in starting
var timerSeconds=0;
var timerMinute=0;
//if start button is clicked when already running then it will again run the setinterval function and stop watch will run faster
//to make it run at normal seconds speed declared isRunning=false
var isRunning=false;

    //declared outside because scope of this will be global and can be accessed by other function also
    let begin;
    
    //starting stopwatch
    function startTimer(){ 
    //ifRunning is true then return it without executing the rest of the startTimer
    if(isRunning==true) return; 
    //setting isRunning true for first time when start is clicked and setInterval will be exectued
     isRunning=true;
     begin=setInterval(calculate,1000); 
    }

    //stopping stopwatch
    function stopTimer(){
        //to stop running
        //if its running then set it to false and clear the interval
        if(isRunning){
        isRunning=false;
        clearInterval(begin);
        }
    }

    //reseting the timer
    function resetTimer(){
        //to reset set minute and seconds to 0 and append it to the display
        timerMinute=0;
        timerSeconds=0;
        var resetSec=timerSeconds;
        var resetMin=timerMinute;
        seconds.innerHTML=resetSec;
        minutes.innerHTML=resetMin;
    }
    //this will act as a clock and will increase seconds by +1 and return it
    function calculate(){
        timerSeconds++;
        //will store the increasing seconds in this variable
       //if it reaches 60 seconds then it will increment minute and will reset seconds to 0
        if(timerSeconds==60){
            timerMinute++;
            timerSeconds=0;
            //then will store current seconds and minutes in the below variables
            var currentSec=timerSeconds;
            var currentMinute=timerMinute;
            //will print mintues and seconds
            minutes.innerHTML=currentMinute;
            seconds.innerHTML=currentSec;
        }
        //if seconds is not equal to 0 then will print current seconds
        else{
            var currentSec=timerSeconds;
            seconds.innerHTML=currentSec;
        }
        
    }

start.addEventListener('click',startTimer);
stop.addEventListener('click',stopTimer);
reset.addEventListener('click',resetTimer);