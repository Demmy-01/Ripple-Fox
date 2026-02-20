import { useEffect } from 'react';

/**
 * Observes every element with [data-reveal] and adds the CSS class
 * "revealed" once it enters the viewport.  Works with the
 * .reveal-on-scroll / .revealed styles defined in index.css.
 */
export function useScrollReveal(threshold = 0.12) {
    useEffect(() => {
        const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [threshold]);
}
