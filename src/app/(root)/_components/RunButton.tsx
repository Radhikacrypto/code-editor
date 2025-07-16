"use client"

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import{ useUser} from "@clerk/nextjs";

function RunButton() {
  const {user } = useUser();
  const{runcode, language , isRunnning , executonResult } = useCodeEditorStore();

  const handleRun = async ()=>{}
  return (
    <div>RunButton</div>
  )
}

export default RunButton