/////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log('--------------')
    console.log('* calculateAge *')
    console.log('--------------')
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log('--------------')
        console.log('* john.calculateAge *')
        console.log('--------------')
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log('--------------')
            console.log('* john.innerFunction *')
            console.log('--------------')
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();