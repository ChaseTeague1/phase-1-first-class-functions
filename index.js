function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function randomName(){
        console.log("Ive been returned");
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am Anonymous");
    }
}