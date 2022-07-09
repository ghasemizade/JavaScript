var num1 = prompt("enter first number ")
var num2 = prompt("enter second number ")
var number1 = Number(num1)
var number2 = Number(num2)
var sum = 1;

for (var i = number1; i < number2; i++)
{
    if (i % 2 == 1)
    {
        sum *= i;
    }
}
alert("sum of odd number :" + sum)
