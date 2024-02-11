document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.valentine-card');
    const amplitude = 30; // Adjust the amplitude to control the floating range
    const period = 100; // Adjust the period to control the speed of floating

    let angle = 0;

    function animate() {
        angle += Math.PI / period;
        const offsetY = Math.sin(angle) * amplitude;

        card.style.transform = `translate(-50%, -50%) translateY(${offsetY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});
