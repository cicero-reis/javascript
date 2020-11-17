/////////////////////////////
// Lecture: Closures

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
        return
    } 
    if (job === 'teacher') {
        console.log('What subject do you teach, ' + name + '?');
        return
    } 
    console.log('Hello ' + name + ', what do you do?');
  }
}

interviewQuestion('igner')('John');
