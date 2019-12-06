const STORE = [
         // Question 1
        {
            question: "1. Who kills loudmouth Morrie?",
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
            question: "2. What African-American actor played Stack Edwards?",
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
            question: "3. What U.S city does Henry heavily distribute cocaine to?",
            choices: [
                "Pittsburgh",
                "Los Angeles",
                "Seattle",
                "Dallas"
            ],
            correct: 0
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
            correct: 3
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
            correct: 1
        },
    ];


let current = 0;
let score = 0;


$(document).ready(function(){
    // Create an event listener to listen for a click on the Start Quiz button
    $(".start-btn").click(function(){
       $('.start-quiz').hide();
       $('.next').hide();
       $('.questions-container').show();
       displayQuestion();
        $('.score').text('SCORE: '+ score + '/5');
      console.log("Start Quiz button clicked");
    });
    
    // Create an event listener to listen for a click on the Next button
    $(".next-btn").click(function(event){
      console.log("Next button clicked");
      displayQuestion();
      $('.next').hide();
      $('.submit-container').show();
    });
    
    $(".submit-btn").click(function(event){
      if($('input.selected').length){
        var answer = $('input.selected').attr('id');
        checkAnswer(answer);
        $('.next').show();
        $('.submit-container').hide();
      } else {
        alert('Please select an answer');
      }
    });
    
    // Create an event listener to listen for a click on the Retake button and refresh the page
    $(".restart-btn").click(function(){
    location.reload();
      console.log("Retake button clicked");
    });
    
    //Click listener when clicking on a list item to change the color of the background
    $('form.list').on('click', 'input', function(event) {
      $('.selected').removeClass();
      $(this).addClass('selected');
    });
    
  });
  
  //***************FUNCTIONS**************
  function displayQuestion(){
    $('.question-number').text('Question Number: '+(current + 1)+"/10" );
    if(current < STORE.length){
      var listQuestion = STORE[current];
      $('h2').text(listQuestion.question);
      $('form.list').html('');
      for (var i = 0; i < listQuestion.choices.length; i++) {
        $('form.list').append('<input type="radio" id = "'+i+'">'+listQuestion.choices[i] +'</li>');
      }
    } else {
      // show summary that says how many you got correct
      displayScore();
    }
  }
  
  // Checks answer from the array to see if the one chosen is the one that is correct
  function checkAnswer(answer){
    var listQuestion = STORE[current];
    if(listQuestion.correct == answer){
      score++;
      $('input.selected').addClass('correct');
    } else {
      $('input.selected').addClass('incorrect');
      $('listQuestion.correct').addClass('correct');
    }
    $('.score').text('SCORE: '+ score + '/5');
    current++;
  }
  
  //Display score
  function displayScore(){
    $('.questions-container').hide();
    $('.end-quiz').show();
    $('.end-score').text("DONE! Your score is: " +score + '/5');
  }
  