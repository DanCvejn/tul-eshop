"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const MenuOpener = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState();
  const pathname = usePathname();

  useEffect(() => {
    const menu = document.querySelector(".menu");
    if (menu.classList.contains("opened")) {
      return menu.classList.remove("opened");
    }
    menu.classList.add("opened");
  }, [menuOpen])

  useEffect(() => {
    if (pathname !== lastPathname) {
      setMenuOpen(false);
      setLastPathname(pathname);
    }
  }, [pathname, lastPathname])

  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex md:hidden fixed top-3 right-3 z-50 bg-red rounded-full p-2"
    >
      {menuOpen ?
        <IconX size={36} stroke={1.5} className="text-white" /> :
        <IconMenu2 size={36} stroke={1.5} className="text-white" />
      }
    </button>
  )
}
