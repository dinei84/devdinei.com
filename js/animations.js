// Exemplo de animação com GSAP
window.addEventListener('load', () => {
    // Animação do header (exemplo)
    gsap.from(".site-header", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power2.out"
    });
  
    // Animação nos títulos
    gsap.from("h1, h2", {
      duration: 1.5,
      opacity: 0,
      y: 30,
      stagger: 0.3
    });
  
    // Botão de CTA na home
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          duration: 0.2,
          ease: "power2.out"
        });
      });
  
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });
      });
    }
  });