const featureCards = document.querySelectorAll(".feature-card");

if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.22 }
    );

    featureCards.forEach((card, index) => {
        card.style.setProperty("--feature-delay", `${index * 110}ms`);
        observer.observe(card);
    });
} else {
    featureCards.forEach((card) => card.classList.add("is-visible"));
}
