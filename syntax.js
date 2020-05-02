//01. Fruit
function fruit(fruit,weight,money){

return `I need $${((weight/1000)*money).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`

}


//02.Greatest Common Divisor – GCD
function gcd(a,b){
    let copyA = a;
    let copyB = b;

    while(copyB !== 0)
    {
        let temP = copyA % copyB;
        copyA = copyB;
        copyB = temP;
    }
    return copyA;
}

//03. Same Numbers
function sameNumbers(number){
let newNumber = number.toString().split('');
var sameNumber = true;
var sum = 0;
for (let i = 0; i < newNumber.length ; i++) {
    if(sameNumber )
    {
        sameNumber = newNumber[i] === newNumber[0];
    
}
   
sum += + newNumber[i];
}
console.log(sameNumber);
console.log(sum)

}

//04. Time to Walk

function timeToWalk(steps,footprint,speed){
    let distance =steps * footprint;
    let totalRestInMinets  = Math.floor((steps * footprint)/500);

    let totaltime =(distance / speed / 1000 * 60);

let totalInSeconds =Math.ceil((totalRestInMinets + totaltime) * 60);
var result = new Date (null,null,null,null,null, totalInSeconds);

return result.toTimeString().split(' ')[0];

}


//05. Road Radar

function radar(elements) {
    let speed = elements[0];
    let area = elements[1];

    switch (area) {
        case "motorway":
            if (speed <= 130) {
                break;
            } else if (speed <= 130 + 20) {
                console.log("speeding");
            } else if (speed <= 130 + 40) {
                console.log("excessive speeding");
            } else {
                console.log("reckless driving");
            }
            break;

        case "interstate":
            if (speed <= 90) {
                break;
            } else if (speed <= 90 + 20) {
                console.log("speeding");
            } else if (speed <= 90 + 40) {
                console.log("excessive speeding");
            } else {
                console.log("reckless driving");
            }
            break;

        case "city":
            if (speed <= 50) {
                break;
            } else if (speed <= 50 + 20) {
                console.log("speeding");
            } else if (speed <= 50 + 40) {
                console.log("excessive speeding");
            } else {
                console.log("reckless driving");
            }
            break;

        case "residential":
            if (speed <= 20) {
                break;
            } else if (speed <= 20 + 20) {
                console.log("speeding");
            } else if (speed <= 20 + 40) {
                console.log("excessive speeding");
            } else {
                console.log("reckless driving");
            }
            break;

        default:
            break;
    }
}

//06. Cooking by Numbers


// •	chop - divide the number by two
// •	dice - square root of number
// •	spice - add 1 to number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from number


function cooking(params){

    let number= parseInt(params[0]);
    let functions = {
        chop: (x)=> x/2,
        dice: (x)=> Math.sqrt(x),
        spice:(x)=> x+1,
        bake: (x)=>x*3,
        fillet:(x)=> x*0.8,
    }

    for (let i = 1; i < params.length; i++) {
       number = functions[params[i]](number);
        console.log(number);
    }

}

//cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])



//07.7.	Validity Checker
function validator(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    let distance1 = Math.sqrt(x1 * x1 + y1 * y1);
    let distance2 = Math.sqrt(x2 * x2 + y2 * y2);
    let distance3 = Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2));

    if (Number.isInteger(distance1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
} 

validator([3, 0, 0, 4]);

//08. * Calorie Object
function calories(elements)
{
    let result ={};

    for (let i = 0; i < elements.length; i+=2) {
        result[elements[i]] = parseInt(elements[i+1]);
        
    }

    return result;
}

//console.log(calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));