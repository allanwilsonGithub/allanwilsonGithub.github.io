(function(){

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        document.getElementById('question-line').textContent = this.question;
    
        for (var i = 0; i < this.answers.length; i++) {
            var para = document.createElement("P");
            var t = document.createTextNode((i + ": " + this.answers[i]));
            para.appendChild(t);
            document.body.appendChild(para);
        }
    }
    
    Question.prototype.checkAnswer = function() {
        var answer = parseInt(document.getElementById('answer-input').value);
        
        var para = document.createElement("H1");
        var t = document.createTextNode("This is a paragraph.");
        
        if (answer === questions[n].correct){
            var t = document.createTextNode("Yer right!");
        } else {
            var t = document.createTextNode("Wrong answer bud :/");
        }
        para.appendChild(t);
        document.body.appendChild(para);

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
    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("id", "answer-input");
    document.body.appendChild(x);

    document.getElementById('check-answer-button').addEventListener('click', questions[n].checkAnswer.bind(this));

})();