var input = prompt("enter the number")

var num = Number(input)
var sum = 1

for (var i = 0; i < num; i++)
{
    if (num % i == 0)
    {
        sum += i;
    }
}
if (sum == num)
{
    alert("this number is tom :)")
}
else{
    alert("this not tom number !")
}