var win=0;
var los=0;
for(var i=0;i<5;i++)
{
    var gs=Math.floor((Math.random()*5)+1);
    var nm=parseInt(prompt("Enter a number"));
    if(nm==gs)
    {
        console.log("You win");
        win++;
    }
    else
    {
        console.log("You lost guess number is "+ gs);
        los++;

    }
}
console.log(" You win "+win+" times ");
console.log("You lost "+los+" times");