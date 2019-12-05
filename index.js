const STORE = {
    questions: [
        
        // Question 1
        {
            question: "1. Who kills loudmouth Morrie?",
            choices: [
                "Henry",
                "The Joker",
                "Tommy",
                "Vinnie"
            ],
            answer: "Henry"
        },
       
        // Question 2
        {
            question: "2. What African-American actor played Stack Edwards?",
            choices: [
                "Morgan Freeman",
                "Samuel L. Jackson",
                "Ice T",
                "Michael Jordan"
            ],
            answer: "Samuel L. Jackson"
        },
    
    
         // Question 3
         {
            question: "3. What U.S city does Henry heavily distribute cocaine to?",
            choices: [
                "Pittsburgh",
                "Los Angeles",
                "Seattle",
                "Dallas"
            ],
            answer: "Pittsburgh"
        },
    

         // Question 4
         {
            question: "4. How many F-bombs are dropped during the course of the film?",
            choices: [
                "108",
                "203",
                "90",
                "300"
            ],
            answer: "300"
        },
    
    
     // Question 5
        {
            question: "5. Who directed the movie Goodfellas?",
            choices: [
                "Hugh Jackman",
                "Martin Scorsesse",
                "Danny Devito",
                "JK Rowling"
            ],
            answer: "Martin Scorsesse"
        }
    
    ],
};

//These variables will store the quiz score and current question being displayed

let currentQuestion = 0;
let score = 0;


//When a user clicks the start button, the quiz will begin

function startQuiz() {
    $('#startbtn').on('click', function (event) { 
        renderQuestion();
});
}


// This function will render the proper question to the DOM
function renderQuestion() {
    let question = STORE.questions[STORE.currentQuestion];

    const questionHtml = $(`
    <form id="js-questions" class="question-form">
        <fieldset>
            <legend>${question.question}</legend>
        </fieldset>

    </form>`);
}



startQuiz();