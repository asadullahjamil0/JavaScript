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


// Another example of callback

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId)
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// We called this code callback hell because of to much difficult to understand
getData(1, () => {
    console.log("Getting data2.....")
    getData(2, () => {
        console.log("Getting data3.....")
        getData(3, () => {
            console.log("Getting data4.....")
            getData(4);
        })
    });
})