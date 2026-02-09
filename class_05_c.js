const [first,second,...rest]=[10,20,30,40,50];
console.log(first);
console.log(second);
console.log(rest);

function sum(...numbers){
    return numbers.reduce((a, b) => a + b, 0);
}