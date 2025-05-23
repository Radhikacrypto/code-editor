import { useCodeEditorStore } from '@/store/useCodeEditorStore';
import React, { useEffect, useState } from 'react'
import { LANGUAGE_CONFIG } from '../_constants';

function EditorPanel() {
  const [isShareDialogOpen, setShareDialogOpen] = useState(false);
  const{ language, theme, fontSize, editor, setFontSize, setEditor} = useCodeEditorStore();

  useEffect(()=>{
    const savedCode = localStorage.getItem9(`editor-code-${language}`)
    const newCode= savedCode || LANGUAGE_CONFIG[language].defaultCode
    if(editor) editor.setValue(newCode)
  },[language,editor])

  useEffect (()=>{
    const savedFontSize = localStorage.getItem("editor-font-size");
    if(savedFontSize) setFontSize(parseInt(savedFontSize));

  },[setFontSize]);

  const handleRefresh  = ()=>{}

  const handleEditorChange = ()=>{}

  const handleFontSizeChange = ()=>{}
  return (
    <div>EditorPanel</div>
  )
}

export default EditorPanel