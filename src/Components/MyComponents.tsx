import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

function Code() {
  const code = "console.log('Code Mirror!');"
  return (
    <CodeMirror
      value={code}
      height="100px"
      theme={vscodeDark}
    />
  );
}
export default Code;