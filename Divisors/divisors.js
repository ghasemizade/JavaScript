var input = prompt("enter the number")
var num = Number(input)

for (var i = 1; i <= num; i++)
{
    if (num % i == 0)
    {
        alert(i)
    }
}