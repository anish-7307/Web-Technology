let newobj={
    name: "Anish",
    age: 20,
    city: "Delhi"
}

let duplicateobj={...newobj, city: "Gorakhpur"};  // we are using spread operator to copy the properties of newobj and then we are changing the value of city property to "Gorakhpur"
duplicateobj.name = "Anish rai";  // we are changing the value of name property to "Anish rai"
duplicateobj["country"]="India";

console.log("newobj: ", newobj);
console.log("duplicateobj: ", duplicateobj);

newobj.name= "Anish kumar rai";
let {name, age:currentage} = newobj;  // we are using destructuring assignment to extract the values of name and age properties from myobj1 and assign them to variables name and currentage respectively
console.log(name);
console.log(currentage);