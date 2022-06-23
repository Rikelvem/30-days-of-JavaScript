function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return // parar a função ao executar todos juntos
    audio.currentTime = 0 // recomeçar o audio do 0
    audio.play()
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return // pular se não for um transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)