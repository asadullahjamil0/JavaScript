console.log("Let's write js");

async function getSongs() {
    let a = await fetch('http://127.0.0.1:3000/JavaSript/project%20-%20Spotify%20Clone/Songs/')
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");

    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/Songs/")[1]);
        }
    }
    return songs;
}

async function main() {
    let currentSong;

    // Getting the list of all songs
    let songs = await getSongs()

    // Show all the songs in the playlist
    let songsUL = document.querySelector(".songsList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songsUL.innerHTML = songsUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Harry</div>
                            </div>
                            <div class="playNow">
                                <span>Play Now</span>
                                <img src="playButton.svg" alt="">
                            </div></li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songsList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
        })
    });

}
main();
