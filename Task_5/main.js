document.getElementById('Random').addEventListener('click', function() {
    let numbers = [];
    for (let i = 0; i < 30; i++) {
        numbers.push(Math.floor(Math.random() * 31)); // 0-30
    }
    document.getElementById('RandomNumbers').innerText = numbers.join(', ');
});