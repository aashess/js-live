// Question for Concept Clear. 
// 	1.	Uses for..in to iterate through the students.


const studentMarks = [
     {Name: "Alice", math: 85, science: 90, english: 78 },
     {Name: "Bob", math: 75, science: 88, english: 80 },
     {Name: "Charlie", math: 95, science: 85, english: 92 }
];                                                                                                                                                                                                                                                                                                                                  

let averageMarks = studentMarks.map( (item) => {
    let sum= (item.english + item.math + item.science) / 3
    // console.log(`${item.Name}: `,sum);
    return `${item.Name}: ${sum.toFixed(2)}`

    
})
console.log(averageMarks);


for (const key in studentMarks) {
    // console.log(key);
    
}
// 	2.	For each student, calculates the average marks using Array.map on the subjects.
for (const key in studentMarks) {
    // console.log(`${key}`, studentMarks[key]);
    let indivudualMark = studentMarks[key]
    
    for (const key in indivudualMark) {
        // console.log(`${key}`,indivudualMark[key]);
    }
    
}


You have an object containing students and their marks for three subjects:

const studentMarks = {
    Alice: { math: 85, science: 90, english: 78 },
    Bob: { math: 75, science: 88, english: 80 },
    Charlie: { math: 95, science: 85, english: 92 }
  };

  Write a function that:
  1.	Uses for..in to iterate through the students.
  2.	For each student, calculates the average marks using Array.map on the subjects.
  3.	Stores the student’s name and their average marks in a Map.
  4.	Uses for..of to print the student names and their average marks in the format:

  Alice: 84.33
  Bob: 81.00
  Charlie: 90.67