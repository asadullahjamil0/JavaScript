const URL = "https://cat-fact.herokuapp.com/facts";


// This method is by async-await with same result
const api = async () => {
    console.log("Getting data........");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    document.querySelector("#fact").innerText = data[4].text;
}


// This method is by promises with same result
// function api() {
//     fetch(URL).then((response) => {
//         console.log(response)
//         return response.json();
//     }).then((data) => {
//         document.querySelector("#fact").innerText = data[4].text;
//     })
// }

document.querySelector("#btn").addEventListener("click", api);