"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var codemirror_1 = __importDefault(require("codemirror"));
require("codemirror/mode/javascript/javascript");
window.onload = function () {
    var myTextArea = document.getElementById('code-editor');
    var editor = codemirror_1.default.fromTextArea(myTextArea, {
        lineNumbers: true,
        mode: "javascript"
    });
};
