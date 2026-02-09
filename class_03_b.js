var user = "Admin";

function showuser(){
    console.log(user);
}
showuser();

function abc(){
    console.log("Hello");
}
abc();

let show1= function(){
    console.log("anonymous function");
}
show1();

let add = (a,b) => console.log(a+b);
add(10,20);

let sum = (a=5,b=10) => {
    let result = a + b;
    console.log(result);
}
sum(10,20);
sum();