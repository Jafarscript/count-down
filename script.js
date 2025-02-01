const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector(".seconds");

const target = new Date('2025-04-25T00:00:00').getTime();

function countdown() {
    const current = new Date().getTime();
    const diff = target - current;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    updateTime(days, d);
    updateTime(hours, h);
    updateTime(minutes, m);
    updateTime(seconds, s);
}

function updateTime(element, newValue) {
    const currentValue = parseInt(element.textContent, 10);
    if (currentValue !== newValue) {
        element.textContent = newValue.toString().padStart(2, '0');

        // Get the parent `.time` div and apply the flip animation
        const timeDiv = element.closest('.time');
        timeDiv.classList.add('flip');

        // Remove the flip class after the animation completes
        setTimeout(() => {
            timeDiv.classList.remove('flip');
        }, 500); // Match the duration of the flip animation
    }
}

setInterval(countdown, 1000);