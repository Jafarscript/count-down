const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector("#seconds")


const target = new Date('2025-01-25T00:00:00').getTime()

function countdown() {
    const current = new Date().getTime()
    const diff = target - current

    const d = Math.floor(diff / (1000 * 60 * 60 * 24))
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((diff % (1000 * 60)) / 1000)

    days.textContent = d.toString().padStart(2, '0');
    hours.textContent = h.toString().padStart(2, '0');
    minutes.textContent = m.toString().padStart(2, '0');
    seconds.textContent = s.toString().padStart(2, '0');
}

setInterval(countdown, 1000)