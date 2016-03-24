'use strict';

// function Hangman(word) {
// 	this.word = word.trim();
// 	this.wordLow = this.word.toLowerCase();
// 	this.myTry = [...(this.word.replace(/\w/g, '_'))];
// 	this.trys = 6;
// 	this.letters = [];
// 	this.won = false;
// 	this.lost = false;
// }

// Hangman.prototype.console = function() {
// 	console.log(
// 		`${this.myTry.join('')} | ${this.letters.join('')} | left: ${this.trys}`
// 	)
// };

// Hangman.prototype.isWon = function() {
// 	if (this.won) {
// 		console.log(`You have already won! The word was ${this.word}`)
// 		return true;
// 	}
// };

// Hangman.prototype.isLost = function() {
// 	if (this.lost) {
// 		console.log(`You have already lost! The word was ${this.word}`)
// 		return true;
// 	}
// };

// Hangman.prototype.winer = function() {
// 	this.won = true;
// 	console.log(`You won! The word was ${this.word}`)
// };
// Hangman.prototype.looser = function() {
// 	this.lost = true;
// 	console.log(`You lost. :( The word was ${this.word}`)
// };

// Hangman.prototype.guess = function(char) {

// 	if ( this.isWon() || this.isLost() || char==" ") {
// 		return
// 	}

// 	char = char.toLowerCase();

// 	if ( this.letters.indexOf(char) != -1 || this.myTry.indexOf(char) != -1){
// 		console.log('You have already entered this letter')
// 		return this
// 	} 

// 	let idx = this.wordLow.indexOf(char); 

// 	if (idx == -1) {
// 		this.letters.push(char);
// 		this.trys--;
// 		if (this.trys < 0){
// 			this.looser();
// 			return;
// 		}
// 		this.console();
// 		return;
// 	}

// 	while (idx !== -1) {
// 		this.myTry[idx] = this.word[idx];
// 	  idx = this.wordLow.indexOf(char, idx + 1);
// 	}
// 	if (this.myTry.join('')==this.word){
//     this.winer()
//     return
//   } 
// 	this.console();
// };

// const fr = new Hangman('Frontend Raccoon');


/*
 * We need to create a readline interface.
 * The interface takes 2 streams.
 * The input field points to the readable input stream
 * and the output field to the writable output stream. 
 */

// const readline = require('readline');
 
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function nodeJs() {
// 	rl.question('\nPlease write your letter: ', function (name) {
// 		if (name){
// 			fr.guess(name);
// 			nodeJs();
// 		} else {
// 			rl.question('\nFor exit type "y" ', function (ans) {
// 				if (ans =="y"){
// 		      console.log('goodbay');
// 		      rl.close();
// 		      process.stdin.destroy();
// 				} else {
// 					nodeJs();
// 				}
// 			})
// 		}
// 	});
// }

// nodeJs();

const loadStory = (a=1) => {
	console.log(a);
	a = 10;
  	console.log(a);
};

loadStory();

(async function() {
  await loadStory();
  console.log("Yey, story successfully loaded!");
}());


/*
(async function() {
    try {
        // Просто дожидаемся результата из промиса
        await loadStory();
        console.log("Yey, story successfully loaded!");

    } catch (e) {
        console.log(e)
    }
})();*/





