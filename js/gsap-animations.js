document.addEventListener('DOMContentLoaded', () => {
    // Animação do Header
    gsap.from('.logo, .nav-links li', {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.2
    });

    // Animação Hero Section
    gsap.to('.hero h1', {
        scrollTrigger: '.hero',
        duration: 1,
        opacity: 1,
        y: 0
    });

    // Scroll Animations
    gsap.utils.toArray('[data-animate]').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
});