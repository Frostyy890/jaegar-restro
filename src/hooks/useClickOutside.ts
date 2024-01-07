import { useEffect, useRef } from "react"

export const useClickOutside = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback();
            }
        }; 

        document.addEventListener("mousedown", handleClickOutside);
        // Higher-order function
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [callback]);

    return ref;
}