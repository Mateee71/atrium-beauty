import React, { useState, useEffect } from "react";

const ToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-atrium-rose text-white px-3 py-3 rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg"
      aria-label="Ugrás az oldal tetejére"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="m15 14l-5-5l-5 5l-2-1l7-7l7 7z"/></svg>
    </button>
  );
};

export default ToTopButton;