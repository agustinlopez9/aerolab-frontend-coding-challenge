import { useEffect } from "react";

export default function useClickOutside(ref, handleMenu) {
    useEffect(() => {
        const handleClick = (event) => {
            if (!ref.current.contains(event.target)) {
                handleMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    });
}
