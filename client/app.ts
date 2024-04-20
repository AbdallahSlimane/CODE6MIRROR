import * as CodeMirror from "codemirror";
import 'codemirror/mode/javascript/javascript';

// Listen for the DOMContentLoaded event to ensure the DOM is loaded before executing the script
window.addEventListener('DOMContentLoaded', () => {
    const myTextArea = document.getElementById('code-editor') as HTMLTextAreaElement;
    const editor = CodeMirror.fromTextArea(myTextArea, {
        lineNumbers: true,
        mode: 'javascript',
        theme: 'default'
    });

    // Create a new Web Worker instance
    const worker = new Worker(new URL('./worker.ts'), { type: 'module' });

    document.getElementById('run-code')!.addEventListener('click', () => {
        const userCode = editor.getValue();

        // Send the code to the worker
        worker.postMessage(userCode);

        // Listen for messages from the worker
        worker.onmessage = (event) => {
            const { status, result, message } = event.data;
            if (status === 'success') {
                document.getElementById('output')!.textContent = String(result);
            } else {
                console.error('Error while executing the code:', message);
                document.getElementById('output')!.textContent = `Error: ${message}`;
            }
        };
    });
});
