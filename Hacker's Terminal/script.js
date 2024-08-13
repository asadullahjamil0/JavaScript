const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = Math.random() * 6 + 1;
        setTimeout(() => {
            resolve();
        }, 1000 * timeout);
    })
}

const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}

async function main() {

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        }
        else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 400);

    let text = ["Initialized Hacking now reading your data",
        "Reading your files",
        "Password files detected",
        "Sendind passcwords and personal files to server",
        "Cleaning up"
    ]

    for (const item of text) {
        await addItem(item);
    }
    await randomDelay();
    clearInterval(t);
}

main();