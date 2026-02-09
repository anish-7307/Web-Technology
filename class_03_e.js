const calc = function(op, a, b){
    switch(op){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        default:
            return "Invalid operation";
    }
}
console.log(calc('+' , 10, 5));