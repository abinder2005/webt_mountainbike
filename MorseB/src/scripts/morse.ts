import {MorseCode, MorseCodeDic} from "./morse-code.js";

const dic = new MorseCodeDic();

function stringifyMorse(morse: MorseCode[]): string {
    let str = '';
    for (let m of morse) {
        str += ` ${m} `;
    }
    return str;
}

function convertTextToMorse(): void {
    const textBox = <HTMLInputElement>document.getElementById('textIn');
    const val = textBox.value;
    if (val === undefined || val === null || val === '') {
        return;
    }
    const morse = dic.convertTextToMorse(val);
    document.getElementById('morseOut').innerHTML = stringifyMorse(morse);
}

function convertMorseToText(): void {
    const textBox = <HTMLInputElement>document.getElementById('textIn');
    let val = textBox.value;
    if (val === undefined || val === null || val === '') {
        return;
    }

    let text :string;

    val = val.replace("|", "0");
    val = val.replace(".", "1");
    val = val.replace("-", "2");

    for (let str of val.split(" "))
    {
        text += dic.convertMorseToText(str);
    }

    document.getElementById('morseOut').innerHTML = text;
}

function init(): void {
    document.getElementById('convBtn').addEventListener('click', () => {
        convertTextToMorse();
    })

    document.getElementById('convBtnToText').addEventListener('click', () => {
        convertMorseToText();
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});