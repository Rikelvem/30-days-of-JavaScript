window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return // parar a função ao executar todos juntos
    audio.currentTime = 0 // recomeçar o audio do 0
    audio.play()
})