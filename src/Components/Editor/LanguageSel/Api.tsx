import React, { useState } from 'react';
import axios from "axios";
import { LanguageOptions } from "./LanguageOptions";

interface ExecuteCodeProps {
    editorRef: React.RefObject<any>;
    language: string;
    sourceCode: string;
}

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

const ExecuteCode: React.FC<ExecuteCodeProps> = ({ language, sourceCode }) => {
    const [executionResult, setExecutionResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    // Function to execute code
    const executeCode = async () => {
        try {
            const response = await API.post("/execute", {
                language: language,
                version: LanguageOptions[language as keyof typeof LanguageOptions],
                files: [{ content: sourceCode }]
            });
            setExecutionResult(response.data);
            setError(null);
        } catch (error) {
            console.error("Error executing code:", error);
            setError('Error executing code. Please try again.');
            setExecutionResult(null);
        }
    };

    // Call executeCode when component mounts
    React.useEffect(() => {
        executeCode();
    }, [language, sourceCode]); // Trigger execution whenever language or source code changes

    return (
        <div>
            {/* Render execution result or error */}
            {executionResult && <pre>{JSON.stringify(executionResult, null, 2)}</pre>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default ExecuteCode;
