const user = {
    name:"Anish",
    age:40,
    welcome:function(){
        console.log("Welcome " + this.name);
        console.log(this);
    }
}
user.welcome();

let a=5;
function outer(){
    let b = 10;
    function inner(){
        let c= 15;
        console.log(a,b,c);
    }
    inner();
}
outer();