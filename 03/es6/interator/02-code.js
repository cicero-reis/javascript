'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

const makeRangeIterator = (start = 0, end = Infinity, step = 1) => {

    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {

        next: () => {

            let result;

            if(nextIndex < end) {
                console.log('D: ' + nextIndex);
                result = { value: nextIndex, done: false }
                nextIndex += step;
                iterationCount++;
                return result;
            }

            return { value: iterationCount, done: true }

        }
    };
    
    return rangeIterator;

}

let it = makeRangeIterator(1, 10, 2);

let result = it.next();

while(!result.done) {
    console.log(result.value);
    result = it.next();
}