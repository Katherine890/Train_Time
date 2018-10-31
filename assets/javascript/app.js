  // Initialize Firebase
 // var config = {
   // apiKey: "AIzaSyBYSn6JjLBaA45ul-cqG7AlCRuEOzMbnKk",
  //  authDomain: "train-time-340bd.firebaseapp.com",
  //  databaseURL: "https://train-time-340bd.firebaseio.com",
  //  projectId: "train-time-340bd",
  //  storageBucket: "train-time-340bd.appspot.com",
  //  messagingSenderId: "671665054037"
 // };
 // firebase.initializeApp(config);

  // Create a variable to reference the database
 // var database = firebase.database();

  // GOTHAM RAIL //

   // Assumptions
   (function() {

   var tFrequency = 10;
   console.log(tFrequency);

   // Time is 6:00 AM
   var firstTime = "06:00";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    
    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    //function update() {
    var tMinutesAway = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesAway);
    //$(".gotham-minutesaway").html(tMinutesAway);
  
    //}

    // Next Train
    //setInterval(update, 1000);

   // function update() {
  
    var nextTrain = moment().add(tMinutesAway, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    
    $(".gotham-nextarrival").html(moment(nextTrain).format("hh:mm"));
    //}

   
  
   }) ();