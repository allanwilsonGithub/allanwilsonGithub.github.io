(function (){

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ": " + this.answers[i]);
        }

    }

    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correct){
            console.log("Correct!")
        } else {
            console.log("Wrong. Try again!")
        }
    }

    var q1 = new Question('Is Helsinki the capital of Finland?',
                            ['Yes', 'No'],
                            0);

    var q2 = new Question('What is the name of my wife?',
                        ['Joanne',
                        'Fiona',
                            'Paula'],
                            2);

    var q3 = new Question('What best describes coding?',
                        ['Boring',
                        'Hard', 'Fun',
                        'Tedious'],
                        2);
                    
    var q4 = new Question('What is Scotland\'s highest mountain?',
                        ['Broad Cairn',
                        'Driesh','Ben Nevis'],
                        2);

    var questions = [q1 , q2, q3, q4];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer:'));

    questions[n].checkAnswer(answer);

})();