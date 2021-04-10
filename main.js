let doc = document;
doc.querySelector('head title').innerText = 'homework-2'; //  строчка лишняя, добавил что бы запушить ветку, не сразу увиедел, что нужно в отдельной ветке делать дз
const $arena = doc.querySelector('.root .arenas');
const scorpion = {
    name: 'Scorpion',
    hp: 60,
    img: '/assets/chempoins/scorpion.gif',
    weapon: ['gun'],
    attack: function () {
        return console.log(scorpion.name + ' ' + 'fight')
    }
};
const kitana = {
    name: 'Kitana',
    hp: 80,
    img: '/assets/chempoins/kitana.gif',
    weapon: ['gun'],
    attack: function () {
        return console.log(this.name + ' ' + 'fight')
    }
};

scorpion.attack();
kitana.attack();

function createPlayer(id, player) {
    let $mainCont = doc.createElement('div');
        $mainCont.classList.add(id);

    $arena.appendChild($mainCont);

    let $progressBar = doc.createElement('div');
        $progressBar.classList.add('progressbar');
            let $playerLife = doc.createElement('div');
                $playerLife.classList.add('life');
                $playerLife.style.width = player.hp + "%";
            let $playerName = doc.createElement('div');
                $playerName.classList.add('name');
                $playerName.innerText = player.name;

    let $character = doc.createElement('div');
        $character.classList.add('character');
            let $playerImg = doc.createElement('img');
                $playerImg.src = player.img;

    $mainCont.appendChild($progressBar);
        $progressBar.appendChild($playerLife);
        $progressBar.appendChild($playerName);
    $mainCont.appendChild($character);
        $character.appendChild($playerImg);

}

createPlayer('player1', scorpion);
createPlayer('player2', kitana);