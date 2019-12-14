'use strict';

const STORE = [
  // Question 1
  {
    question: "Question 1: Who kills loudmouth Morrie?",
    choices: [
      "Henry",
      "The Joker",
      "Tommy",
      "Vinnie"
    ],
    correct: 0
  },

  // Question 2
  {
    question: "Question 2: What African-American actor played Stack Edwards?",
    choices: [
      "Morgan Freeman",
      "Samuel L. Jackson",
      "Ice T",
      "Michael Jordan"
    ],
    correct: 1
  },


  // Question 3
  {
    question: "Question 3: What U.S city does Henry heavily distribute cocaine to?",
    choices: [
      "Pittsburgh", //correct
      "Los Angeles",
      "Seattle",
      "Dallas"
    ],
    correct: 0
  },


  // Question 4
  {
    question: "Question 4: How many F-bombs are dropped during the course of the film?",
    choices: [
      "108",
      "203",
      "90",
      "300"
    ],
    correct: 3
  },


  // Question 5
  {
    question: "Question 5: Who directed the movie Goodfellas?",
    choices: [
      "Hugh Jackman",
      "Martin Scorsesse",
      "Danny Devito",
      "JK Rowling"
    ],
    correct: 1
  },
];


let current = 0;
let score = 0;



// Create an event listener to listen for a click on the Start Quiz button
function handleStartButtonClicked() {
  $(".start-btn").click(function () {
    $('.start-quiz').hide();
    $('.next').hide();
    $('.questions-container').show();
    displayQuestion();
    $('.score').text('SCORE: ' + score + '/5');
  });
}

// Create an event listener to listen for a click on the Next button
function handleNextButtonClicked() {
  $(".next-btn").click(function (event) {
    $('p.incorrect').text('').hide();
    displayQuestion();
    $('p.niceJob').hide();
    $('form.list').show();
    $('.next').hide();
    $('.submit-container').show();
  });
}

// Look into implimenting this way of seeing if the answer is checked

// //$('#element').click(function() {
//  if($('#radio_button').is(':checked')) { alert("it's checked"); }
// });

// Submit event listener to check answer and show the next question. It also
// requires a selection to be made

function handleSubmitButtonClicked() {
  $(".submit-btn").click(function (event) {
    if ($('input.selected').length) {
      let answer = $('input.selected').attr('id');
      checkAnswer(answer);
      $('.next').show();
      $('.submit-container').hide();
    } else {
      alert('Please select an answer');
    }
  });
}

// Create an event listener to listen for a click on the Retake button and refresh the page
function handleRestartButtonClicked() {
  $(".restart-btn").click(function () {
    location.reload();
  });
}

//Click listener when clicking on a form item to compare to the correct answer
function handleformButtonClicked() {
  $('form.list').on('click', 'input', function (event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });
}


// Function to render a question to the DOM
function displayQuestion() {
  if (current < STORE.length) {
    let listQuestion = STORE[current];
    $('h2').text(listQuestion.question);
    $('form.list').html('');
    for (let i = 0; i < listQuestion.choices.length; i++) {
      $('form.list').append('<div><label><input type="radio" name="answer" id = "' + i + '" />' + listQuestion.choices[i] + '</label></div>');
    }
  } else {
    // show summary that says how many you got correct
    displayScore();
  }
}

// Checks answer from the array to see if the one chosen is the one that is correct
function checkAnswer(answer) {
  let listQuestion = STORE[current];
  $('form.list').hide();
  if (listQuestion.correct == answer) {
    score++;
    $('p.niceJob').show();
  } else {
    $('p.incorrect').show();
    $('p.incorrect').text('The correct answer is ' + listQuestion.choices[listQuestion.correct]);
    $('listQuestion.correct').addClass('correct');
  }
  $('.score').text('SCORE: ' + score + '/5');
  current++;
}

//Display final score
function displayScore() {
  $('.questions-container').hide();
  $('.end-quiz').show();
  $('.end-score').text("DONE! Your score is: " + score + '/5');
}

function handleQuiz() {
  handleStartButtonClicked();
  handleNextButtonClicked();
  handleSubmitButtonClicked();
  handleRestartButtonClicked();
  handleformButtonClicked();
  displayQuestion();
}

$(handleQuiz);