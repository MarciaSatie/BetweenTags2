import Editor from "@monaco-editor/react";
function MEditor(props:any) {

    return (
      <>
      {/* Monaco Editor */}
        <Editor
          height="100px"
          language="javascript"
          theme="vs-dark"
          value={props.code}
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

