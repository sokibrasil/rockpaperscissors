const choice = ['グー', 'パー', 'チョキ'];
let playerChoiceText;
let computerChoiceText;
let result;
var winCounts = 0;
var lostCounts = 0;
var drawCounts = 0;

function playGame(playerChoice) {
    let rdm = Math.floor(Math.random() * 3) + 1; //1~3(負ける確率が2/3,引き分ける確率が1/3)
    let computerChoice;
    if (rdm <= 2) {
        // プレイヤーが負ける手を選択する
        result = '負け';
        document.getElementById('result').style.color = 'blue';
        lostCounts++;
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
    } else {
        // プレイヤーが引き分ける手を選択する
        result = '引き分け';
        document.getElementById('result').style.color = 'green';
        drawCounts++;
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
