
prompt("What is your name?");
prompt("What is a name of your crush?");
var loveScore = Math.random();
loveScore = Math.floor((loveScore*100) + 1);
if(loveScore>0 && loveScore <= 20){
alert("Your love Score is "+ loveScore + "%. Bad luck next time!." );
}

else if(loveScore>20 && loveScore <= 50){
alert("Your love Score is "+ loveScore + "%. Not Bad!.");
}

else if(loveScore>50 && loveScore <= 80){
alert("Your love Score is "+ loveScore + "%. very nice!");
}

else{
alert("Your love Score is "+ loveScore + "%. Excellent Score!");
}
