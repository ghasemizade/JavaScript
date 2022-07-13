var Input = prompt("enter the number")
var num = Number(Input)

var temp

for(var i = 2; i <= num; i++)
{
    if(num % i == 0)
    {
        alert("No")
        temp = 1
        break
    }
}
if (temp == 0)
{
    alert("Yes")
}