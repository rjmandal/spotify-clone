// variable diclaration *********************************************
let songIndex = 0;
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let audioElement = new Audio("songs/1.mp3");
let cover = document.getElementById("cover");
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let songs = [
    { songName: "Manike hike mike - yohani", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Liar - camila cabello", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Bilionera - otilia", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Let me down slowly - shawn Mendes", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "There is nothing holding me back", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Liar - Sandra", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Lavitating - Dua lipa", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "Treat you better -Shawn Mendes", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
    { songName: "Love nawantiti", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
    { songName: "See you again", filePath: "songs/10.mp3", coverPath: "cover/10.jpg" },
    { songName: "Stay", filePath: "songs/11.mp3", coverPath: "cover/11.jpg" },
    { songName: "Grind", filePath: "songs/12.mp3", coverPath: "cover/12.jpg" },
    { songName: "Teri aankhon mein", filePath: "songs/13.mp3", coverPath: "cover/13.jpg" },
    { songName: "Tum kun chale aate ho", filePath: "songs/14.mp3", coverPath: "cover/14.jpg" },
    { songName: "Kina chir", filePath: "songs/15.mp3", coverPath: "cover/15.jpg" },
    { songName: "Chand se parda", filePath: "songs/16.mp3", coverPath: "cover/16.jpg" },
    { songName: "Santa claus", filePath: "songs/17.mp3", coverPath: "cover/17.jpg" },
    { songName: "Yalgaar", filePath: "songs/18.mp3", coverPath: "cover/18.jpg" },
    { songName: "Vardaan", filePath: "songs/19.mp3", coverPath: "cover/19.jpg" },
    { songName: "fallin for you", filePath: "songs/20.mp3", coverPath: "cover/20.jpg" },
    { songName: "yaad piya ki ane lagi", filePath: "songs/21.mp3", coverPath: "cover/21.jpg" },
    { songName: "Dil meri na sune", filePath: "songs/22.mp3", coverPath: "cover/22.jpg" },
    { songName: "Jugnu", filePath: "songs/23.mp3", coverPath: "cover/23.jpg" },
    { songName: "Treat you better -Shawn Mendes", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
]
// ***************************************************sidebar*********************
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".fa-search");

btn.onclick = function () {
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
}
// *******************************************************************************************
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//******************handle play pause click for bottom ***************************
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
    }
});

// ****************************update seekbar**************************************

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
// ****************************handle play pause of middle container*******************
const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

songItemPlay.forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        if (audioElement.paused || audioElement.currentTime <= 0) {
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            cover.src = `cover/${songIndex + 1}.jpg`;
            audioElement.play();
            masterSongName.innerText = songs[songIndex].songName;
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        }
        else {
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            audioElement.pause();
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
        }
    })
})
// ********************next**********************************************************
next.addEventListener('click', () => {
    if (songIndex >= 23) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    cover.src = `cover/${songIndex + 1}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});
// ********************** previous************************************
previous.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    cover.src = `cover/${songIndex + 1}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})
// *****************************auto run next********************************************