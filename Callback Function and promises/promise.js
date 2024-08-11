console.log('hey i am promise');

let prom1 = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random < 0.5) {
        reject("No random number was supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Hey I am done");
            resolve("AsadUllah")
        }, 3000);
    }
})

prom1.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err);
})
