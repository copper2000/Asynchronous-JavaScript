Promise.race([
    new Promise(function(resolve){
        return setTimeout(function() {
            //return resolve(1);
            console.log('This will not stop');
        }, 3000);
    }),
    new Promise(function(resolve){
        return setTimeout(function() {
            return resolve(3);
        }, 1000);
    }),
    new Promise(function(resolve, reject){
        return setTimeout(function() {
            return reject(new Error());
        }, 2000);
    }),    
])
.then(console.log)
.catch(console.log);