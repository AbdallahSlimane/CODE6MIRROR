import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

window.addEventListener('DOMContentLoaded', () => {
    const myTextArea = document.getElementById('code-editor') as HTMLTextAreaElement;
    const editor = CodeMirror.fromTextArea(myTextArea, {
        lineNumbers: true,
        mode: 'javascript',
        theme: 'default'
    });
});
