import React, { useState } from 'react';
import ExecuteCode from './Api';

interface OutputProps {
    editorRef: React.RefObject<any>;
    language: any;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleRunCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;

        try {
            const result = await ExecuteCode(language, sourceCode);
            setOutput(JSON.stringify(result, null, 2));
            setError(null);
        } catch (error) {
            setError('Error executing code. Please try again.');
            setOutput(null);
        }
    }

    return (
        <div className="font-header text-lg bg-black pt-4 pl-4 pb-2 text-pink-300 font-bold">
            <button className="border-2 border-pink-300 p-2 mb-2 rounded-md  hover:bg-sky-700" onClick={handleRunCode}>Run Code</button>
            <div className="border-2 border-pink-300 min-h-20 rounded-md">
                {/* Display output or error */}
                {output && <pre>{output}</pre>}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Output;
