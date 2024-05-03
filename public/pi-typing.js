// 円周率の値（10桁）
const PI_10 = "3.1415926535";
// 表示用の円周率（10桁）
const piDisplay = PI_10;

// ゲームの状態を管理するオブジェクト
const gameState = {
    currentIndex: 0,
    userInput: '',
};

// ゲームの開始
function start() {
    const start10Button = document.getElementById('start-10');
    start10Button.style.display = 'none'; // スタートボタンを非表示にする

    gameState.currentIndex = 0;
    gameState.userInput = '';
    updateGameStatus('進行中');
    displayDigits();
    document.addEventListener('keydown', handleUserInput);
}

// 画面に円周率の数字を表示する関数
function displayDigits() {
    const digitsDisplay = document.getElementById('digits');
    digitsDisplay.innerHTML = '';

    for (let i = 0; i <= gameState.currentIndex; i++) {
        const digit = document.createElement('div');
        digit.textContent = piDisplay.charAt(i);
        if (i === gameState.currentIndex) {
            digit.classList.add('current-digit');
        }
        digitsDisplay.appendChild(digit);
    }
}

// ユーザーの入力を処理する関数
function handleUserInput(e) {
    const inputDisplay = document.getElementById('user-input');
    const currentDigit = PI_10.charAt(gameState.currentIndex);

    if (e.key === currentDigit) {
        gameState.userInput += e.key;
        gameState.currentIndex++;
        inputDisplay.textContent = ''; // 入力した桁を非表示にする
        displayDigits();

        if (gameState.currentIndex === PI_10.length) {
            updateGameStatus('クリア');
            document.removeEventListener('keydown', handleUserInput);
        }
    }
}

// ゲームの状態を更新する関数
function updateGameStatus(status) {
    const gameStatusDisplay = document.getElementById('game-status');
    gameStatusDisplay.textContent = status;
}

// ゲームの初期化
function init() {
    updateGameStatus('待機中');
    const startButton = document.getElementById('start-10');
    startButton.addEventListener('click', start);
}

// ゲームの開始
init();
