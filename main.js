const doc = document;
const $arenas = doc.querySelector('.root .arenas');
const randomBtn = doc.querySelector('.root .arenas .button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: '/assets/chempoins/scorpion.gif',
    weapon: ['gun'],
    attack: function () {
        return console.log(this.name + ' ' + 'fight...')
    }
};
const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: '/assets/chempoins/kitana.gif',
    weapon: ['gun'],
    attack: function () {
        return console.log(this.name + ' ' + 'fight...')
    }
};

function randomAttack () {
    let setAttack = Math.floor(Math.random() * 20);
    // console.log(setAttack);
    return setAttack;
}

function changeHP(playerObj) {
    const $playerLife = doc.querySelector('.player'+ playerObj.player +' .life');

    playerObj.hp -= randomAttack();
    $playerLife.style.width = playerObj.hp + '%';

    if (playerObj.hp <= 0) {
        playerObj.hp = 0;
        doc.querySelector('.root .arenas').appendChild(playerLose(playerObj.name));
        randomBtn.disabled = true;
        randomBtn.style.opacity = 0;
    }
}


function createElement(tag, className) {
    const $tag = doc.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerObj) {
    let $mainCont =  createElement('div', 'player' + playerObj.player);
    let $progressBar =  createElement('div', 'progressbar');
    let $playerLife = createElement('div', 'life');
    let $playerName = createElement('div', 'name');
    let $character = createElement('div', 'character');
    let $playerImg = createElement('img');

    $playerName.innerText = playerObj.name;
    $playerLife.style.width = playerObj.hp + "%";
    $playerImg.src = playerObj.img;

    $mainCont.appendChild($progressBar);
        $progressBar.appendChild($playerLife);
        $progressBar.appendChild($playerName);
    $mainCont.appendChild($character);
        $character.appendChild($playerImg);

    return $mainCont;

}

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + " win";

    return $winTitle;
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + " lose";

    return $loseTitle;
}

randomBtn.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
});


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));