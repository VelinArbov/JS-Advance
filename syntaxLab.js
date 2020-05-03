//01. String Length
function stringLength(stringOne, stringTwo, stringThree){
    let stringSum;
    let averageLenght;
    stringSum =stringOne.length + stringTwo.length + stringThree.length;
    averageLenght = Math.floor(stringSum / 3);

    console.log(stringSum)
    console.log(averageLenght);
}

//stringLength('pasta', '5', '22.3')


//02.Math Operations
function mathOperators(num1,num2,operator){
    let result;
    switch(operator){
    case '+':result= num1+num2;break;
    case '-':result= num1-num2;break;
    case '/':result= num1/num2;break;
    case '*':result= num1*num2;break;
    case '%':result= num1%num2;break;
    case '**':result= num1**num2;break;
    }
console.log(result)
}
//mathOperators(1,2,'**');


//03. Sum of Numbers N…M

function sumNumbers(num1,num2)
{
    let result = 0;
    let firtsNumber = Number(num1);
    let secondNumber= Number(num2);
for (let i = firtsNumber; i <= secondNumber; i++) {
      result+= i;
  }
  console.log(result)
}

// sumNumbers('1', '5' )


//04. Largest Number

function largestNumber(num1,num2,num3){
    let result;
    if( num1> num2 && num1 > num3)
    {
        result = num1;
    }
    else if (num2 > num1 && num2 > num3)
    {
        result = num2
    }
    else if (num3 > num1 && num3 > num2)
    {
        result = num3
    }

    console.log(`The largest number is ${result}.`);
}

//largestNumber(2,6,52)

//05.Circle Area

function circleArea(input){

let inputType= typeof(input);
let result ;
if(inputType === 'number')
{
    result= Math.pow(input,2)*Math.PI;
    console.log(result.toFixed(2));
}
else
{
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}

}

//circleArea(5)


//06. Square of Stars
function solve(n=5){
    for (let i = 0; i < Number(n); i++) {
        let array = "";

        for (let j = 0; j < Number(n); j++) {
            array += "* ";          
        }

        console.log(String(array));
    }
}

solve();
