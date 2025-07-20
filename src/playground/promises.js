const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "PKT",
            age: 35
        });
        //Promise can only resolve or reject once
        resolve('This is my resolved data');
    }, 1500);
    reject('Something went wrong!');
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error('error: ',error);
});

