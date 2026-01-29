import { useEffect } from "react";

export default function useClickOutside(ref, callback) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Chine-check kung ang click ay HINDI sa loob ng ref element
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Nag-a-add ng event listener sa buong document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up para iwas memory leak
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
