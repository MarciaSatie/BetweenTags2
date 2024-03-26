import Editor from "@monaco-editor/react";
import {useRef, useState} from "react";
import LanguageSelector from "./LanguageSel/LanguageSelector";
import { CodeSnippets } from "./LanguageSel/LanguageOptions";


function MEditor() {

  const editorRef =useRef() 

  const [language,setLanguage] = useState("javascript") 
  
  const [value,setValue] = useState(CodeSnippets["javascript"]);

  const onMount = (editor:any)=>{
    editorRef.current=editor;
    editor.focus();
  }

  const onSelect = (language:string)=>{
    setLanguage (language)
    console.log(`Playgroung laguage is:${language}`)
    setValue(CodeSnippets[language as keyof typeof CodeSnippets])

    
    

  }

    return (
      <>
      <LanguageSelector 
        language ={language}
        onSelect ={onSelect}
        />
      {/* Monaco Editor */}
        <Editor
          height="100px"
          theme="vs-dark"
          onMount={onMount}
          language={language}
          value={value}
          onChange={
            (value)=> setValue(value) 
          }
          options={{
            inlineSuggest: true,
            fontSize: "16px",
            formatOnType: true,
            autoClosingBrackets: true,
            minimap: { scale: 20}
          }}

        
        />
      </>

    );
  }
export default MEditor;

