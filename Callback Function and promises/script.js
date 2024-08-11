// console.log("Hey i am first")
// console.log("Hey i am second")

// setTimeout(() => {
//     console.log("I am inside setTimeout")
// })

// setTimeout(() => {
//     console.log("I am inside setTimeout 2")
// })

// console.log("The end")



const callBack = (arg) => {
    console.log(arg)
}


const loadScript = (src, callBack) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callBack("AsadUllah");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callBack)
