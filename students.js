// var students = [
  
//   {name: '', age: '', gpa: '', subjects:}
  
  
// ];
   
var firstNames = ['Bob', 'Jane', 'Max', 'Steve', 'Ryan', 'Matthew', 'John', 'Mark', 'Frank', 'Robert'];
var lastNames = ['Smith', 'Johnson', 'Vasquez', 'Jagger', 'Lupone', 'Reagan', 'Washington', 'Cobain', 'Reznor'];
var subjects = ['MATH', 'Chem', 'Physics', 'History', 'Art', 'Social Studies', 'PE'];   


//add a fail-safe to pickSubject
function pickSubject(arr1, arr2){
  var subject = arr1[_.random(arr1.length - 1)];
  
 // console.log(subject, arr2);
  
  return (_.indexOf(arr2, subject) === -1) ? subject : pickSubject(arr1, arr2);
}



var students = _.range(100)
  .map(function (num) {
    var student = {};
    student.firstName = firstNames[_.random(firstNames.length - 1)];
    student.lastName = lastNames[_.random(lastNames.length -1)];
    student.gpa = (Math.random() * 3 ) + 1;
    
    student.subjects = _.range(5).reduce(function (currentSubjects) {
      currentSubjects.push(pickSubject(subjects, currentSubjects));
      
      return currentSubjects;
    }, []); 
    
    
    return student;
  });


console.log(students);


var subjectsByStudentCount = students.reduce(function (count, student){
  
  student.subjects.reduce(function (count, subject) {
    if (count[subject] === undefined) {
      count[subject] = 0;
    }
    
    count[subject]++;
    
    return count;
  }, count);
  
  return count;
  
}, {});

console.log(subjectsByStudentCount);

