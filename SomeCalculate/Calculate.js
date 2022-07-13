var MyArr = []
var ArrNum = []
var size = 5
var sum

for (var i = 0; i < size; i++)
{
    MyArr[i] = prompt("Enter array Element " + (i + 1))
    ArrNum[i] = Number(MyArr[i])
    sum += ArrNum[i]
}

alert("count :" + size)

var min = ArrNum[1];
var max = ArrNum[1];

//calculate max & min
for(var i = 0; i < 5; i++)
{
    if(ArrNum[i] <  min)
    {
        min = ArrNum[i]
    }
    if(ArrNum[i] >  max)
    {
        max = ArrNum[i]
    }
}
alert("min :" + min)
alert("max :" + max)

//Calculate average
var avg = sum / 5
alert("avg :" + avg)

var submission, power, division, variance

//calculate variance
for (var i = 0; i < 5; i++)
{
    submission = (ArrNum[i] - avg)
    power = Math.pow(submission,2)
    division = power / count
    variance += division
}
alert("variance :" + variance)

