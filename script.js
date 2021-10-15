// variable diclaration *********************************************
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar");
let cover = document.getElementById("cover");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    {
        songName: "Manike hike mike - yohani",
        filePath: "songs/1.mp3",
        coverPath: "cover/1.jpg"
    },
    {
        songName: "liar - camila cabello",
        filePath: "songs/2.mp3",
        coverPath: "cover/2.jpg"
    },
    {
        songName: "bilionera - otilia",
        filePath: "songs/3.mp3",
        coverPath: "cover/3.jpg"
    },
    {
        songName: "let me down slowly - shawn Mendes",
        filePath: "songs/4.mp3",
        coverPath: "cover/4.jpg"
    },
    {
        songName: "there is nothing holding me back - Shawn Mendes",
        filePath: "songs/5.mp3",
        coverPath: "cover/5.jpg"
    }
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

// audioElement.play();

//******** */ handle play pause click****************************************
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
// ************************************************************************

// function to rotate image
// let rotateAngle = 90;

// function rotate(cover) {
//     cover.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
//     rotateAngle = rotateAngle + 90;
// }
//   *********************************************
audioElement.addEventListener("timeupdate", () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
})

document.getElementById("next").addEventListener('click',()=>{
if(songIndex>=5)
{
    songIndex=0;
}
else{
    songIndex+=1;
}
audioElement.src=`songs/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove("fa-play-circle");
masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener('click',()=>{
if(songIndex<=0)
{
    songIndex=0;
}
else{
    songIndex-=1;
}
audioElement.src=`songs/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove("fa-play-circle");
masterPlay.classList.add("fa-pause-circle");
})
