"use strict";

let playerOne = "X";
let playerTwo = "O";

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let blocks = [one, two, three, four, five, six, seven, eight, nine];



for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function (){
        if (blocks[i].innerHTML === "") {
            if (playerOne === "X") {
                blocks[i].innerHTML = "X";
                playerOne = "O";
                playerTwo = "X";
            } else {
                blocks[i].innerHTML = "O";
                playerOne = "X";
                playerTwo = "O";
            }
        }
        checkWinner();
    });
    
}

function checkWinner() {
    for (let i = 0; i <blocks.length-1; i++) {
        if ((blocks[i].innerHTML === "X" && blocks[i + 1].innerHTML === "X" && blocks[i + 2].innerHTML === "X" )&& (i === 0 || i === 3 || i === 6)) {
            alert("Player One Wins!");
            resetGame();
        } else if ((blocks[i].innerHTML === "O" && blocks[i + 1].innerHTML === "O" && blocks[i + 2].innerHTML === "O") && (i === 0 || i === 3 || i === 6)) {
            alert("Player Two Wins!");
            resetGame();
        } else if (blocks[0].innerHTML === "X" && blocks[3].innerHTML === "X" && blocks[6].innerHTML === "X") {
            alert("Player One Wins!");
            resetGame();
        } else if (blocks[0].innerHTML === "O" && blocks[3].innerHTML === "O" && blocks[6].innerHTML === "O") {
            alert("Player Two Wins!");
            resetGame();
        } else if (blocks[1].innerHTML === "X" && blocks[4].innerHTML === "X" && blocks[7].innerHTML === "X") {
            alert("Player One Wins!");
            resetGame();
        } else if (blocks[1].innerHTML === "O" && blocks[4].innerHTML === "O" && blocks[7].innerHTML === "O") {
            alert("Player Two Wins!");
            resetGame();
        } else if (blocks[2].innerHTML === "X" && blocks[5].innerHTML === "X" && blocks[8].innerHTML === "X") {
            alert("Player One Wins!");
            resetGame();
        } else if (blocks[2].innerHTML === "O" && blocks[5].innerHTML === "O" && blocks[8].innerHTML === "O") {
            alert("Player Two Wins!");
            resetGame();
        }else if (blocks[0].innerHTML === "X" && blocks[4].innerHTML === "X" && blocks[8].innerHTML === "X") {
            alert("Player One Wins!");
            resetGame();
        } else if (blocks[0].innerHTML === "O" && blocks[4].innerHTML === "O" && blocks[8].innerHTML === "O") {
            alert("Player Two Wins!");
            resetGame();
        } else if (blocks[2].innerHTML === "X" && blocks[4].innerHTML === "X" && blocks[6].innerHTML === "X") {
            alert("Player One Wins!");
            resetGame();
        } else if (blocks[2].innerHTML === "O" && blocks[4].innerHTML === "O" && blocks[6].innerHTML === "O") {
            alert("Player Two Wins!");
            resetGame();
        } else {
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].innerHTML === "") {
                    return;
                }
            }
            alert("Game Ended With Draw!");
            resetGame();
        }
    }
}



function resetGame() {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].innerHTML = "";
    }
}
