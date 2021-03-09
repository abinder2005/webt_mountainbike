import { MorseCodeDic } from "./morse-code.js";
const dic = new MorseCodeDic();
function stringifyMorse(morse) {
    let str = '';
    for (let m of morse) {
        str += ` ${m} `;
    }
    return str;
}
function convertTextToMorse() {
    const textBox = document.getElementById('textIn');
    const val = textBox.value;
    if (val === undefined || val === null || val === '') {
        return;
    }
    const morse = dic.convertTextToMorse(val);
    document.getElementById('morseOut').innerHTML = stringifyMorse(morse);
}
function convertMorseToText() {
    const textBox = document.getElementById('textIn');
    let val = textBox.value;
    if (val === undefined || val === null || val === '') {
        return;
    }
    let text;
    val = val.replace("|", "0");
    val = val.replace(".", "1");
    val = val.replace("-", "2");
    for (let str of val.split(" ")) {
        text += dic.convertMorseToText(str);
    }
    document.getElementById('morseOut').innerHTML = text;
}
function init() {
    document.getElementById('convBtn').addEventListener('click', () => {
        convertTextToMorse();
    });
    document.getElementById('convBtnToText').addEventListener('click', () => {
        convertMorseToText();
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
    init();
});
//# sourceMappingURL=morse.js.map