const chars = 'ABCDEFGIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codeNumber = 1000;
const charsNumber = 10;

const codesGeneretor = () => {
    for (let i = 0; i < codeNumber; i++) {
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            // code += "1";
            const index = Math.floor(Math.random() * 20)
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener('click', codesGeneretor);