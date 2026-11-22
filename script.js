const button = document.getElementById("jazz-button")

const music = new Audio("music/music.mp3")
music.loop =true
music.volume =0.5

let ismusicplaying = false
function startmusic(){
    if (ismusicplaying == false){
        music.play()
        ismusicplaying = true
        button.textContent = "Enjoy!"
    } else{
        music.pause()
        button.textContent = "Bye music.."
        ismusicplaying = false
    }
}

button.addEventListener("click",startmusic)