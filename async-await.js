// ES7 - Async / Await

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async () => {
    //throw new Error('Oh no!');
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.jason')
    .then(resStream => resStream.jason()
    );
    return dataJSON;
};

simpleFunc()
    .then(data => {
    console.log(data);
})
    .catch(err => {
    console.log(err);
});