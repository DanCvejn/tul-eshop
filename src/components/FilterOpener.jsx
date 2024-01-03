"use client";
import { IconFilter, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export const FilterOpener = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const filters = document.querySelector(".filters");
    if (filters.classList.contains("opened")) {
      return filters.classList.remove("opened");
    }
    filters.classList.add("opened");
  }, [menuOpen])

  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex md:hidden fixed bottom-2 right-2 z-50 bg-red rounded-full p-2 filters-button"
    >
      {menuOpen ?
        <IconX size={36} stroke={1.5} className="text-white" /> :
        <IconFilter size={36} stroke={1.5} className="text-white" />
      }
    </button>
  )
}
