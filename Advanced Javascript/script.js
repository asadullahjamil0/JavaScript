async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 100);
    })
}

function sum(a, b, c) {
    return a + b + c;
}

(async function main() {
    // let a = await sleep();
    // console.log(a)
    // let b = await sleep();
    // console.log(b)


    // destructure
    // let [x, y, ...rest] = [4, 6, 3, 3, 4, 5, 6, 2]
    // console.log(x, y, rest);

    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let { a, b } = obj
    console.log(a, b);

    // Spread Syntax
    let arr = [2, 3, 45]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))
})()