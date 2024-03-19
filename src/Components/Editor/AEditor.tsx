import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function AEditor(props:any) {
 
  return (
    <AceEditor
      height="100px"
      width="100%"
      value={props.code}
      mode="javascript"
      theme="monokai"
      fontSize="16px"
      highlightActiveLine={true}
      setOptions={{
        enableLiveAutocompletion: true,
        showLineNumbers: true,
        tabSize: 2
      }}
    />
  );
}
export default AEditor;