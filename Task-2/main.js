function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').innerText = 'შედეგი: ' + result;
}

function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 - num2;
    document.getElementById('result').innerText = 'შედეგი: ' + result;
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    document.getElementById('result').innerText = 'შედეგი: ' + result;
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').innerText = 'შეცდომა: გაყოფა ნულზე დაუშვებელია';
    } else {
        const result = num1 / num2;
        document.getElementById('result').innerText = 'შედეგი: ' + result;
    }
}

function power() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = Math.pow(num1, num2);
    document.getElementById('result').innerText = 'შედეგი: ' + result;
}

function sqrt() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const result = Math.sqrt(num1);
    document.getElementById('result').innerText = 'შედეგი: ' + result;
}