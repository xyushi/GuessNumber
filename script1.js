var systemGuess = Math.floor(Math.random()*100)+1
console.log(systemGuess);
var guess=0;
 function guessNumber(a,b)
{
    var num=document.getElementById('in').value
    if(num===''||num>100||num<1){
        console.log('Enter valid string');
    }
    else{
    guess++
     var num = parseInt(document.getElementById('in').value)
     //console.log(typeof(num));
    if(num==systemGuess){
        console.log('Correct'+guess);
        document.getElementById('out').innerHTML='<i> Yay! You guessed the Correct number!</i>'
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
