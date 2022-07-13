//1

function parameterThreeTimes (x){
    for (let i = 1; i <= 3; i++) {
        console.log(x)
    }
}
parameterThreeTimes (5)

//2

// function parameterFiveTimes (catsCats) {
//         console.log(catsCats+catsCats(x))
// }
// parameterFiveTimes ('cat')


// function parameterFiveTimes(x) {
//     if(x.length >= 5) return x;
//     return parameterFiveTimes(x + x[0]); 
  
//   }

//   parameterFiveTimes ('cat')

function parameterFiveTimes(x, count = 5) {
    if (!count) return '';                   // exit condition
    return x + parameterFiveTimes(x, count - 1); // repeating part
}

console.log(parameterFiveTimes('Cat'));

//3

