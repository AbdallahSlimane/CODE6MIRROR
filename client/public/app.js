import * as CodeMirror from "codemirror";
window.addEventListener('DOMContentLoaded', () => {
    const myTextArea = document.getElementById('code-editor');
    const editor = CodeMirror.fromTextArea(myTextArea, {
        lineNumbers: true,
        mode: 'javascript',
        theme: 'default'
    });
    document.getElementById('run-code').addEventListener('click', () => {
        const userCode = editor.getValue();
        try {
            const output = eval(userCode);
            document.getElementById('output').textContent = String(output);
        }
        catch (e) {
            if (e instanceof Error) {
                console.error('Erreur lors de l\'exécution du code :', e);
                document.getElementById('output').textContent = 'Erreur: ' + e.message;
            }
            else {
                console.error('Erreur lors de l\'exécution du code :', e);
                document.getElementById('output').textContent = 'Une erreur inconnue s\'est produite';
            }
        }
    });
});
