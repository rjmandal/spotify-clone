// variable diclaration *********************************************
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar");
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
        songName: "there is nothing holding me back",
        filePath: "songs/5.mp3",
        coverPath: "cover/5.jpg"
    },
    {
        songName: "Liar - Sandra",
        filePath: "songs/6.mp3",
        coverPath: "cover/6.jpg"
    },
    {
        songName: "lavitating - Dua lipa",
        filePath: "songs/7.mp3",
        coverPath: "cover/7.jpg"
    },
    {
        songName: "Treat you better -Shawn Mendes",
        filePath: "songs/8.mp3",
        coverPath: "cover/8.jpg"
    },
]
// *******************************************************************************************
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//******** */ handle play pause click for bottom ****************************************
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

// update seekbar******************************************************************

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
// ********************************************************************************
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        if (audioElement.paused || audioElement.currentTime <= 0) {
            songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        } 
        else   
         {
            songIndex=parseInt(e.target.id);
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            audioElement.src=`songs/${songIndex+1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.pause();
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
        }
    })
})
// next and previous**********************************************************
document.getElementById("next").addEventListener('click',()=>{
if(songIndex>=8)
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
// ********************** previous
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
// ************************************************************************

// function to rotate image
// let rotateAngle = 90;

// function rotate(cover) {
//     cover.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
//     rotateAngle = rotateAngle + 90;
// }
//   *********************************************