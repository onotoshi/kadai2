document.getElementById('start').addEventListener('click', function() {
   
    let choices = {
        'グー': 'img/g1.jpg',
        'チョキ': 'img/g2.jpg',
        'パー': 'img/g3.jpg'
    };
    let intervalId;

    intervalId = setInterval(function() {
        let randomChoice = Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)];
        document.getElementById('opponentHand').src = choices[randomChoice];
    }, 500);

    const choiceButtons = document.querySelectorAll('.choice');
    choiceButtons.forEach(button => {
        button.onclick = function() {
            clearInterval(intervalId);
            const userChoice = this.getAttribute('data-choice');
            const computerChoice = Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)];
            document.getElementById('opponentHand').src = choices[computerChoice];
            document.getElementById('result').innerHTML = determineWinner(userChoice, computerChoice);
            document.getElementById('choices').style.display = 'none';
        };
    });
});

function determineWinner(user, computer) {
    if (user === computer) {
        return '引き分けです';
    }
    if ((user === 'グー' && computer === 'チョキ') ||
        (user === 'チョキ' && computer === 'パー') ||
        (user === 'パー' && computer === 'グー')) {
        return 'あなたの勝ちです！';
    }
    return 'あなたの負けです...';
}
document.getElementById('start').addEventListener('click', function() {
    // ここに既存のコードを維持
    document.getElementById('choices').style.display = 'flex'; // ボタンを表示する
    // その他の処理
});
