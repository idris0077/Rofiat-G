export default function initScrollReveal(targetElements, defaultProps) {
    if (!targetElements, length) return;
    
    initScrollReveal({ reset: false });

    targetElements.forEach(({ element, Animation}) => {
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, Animation));
    });
}