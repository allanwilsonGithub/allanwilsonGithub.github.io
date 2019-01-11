/*
function Question (question){
    answers = [0, 1, 2, 3];
    correctAnswer = 0;
    console.log(question);

}

questions = ["What colour is Mars?\n(1) Red\n(2) Blue\n(3) Green","Is the Earth flat?\n(1) Yes\n(2) No"
             ,"How many countries are in the UK?\n(1) 3\n(2) 4\n(3) 5"];
answers = [1, 2, 2]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  
console.log(getRandomInt(5));

Question(questions[getRandomInt(4)]);
*/

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}