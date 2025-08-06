import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {

    // useRef gives us direct access to the DOM node
    const ref = useRef(null);

    useEffect(() => {
        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When element in view, add "visible" class
                if (entry.isIntersecting) {
                    ref.current.classList.add("visible");
                }
            },
            // Triggers when 10% of element is visible
            { threshold: 0.1, rootMargin: "0px 0px -25px 0px" }
        );

        // Start observing element once rendered
        if (ref.current) observer.observe(ref.current);

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};