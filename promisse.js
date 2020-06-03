// Promisses

const doSomethingPromisse = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did something
            resolve('First Data');
        }, 1000);
    });

const doOtherThingPromisse = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did otherthing
            resolve('Second Data');
        }, 1000);
    });

doSomethingPromisse()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromisse();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log("Ops...", error));

//Estados de promisses:
//Pending
//Fulfilled
//Rejected


//Callbascks
/*
function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First Data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did oher thing
        callback('Second Data');
    }, 1000);
}

function doALL() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        //handler error
                    }
                });
            } catch (err) {
                //handler error
            }
        });
    } catch (err) {
        //handler error
    }
}

doALL();
*/