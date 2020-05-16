// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// wait(2000).then(() => console.log(3));

// new Promise(resolve => resolve()).then(() => console.log(2));

// console.log(1);

const wait = function (ms) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
    })
}

wait(2000).then(function () {
    console.log(3);
})

new Promise(function (resolve) {
    return resolve();
}).then(function () {
    console.log(2);
})

console.log(1);

