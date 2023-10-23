document.addEventListener('DOMContentLoaded', () => {
    const countdownEl = document.getElementById('countdown');

    const updateCountdown = () => {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        const timeRemaining = midnight - now;

        if (timeRemaining <= 0) {
            // Redirect to the new page when countdown reaches zero
            window.location.href = 'index_next.html'; // Change 'images.html' to the name of your second HTML file
            return;
        }

        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
});

