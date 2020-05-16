const promise = new Promise(function (resolve) {
    return resolve(1);
})
promise.then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2
}).then(function (result) {
    console.log(result);
    return result * 2
}).then(function (result) {
    console.log(result);
})





