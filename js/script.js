let color = 'black';

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);

    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', function () {   
        let size = getSize();
        createBoard(size);
    });
});

function createBoard(size) {
    let board = document.querySelector('.board');
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    
    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }

}

function getSize() {
    let input = parseInt(prompt("Please input canvas size"));
    let message = document.querySelector('#message');
    console.log('1', input);
    if(input === "" || isNaN(input) || input === null) {        
        message.textContent = "Please provide a number";
    } else if (input < 0 || input > 100) {
        message.textContent = "Please provide a number between 0 - 100";
    } else {
        console.log('2', input);
        message.textContent = "Approved!"
        return input;
    }
}

function colorDiv () {
    if(color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll('div');
        divs.forEach((div) => div.style.backgroundColor = 'white');
}