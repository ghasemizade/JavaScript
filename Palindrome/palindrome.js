var Input = prompt("enter the number")
var num = Number(Input)

var tempnumber = num
var mod
var revers

if (num < 0)
{
    alert("false")
}
while(num != 0)
{
    mod = num % 10
    revers = revers * 10 + mod
    num /= 10
}
if (tempnumber == revers)
{
    alert("Yes")
}
else
{
    alert("No")
}