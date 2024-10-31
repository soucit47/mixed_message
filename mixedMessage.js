//Mixed message file that will return a random Star Trek quote to the screen when run

// Arrays contain the part quotes all must have same number of cells
const quotesOne = ['Live Long', 'i am a', 'I have been','A lie is'];
const quotesTwo = ['and', 'doctor','and always will be','a very poor way'];
const quotesThree = ['prosper','not a bricklayer','your friend','to say hello'];


//random number function
function randomNumber() {
    return Math.floor(Math.random() * (quotesOne.length));
};

//sentance builder function
function randomSentance() {
    let sentance = '';

    sentance = quotesOne[randomNumber()];
    sentance += ' ' + quotesTwo[randomNumber()];
    sentance += ' ' + quotesThree[randomNumber()];

    return sentance;
};


//call to display on screen
console.log(randomSentance());