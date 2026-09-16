const students = [
    {name: 'John', grade: 3},
    {name: 'Dick', grade: 4},
    {name: 'Sam', grade: 4},
    {name: 'Mary', grade: 5},
    {name: 'Oliver', grade: 2}//,
    //{name: 'Trevor', grade: 5}
];

let a = window.prompt("Grade: ")

for (let i=0;i<students.length;i++){
    if (students[i].grade >= a){
        console.log(students[i].name)
    }
}

function avgGrade(array){
    let sum=0;
    for (let i=0;i<students.length;i++){
        sum+=array[i].grade
    }
    let ans=sum/array.length;
    return ans
}

console.log(avgGrade(students));