/////////////////////////////////////
// Lecture: Scoping

// First scoping example
var a = 'Hello!';
first1();

function first1() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain

var b = 'Hello!';
first2();

function first2() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(b + d);
}
