var num1 = prompt("enter first number :")
var num2 = prompt("enter second number :")

var number1 = Number(num1)
var number2 = Number(num2)

var prod = 0;
for (var i = 1; i <= number2; i++)
{
    prod += number1
}
alert("Product :"+ prod)