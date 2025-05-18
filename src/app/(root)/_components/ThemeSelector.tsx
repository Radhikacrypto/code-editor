"use client";

import { useState } from "react";
import { useRef } from "react";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { THEMES } from "../_constants";


function ThemeSelector() {

  const [isOpen, setIsOpen] = useState(false);
  const{theme, setTheme} = useCodeEditorStore();
  const dropdownRef=useRef<HTMLDivElement>(null);
  const currentTheme= THEMES.find((t)=>t.id===theme);
  return (
    <div>ThemeSelector</div>
  )
}

export default ThemeSelector