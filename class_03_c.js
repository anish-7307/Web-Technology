class student {
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }
}

const s1 = new student("Anish", 85);
const s2 =new student("Rohan", 92);
const s3 = new student("Priya", 78);
const s4 = new student("Sneha", 88);
const s5 = new student("Amit", 95);

const students = [s1, s2, s3, s4, s5];
console.log(students);

for(let i=0;i<students.length;i++){
    students.sort((a,b)=>b.marks - a.marks);
    console.log(students[students.length - 4].name);
    break;
}