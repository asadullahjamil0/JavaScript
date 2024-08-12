const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact");


const getFacts = async () => {
    console.log("Getting data.....")
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json();
    factPara.innerText = data[3].text;
}
let btnF = document.querySelector("#btn").addEventListener("click", getFacts);