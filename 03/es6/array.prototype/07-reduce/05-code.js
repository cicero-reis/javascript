"use strict";

/**
 * Roda promises de um promise array de uma maneira encadeada
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
const runPromiseInSequense = (arr) => {
 
    return arr.reduce((promiseChain, currentPromise) => {
 
        return promiseChain.then((chainedResult) => {
 
            return currentPromise(chainedResult)
                .then((res) => res)
        })

    }, Promise.resolve());
}

// promise function 1
const pOne = () => {

    return new Promise( (resolve, reject) => {

        resolve(5);

    });

}

const pTwo = (x) => {

    return new Promise( (resolve, reject) => {

        resolve(x * 2);

    });

}

const pThree = (x) => {

    return new Promise( (resolve, reject) => {

        resolve(x * 3);
        
    });

};

const promiseArr = [pOne, pTwo, pThree];

runPromiseInSequense(promiseArr)
    .then((res) => {
        console.log(res);
    });



