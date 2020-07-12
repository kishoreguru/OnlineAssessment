var questionBank = [
    {
		question: "1. Which crop is sown on the largest area in India ?",
		answers: {
			a: 'Sugarcane',
			b: 'Wheat',
            c: 'Rice',
            d: 'Maize'
		},
		correctAnswer: 'c'
	},
    {
        question: "2. The world smallest country ?",
        answers: {
            a: 'Maldives',
            b: 'Vatican city',
            c: 'New zealand',
            d: 'Srilanka'
        },
        correctAnswer: 'b'
    },
    {
		question: "3. In which place the currency notes are printed ?",
		answers: {
			a: 'Delhi',
			b: 'Hyderabad',
            c: 'Nagpur',
            d: 'Nasik'
		},
		correctAnswer: 'd'
    },
    {
		question: "4. India's first satellite Aryabhata was launched from ?",
		answers: {
			a: 'Soviet Union',
			b: 'America',
            c: 'India',
            d: 'Israel'
		},
		correctAnswer: 'a'
    },
    {
		question: "5. What was the earlier name of music director A.R. Rehman ?",
		answers: {
			a: 'Dev kumar',
			b: 'Raj kumar',
            c: 'Dinesh',
            d: 'Dileep kumar'
		},
		correctAnswer: 'd'
    },
    {
		question: "6. Who is the first Indian to take a hat trick in an international test ?",
		answers: {
			a: 'Bumrah',
			b: 'Kumble',
            c: 'Zaheer Khan',
            d: 'Harbhajan Singh'
		},
		correctAnswer: 'd'
	},
    {
		question: "7. Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence ?",
		answers: {
			a: 'Alan Turing',
			b: 'Stevart',
            c: 'Boole',
            d: 'Charles Babbage'
		},
		correctAnswer: 'a'
    },
    {
		question: "8. Who is the first Indian to take a hat trick in an international test ?",
		answers: {
			a: 'Graphite',
			b: 'Zinc',
            c: 'Charcoal',
            d: 'Phosphorous'
		},
		correctAnswer: 'a'
    },
    {
		question: "9. Where did the 1st ODI match was played in India ?",
		answers: {
			a: 'Delhi',
			b: 'Kolkata',
            c: 'Ahmedabad',
            d: 'Mumbai'
		},
		correctAnswer: 'c'
    },
    {
		question: "10. The National Song of India was composed by ?",
		answers: {
			a: 'Bankim Chatterji',
			b: 'Jai Shankar',
            c: 'Ajay Dev',
            d: 'Iqbal'
		},
		correctAnswer: 'a'
	},
];

var testContainer = document.getElementById('Test');
var answersContainer = document.getElementById('Result');
var submitButton = document.getElementById('submit');

generateQuiz(questionBank, testContainer, answersContainer, submitButton);

function generateQuiz(questions, testContainer, answersContainer, submitButton){

    function displayQuestions(questions, testContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            answers = [];
            for(character in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+character+'">     '
                        + character + ': '
                        + questions[i].answers[character]
                    + '    </label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        testContainer.innerHTML = output.join('');
    }


    function displayResult(questions, testContainer,answersContainer){
        
        var answerContainers = testContainer.querySelectorAll('.answers');        
        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'green';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }
        answersContainer.innerHTML = 'Your score is '+ numCorrect + ' out of ' + questions.length +'.'
        +'Answers are : 1.Rice , 2.Vatican city , 3.Nasik ,'
        +' 4.Soviet Union , 5.Dileep kumar , 6.Harbhajan Singh ,'
        +' 7.Alan Turing , 8.Graphite , 9.Ahmedabad , 10.Bankim Chatterji';
        
        
    }

    displayQuestions(questions, testContainer);
    submitButton.onclick = function(){
        displayResult(questions, testContainer, answersContainer);
    }
}