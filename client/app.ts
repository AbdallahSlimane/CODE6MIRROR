import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

class CodeExecutor {
    private editor: CodeMirror.EditorFromTextArea;

    constructor(textAreaElementId: string, outputElementId: string) {
        const myTextArea = document.getElementById(textAreaElementId) as HTMLTextAreaElement;
        this.editor = CodeMirror.fromTextArea(myTextArea, {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'dark',
        });
        this.setupRunButton(outputElementId);
    }

    private setupRunButton(outputElementId: string): void {
        document.getElementById('run-code')!.addEventListener('click', () => {
            this.executeCode(outputElementId);
        });
    }

    private executeCode(outputElementId: string): void {
        const userCode = this.editor.getValue();

        fetch('http://worker:3002/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({code: userCode}),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    document.getElementById(outputElementId)!.textContent = String(data.result);
                } else {
                    throw new Error(data.message);
                }
            })
            .catch(error => {
                console.error('Error while executing the code:', error);
                document.getElementById(outputElementId)!.textContent = `Error: ${error}`;
            });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new CodeExecutor('code-editor', 'output');
});
