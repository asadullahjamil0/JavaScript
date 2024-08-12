// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Wheather data")
//             resolve(200)

//         }, 2000);
//     })
// }

// async function getWheatherData() {
//     await api();
//     await api();
// }

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve(200)
        }, 2000);
    })
}

// async-await function
async function getAllData() {
    console.log("Getting data1.......");
    await getData(1);
    console.log("Getting data2.......");
    await getData(2);
    console.log("Getting data3.......");
    await getData(3);
}


// IIFE(immediatly invoke function expression) called as it is defined
// (async () => {
//     console.log("Getting data1.......");
//     await getData(1);
//     console.log("Getting data2.......");
//     await getData(2);
//     console.log("Getting data3.......");
//     await getData(3);
// })()
