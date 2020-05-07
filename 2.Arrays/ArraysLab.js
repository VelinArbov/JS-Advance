//01. Sum First Last

function sumFirstAndLast(array) {
    let first = Number(array[0]);
    let last = Number(array[array.length-1]);
    let sum = first+ last;
    console.log(sum)
}


//sumFirstAndLast(['20', '30', '40'])


//02.Even Position Elements

// function evenPosition(array) {
//    console.log(array.filter((_,i) => i % 2 === 0).join(" "));
// }

//evenPosition(['20', '30', '40'])

//03. Negative / Positive Numbers

function negativePositive(array){
    let result = [];
    array.forEach(x => {
        x >= 0 ?
        result.push(x) :
        result.unshift(x)
        
    });
    console.log(result.join("\n"));

}
//negativePositive([7, -2, 8, 9])


//04. Last K Numbers Sequence
function LastNumbers(n, k){
    let array = [1];

    for (let i = 0; i < n; i++) {
        let currentElement = array.slice(k * -1)
            .reduce((a, b) => a + b);

        array[i] = currentElement;
    }
    console.log(array.join(" "));
}

//LastNumbers(6,3)


//5.	Process Odd Numbers

function oddNumber(array) {
    console.log(array
        .filter((_,i) =>
            i % 2 === 1)
            .map(i => i * 2)
            .reverse()
        .join(" "));
    
    }

   // oddNumber([3, 0, 10, 4, 7, 3])

    //6. Smallest Two Numbers

    function smallestTwoNumbers(array) {
        console.log(array.sort((a,b) => a-b).slice(0,2).join(" "))
    }

    //smallestTwoNumbers([3, 0, 10, 4, 7, 3])


    //7. Biggest Element
    function biggestNumber(array) {
        console.log(Math.max(...array.flat(1)));
    }
    biggestNumber([[20, 40],
        [10, 60]]
       )