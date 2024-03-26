import Editor from "@monaco-editor/react";
import {useRef, useState} from "react";
import LanguageSelector from "./LanguageSel/LanguageSelector";
import { CodeSnippets } from "./LanguageSel/LanguageOptions";
import React from "react";
import Output from "./LanguageSel/Output"


function MEditor() {

  const editorRef =useRef() 

  const [language,setLanguage] = useState("javascript") 
  
  const [value,setValue] = React.useState<string>(CodeSnippets["javascript"]);

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
      {/* *****Output***** */}
      <Output
        editorRef ={editorRef}
        language={language}
      />


      {/* *****Editor***** */}
      <details>
        <summary className="font-header text-lg bg-black pt-4 pl-4 pb-2 text-pink-300 font-bold ">
        Editor
        </summary>
        <LanguageSelector 
        language ={language}
        onSelect ={onSelect}
        />
      {/* Monaco Editor */}
      <Editor
          height="300px"
          theme="vs-dark"
          onMount={onMount}
          language={language}
          value={value}
          onChange={(value) => {
            if (typeof value === 'string') {
              setValue(value);
            }
          }}
          options={{
            inlineSuggest: true,
            fontSize: "16px",
            formatOnType: true,
            autoClosingBrackets: true,
            minimap: { scale: 20}
          }}
        />


      </details>


        
      </>

    );
  }
export default MEditor;

