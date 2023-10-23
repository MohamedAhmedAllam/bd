document.addEventListener('DOMContentLoaded', () => {
    const countdownEl = document.getElementById('countdown');

    const updateCountdown = () => {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(16, 0, 0, 0);
        const timeRemaining = midnight - now;
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `See you in ${hours}h ${minutes}m ${seconds}s`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
});

