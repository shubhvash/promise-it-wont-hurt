'use strict';

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('FULFILLED!'), 300);
});
promise.then(param => {
    console.log(param);
});