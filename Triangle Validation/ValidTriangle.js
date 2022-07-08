var sideA = prompt("enter side A")
var sideB = prompt("enter side B")
var sideC = prompt("enter side C")

var tmpSideA = Number(sideA)
var tmpSideB = Number(sideB)
var tmpSideC = Number(sideC)

if (tmpSideA + tmpSideB > tmpSideC && tmpSideA + tmpSideC > tmpSideB && tmpSideC + tmpSideB > tmpSideA)
{
    alert("this numbers create triangle :)");
}
else
{
    alert("this numbers does not create triangle !");
}