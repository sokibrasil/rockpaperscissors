const choice = ['グー', 'パー', 'チョキ'];
let playerChoiceText;
let computerChoiceText;
let result;
var winCounts = 0;
var lostCounts = 0;
var drawCounts = 0;

function playGame(playerChoice) {
    ////1~33(確定で負ける確率が20/33,確定で引き分ける確率が12/33,普通のじゃんけんをできる確率が1/33)
    let rdm = Math.floor(Math.random() * 33) + 1;
    let computerChoice;
    if (rdm <= 20) {
        // プレイヤーが負ける手を選択する
        result = '負け';
        switch (playerChoice) {
            case '0':
                computerChoice = 1;
                playerChoiceText = choice[playerChoice];
                computerChoiceText = choice[computerChoice];
                hidePlayerElements(playerChoice);
                hideComputerElements(computerChoice);
                break;
            case '1':
                computerChoice = 2;
                playerChoiceText = choice[playerChoice];
                computerChoiceText = choice[computerChoice];
                hidePlayerElements(playerChoice);
                hideComputerElements(computerChoice);
                break;
            case '2':
                computerChoice = 0;
                playerChoiceText = choice[playerChoice];
                computerChoiceText = choice[computerChoice];
                hidePlayerElements(playerChoice);
                hideComputerElements(computerChoice);
                break;
        }
    } else if (rdm <= 32) {
        // プレイヤーが引き分ける手を選択する
        result = '引き分け';
        computerChoice = playerChoice;
        switch (playerChoice) {
            case '0':
                playerChoiceText = choice[playerChoice];
                computerChoiceText = choice[computerChoice];
                hidePlayerElements(playerChoice);
                hideComputerElements(computerChoice);
                break;
            case '1':
                playerChoiceText = choice[playerChoice];
                computerChoiceText = choice[computerChoice];
                hidePlayerElements(playerChoice);
                hideComputerElements(computerChoice);
                break;
            case '2':
                playerChoiceText = choice[playerChoice];
                computerChoiceText = choice[computerChoice];
                hidePlayerElements(playerChoice);
                hideComputerElements(computerChoice);
                break;
        }
    } else {
        let computerChoice = Math.floor(Math.random() * choice.length); //コンピュータの手を決める
        if (playerChoice == computerChoice) {
            result = '引き分け';
        } else if (
            (playerChoice == '0' && computerChoice == '2') ||
            (playerChoice == '1' && computerChoice == '0') ||
            (playerChoice == '2' && computerChoice == '1')
        ) {
            result = '勝ち';
        } else {
            result = '負け';
        }
    }
    //勝敗によって処理を変える
    if (result == '勝ち') {
        document.getElementById('result').style.color = 'red';
        winCounts++;
        //外部のJavascriptを読み込む(花吹雪を出現)
        var el = document.createElement('script');
        el.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js';
        document.body.appendChild(el);
        el.onload = function () {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    } else if (result == '負け') {
        document.getElementById('result').style.color = 'blue';
        lostCounts++;
    } else {
        document.getElementById('result').style.color = 'green';
        drawCounts++;
    }

    // 結果
    document.getElementById('playerChoiceText').textContent = playerChoiceText;
    document.getElementById('computerChoiceText').textContent = computerChoiceText;
    document.getElementById('result').textContent = result;
    document.getElementById('winCounts').textContent = winCounts;
    document.getElementById('lostCounts').textContent = lostCounts;
    document.getElementById('drawCounts').textContent = drawCounts;
    document.querySelector('.totalResult').style.display = 'inline-block';
}
//プレイヤーが選択したじゃんけんの画像以外を非表示にする
const playerElementsIds = ['.choiceImg #rock_player', '.choiceImg #paper_player', '.choiceImg #scissors_player'];
function hidePlayerElements(elementId) {
    playerElementsIds.forEach(function (element) {
        if (element !== playerElementsIds[elementId]) {
            document.querySelector(element).style.display = 'none';
        }
    });
}

//コンピュータが選択したじゃんけんの画像以外を非表示にする
const computerElementsIds = ['.choiceImg #rock_computer', '.choiceImg #paper_computer', '.choiceImg #scissors_computer'];
function hideComputerElements(elementId) {
    computerElementsIds.forEach(function (element) {
        if (element !== computerElementsIds[elementId]) {
            document.querySelector(element).style.display = 'none';
        }
    });
}


//初期化する
//getElementで指定する場合
let elements;
function restartGame() {
    elements = document.getElementsByClassName('choiceImg');
    for (let i = 0; i < elements.length; i++) {
        var buttons = elements[i].getElementsByTagName('button');
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].disabled = false;
        }
    }
    showElements();
    document.getElementById('playerChoiceText').textContent = "";
    document.getElementById('computerChoiceText').textContent = "";
    document.getElementById('result').textContent = "";
}

//じゃんけんの画像を全て戻す(表示する)
//querySelectorで指定する場合
function showElements() {
    elements = document.querySelectorAll('.choiceImg img, .choiceImg button');
    elements.forEach(function (element) {
        element.style.display = 'inline-block';
    });
}
