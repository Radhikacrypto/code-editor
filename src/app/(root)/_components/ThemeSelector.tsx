"use client";

import { useState, useEffect } from "react";
import { useRef } from "react";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { THEMES } from "../_constants";
import { AnimatePresence, motion } from "framer-motion";
import { CircleOff, Cloud, Github, Laptop, Moon, Palette, Sun } from "lucide-react";



function ThemeSelector() {

  const [isOpen, setIsOpen] = useState(false);

  const{theme, setTheme} = useCodeEditorStore();
  const dropdownRef=useRef<HTMLDivElement>(null);
  const currentTheme= THEMES.find((t)=>t.id===theme);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  

  return (
    <div className="relative" ref={dropdownRef}>
       <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-48 group relative flex items-center gap-2 px-4 py-2.5 bg-[#1e1e2e]/80 hover:bg-[#262637] 
        rounded-lg transition-all duration-200 border border-gray-800/50 hover:border-gray-700"
      >
        {/* hover state bg decorator */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

        <Palette className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />

        <span className="text-gray-300 min-w-[80px] text-left group-hover:text-white transition-colors">
          {currentTheme?.label}
        </span>

        {/* color indicator */}

        <div
          className="relative w-4 h-4 rounded-full border border-gray-600 group-hover:border-gray-500 transition-colors"
          style={{ background: currentTheme?.color }}
        />
      </motion.button>

    </div>
  )
}

export default ThemeSelector