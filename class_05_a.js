const arr=[10,20,30,];
const [a,b,c] = arr;
const [x1,...y1] = arr;   //y1 will print the rest value other then the first value 
                        // because we are using x1 to imply the first value of array arr
                    
console.log(a,b,c);
console.log(x1,y1);