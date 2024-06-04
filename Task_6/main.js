document.getElementById('Random').addEventListener('click', RandomNumbers);

function RandomNumbers() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b) || a > b) {
        alert('');
        return;
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (let i = 0; i < 30; i++) {
        const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
        const numberElement = document.createElement('p');
        numberElement.textContent = randomNum;
        outputDiv.appendChild(numberElement);
    }
}
