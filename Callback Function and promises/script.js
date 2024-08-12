// console.log("Hey i am first")
// console.log("Hey i am second")

// setTimeout(() => {
//     console.log("I am inside setTimeout")
// })

// setTimeout(() => {
//     console.log("I am inside setTimeout 2")
// })

// console.log("The end")



// const callBack = (arg) => {
//     console.log(arg)
// }


// const loadScript = (src, callBack) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = callBack("AsadUllah");
//     document.head.append(sc);
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callBack)



// Promise
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise")
//         resolve("Success");
//         // reject("Error");
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Fulfilled", res);
// });
// promise.catch((err) => {
//     console.log("Rejected", err)
// })



// Promise chaining
// const asycFunc1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1");
//             resolve("success")
//         }, 2000);
//     })
// }

// const asycFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("success")
//         }, 2000);
//     })
// }
// const asycFunc3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data3");
//             resolve("Success");
//         }, 2000);
//     })
// }

// console.log("Fetching data1.....")
// asycFunc1().then((res) => {
//     console.log("Fetching data2.....")
//     asycFunc2().then((res) => {
//         console.log("Fetching data3.....")
//         asycFunc3().catch(() => {
//         })
//     })
// })






// Another example of promises
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
        }, 2000);
    })
}

console.log("Fetching data1....")
getData(1).then(() => {
    console.log("Fetching data2....")
    return getData(2);
}).then(() => {
    console.log("Fetching data3....")
    return getData(3)
}).then((res) => {
    console.log(res);
})



// Another example of callback

// We called this code callback hell because of to much difficult to understand
// getData(1, () => {
//     console.log("Getting data2.....")
//     getData(2, () => {
    //         console.log("Getting data3.....")
    //         getData(3, () => {
        //             console.log("Getting data4.....")
        //             getData(4);
        //         })
//     });
// })