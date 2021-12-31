// variable diclaration *********************************************
let songIndex = 0;
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let photo = document.getElementById("photo");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    {

        photoPath: "photo/1.jpg"
    },
    {

        photoPath: "photo/2.jpg"
    },
    {

        photoPath: "photo/3.jpg"
    },
    {

        photoPath: "photo/4.jpg"
    },
    {

        photoPath: "photo/5.jpg"
    },
    {

        photoPath: "photo/6.jpg"
    },
    {

        photoPath: "photo/7.jpg"
    },
    {

        photoPath: "photo/8.jpg"
    },
    {

        photoPath: "photo/9.jpg"
    },
    {
        photoPath: "photo/10.jpg"
    },
    {
        photoPath: "photo/11.jpg"
    },
    {
        photoPath: "photo/12.jpg"
    },
    {
        photoPath: "photo/13.jpg"
    },
    {
        photoPath: "photo/14.jpg"
    },
    {

        photoPath: "photo/15.jpg"
    },
    {

        photoPath: "photo/16.jpg"
    },
    {

        photoPath: "photo/17.jpg"
    },
    {
        photoPath: "photo/18.jpg"
    },
    {
        photoPath: "photo/19.jpg"
    },
    {
        photoPath: "photo/20.jpg"
    },
    {
        photoPath: "photo/21.jpg"
    },
    {
        photoPath: "photo/22.jpg"
    },
    {
        photoPath: "photo/23.jpg"
    },
    {

        photoPath: "photo/24.jpg"
    },
]
// *******************************************************************************************
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].photoPath;
})
// ********************************************************************************
