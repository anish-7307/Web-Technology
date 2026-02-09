let arr = [10, 15, 5, 8, 6, 9, 12];

// let even = function(array) {
//     return array.filter(num => num % 2 === 0);
// };

// console.log(even(arr));

let even = function(array){
    let result = [];
    for(let i=0;i<array.length;i++){
        (array[i]%2===0)?result.push(array[i]):null;
    }
    return result;
}
console.log(even(arr));