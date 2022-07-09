var num1 = prompt("Enter the first number")
var num2 = prompt("Enter the second number")

var number1 = Number(num1)
var number2 = Number(num2)
var div1 = 0;
var mod = number1;
for (var counter = 0;; counter++)
    if (mod >= number2)
    {
        div1++;
        mod -= number2;
    }
    else
    {
        break;
    }
alert("division : "+  div1)
