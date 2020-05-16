// Syntax: 
// const promise = Promise.all(iterable)
// 'iterable' typically an array of promises or any type of value

Promise.all([
    new Promise(function (resolve, reject) {
        return setTimeout(function () {
            return resolve(1);
            //console.log('This will not stop');
            //return reject(new Error('Error 1'));
        }, 3000);
    }),
    new Promise(function (resolve, reject) {
        return setTimeout(function () {
            return resolve(2);
            //return reject(new Error('Error 2'));
        }, 2000);
    }),
    new Promise(function (resolve) {
        return setTimeout(function () {
            return resolve(3);
        }, 1000);
    }),
    'Four',
    5,
    6.1,
])
.then(console.log)
.catch(console.log);