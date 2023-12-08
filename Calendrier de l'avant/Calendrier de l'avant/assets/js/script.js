

/* PROGRAMME :
- Clique sur une case de mon calendrier pour l'ouvrir
- Cette case doit avoir un numéro < ou = pour s'ouvrir
- Si elle ne l'est pas il ne se pas rien
- Si elle est < ou = alors le suite se passe
- Jouer de la musique
- Afficher l'image de fond dans la case
*/

console.log('bonjour')

const boxes = document.querySelectorAll(".js_box")
const today =new Date(Date.now())
const dateNumber = today.getDate()

boxes.forEach(box => {
    box.addEventListener('click', ()=>{
        const boxNumber = parseInt(box.textContent)
        if (boxNumber <= dateNumber){
            playSong()
            showImage(box)
        }
    })
});

const playSong = () => {
    const url = "assets/audios/song.mp3"
    const song = new Audio(url)
    // song.pause()
    // song.currentTime = 0
    song.play()
}

const showImage = (box) => {
    box.classList.add('hide')
}
