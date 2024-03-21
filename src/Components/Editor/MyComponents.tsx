import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

function Code(props:any) {

  return (
    <CodeMirror
      value={props.code}
      height="100px"
      theme={vscodeDark}
    />
  );
}
export default Code;