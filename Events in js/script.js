document.getElementById("btn").addEventListener("keydown", (e) => {
   document.querySelector(".box").innerHTML = "<b>Yayy you were clicked.</b>. Enjoy!";
   console.log(e)
})