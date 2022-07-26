var systemGuess = Math.floor(Math.random()*100)+1
var guess=0;
 function guessNumber()
{
    var num=document.getElementById('in').value
    if(num.length === 0)
    {
        document.getElementById("out").innerText = "Please provide a number"
    }
    else if (num>100) {
        document.getElementById("out").innerText = "Provide a number smaller than 100"
    }
    else if (num<1) {
        document.getElementById("out").innerText = "Provide a number greater than 0"
    }
    else{
    guess++
     var num = parseInt(document.getElementById('in').value)
     //console.log(typeof(num));
    if(num==systemGuess){
        console.log('Correct'+guess);
        document.getElementById('out').innerHTML=`<i> Yay! You guessed the Correct number!</i> <br> You made ${guess} guesses! <br> This page will reload in 3 seconds`
        setTimeout(function(){
            window.location.reload(1);
        }, 3000);
    }
    else if(num>systemGuess){
        console.log('Smaller');
        document.getElementById('out').innerText='Guess a Smaller Number'
    }
    else{
        console.log('Greater');
        document.getElementById('out').innerText='Guess a Greater Number'
    }
}
}
//var data=document.getElementById('out');
//console.log(data.innerHTML);
