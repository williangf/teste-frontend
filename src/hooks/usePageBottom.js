import { useEffect, useState } from "react";

export default function usePageBottom() {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      setBottom(bottom);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return bottom;
}
