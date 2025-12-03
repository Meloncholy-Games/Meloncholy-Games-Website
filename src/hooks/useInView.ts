import { useEffect, useState, useRef, RefObject } from "react";

type UseInViewOptions = {
    threshold?: number;
    rootMargin?: string;
};

export const useInView = <T extends HTMLElement>(
    options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] => {
    const { threshold = 0.1, rootMargin = "0px" } = options;
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold, rootMargin }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin]);

    return [ref, isInView];
};
