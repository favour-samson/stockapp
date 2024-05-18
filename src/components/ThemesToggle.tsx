import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    if (isMounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <button onClick={handleToggle}>
      {theme === "dark" ? (
        <CiDark size={25} color="white" />
      ) : (
        <MdOutlineLightMode size={25} />
      )}
    </button>
  );
};

export default ThemeToggle;
