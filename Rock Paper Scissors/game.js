// get user choice
var InputUser = prompt("Enter your choice (Rock = 0, Paper = 1, Scissors = 2)")
var num = Number(InputUser)

// get computer choice
var computer = Math.floor(Math.random()*3)

switch(computer){
    case 0:
        alert("Rock")
        break;
    case 1:
        alert("Paper")
        break;
    case 2:
        alert("Scissors")
        break;
}
// Game Condition
if(num == 0 && computer == 0)
{
    alert("Row")
}
else if (num == 1 && computer == 0)
{
    alert("user Win")
}
else if (num == 2 && computer == 0)
{
    alert("computer Win")
}
else if (num == 0 && computer == 1)
{
    alert("computer Win")
}
else if (num == 0 && computer == 2)
{
    alert("user Win")
}
else if (num == 1 && computer == 1)
{
    alert("Row")
}
else if (num == 2 && computer == 2)
{
    alert("Row")
}
else if (num == 1 && computer == 2)
{
    alert("computer Win")
}
else if (num == 2 && computer == 1)
{
    alert("user Win")
}