function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.style.backgroundImage = 'url("./icons/sun.png")';
    } else {
        themeIcon.style.backgroundImage = 'url("./icons/moon.png")';
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const movableDiv = document.querySelector('.moon');
    const follower = document.querySelector('.follow');
    document.addEventListener('mousemove', (event) => {
        const mouseX = event.pageX;
        const mouseY = event.pageY;

        const offsetX = (mouseX / window.innerWidth - 0.5) * 20;
        const offsetY = (mouseY / window.innerHeight - 0.5) * 20;

        movableDiv.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        follower.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        follower.style.opacity = 1;
    });
    const projectSection = document.querySelector('.projects');
    const firstCard = document.querySelector('.project-card.scroll-hint');

    let hintRemoved = false;

    projectSection.addEventListener('scroll', () => {
        if (!hintRemoved && projectSection.scrollLeft > 0) {
            firstCard.classList.remove('scroll-hint');
            hintRemoved = true;
        }
    });

});