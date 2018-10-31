 $(document).ready(function() {

  // Initialize Firebase
   var config = {
     apiKey: "AIzaSyBYSn6JjLBaA45ul-cqG7AlCRuEOzMbnKk",
      authDomain: "train-time-340bd.firebaseapp.com",
      databaseURL: "https://train-time-340bd.firebaseio.com",
      projectId: "train-time-340bd",
      storageBucket: "train-time-340bd.appspot.com",
      messagingSenderId: "671665054037"
   };
   
   firebase.initializeApp(config);

   // Create a variable to reference the database
   var database = firebase.database();


   // Button for adding trains
  $(".btn-primary").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#input-train").val().trim();
  var trainDestination = $("#input-destination").val().trim();
  var trainTime = moment($("#input-time").val().trim().format("hh:mm"));
  var trainMinutes = $("#input-minutes").val().trim();

   // Creates local "temporary" object for holding employee data
   var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    minutes: trainMinutes
  };

  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.minutes);
  })

    // GOTHAM RAIL //

    // Assumptions

    var tFrequency = 10;
    console.log(tFrequency);
    $(".gotham-frequency").text(tFrequency);

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
      var tMinutesAway = tFrequency - tRemainder;
      console.log("MINUTES TILL TRAIN: " + tMinutesAway);
      $(".gotham-minutesaway").html(tMinutesAway);

      // Next Train
      var nextTrain = moment().add(tMinutesAway, "minutes");
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
      
      $(".gotham-nextarrival").text(moment(nextTrain).format("hh:mm"));

    
    // THE METRO //

     // Assumptions

      var tFrequency = 15;
      console.log(tFrequency);
      $(".metro-frequency").text(tFrequency);
  
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
        var tMinutesAway = tFrequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesAway);
        $(".metro-minutesaway").html(tMinutesAway);
  
        // Next Train
        var nextTrain = moment().add(tMinutesAway, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
        
        $(".metro-nextarrival").text(moment(nextTrain).format("hh:mm"));


    // ARROWHEAD //

      // Assumptions

      var tFrequency = 17;
      console.log(tFrequency);
      $(".arrow-frequency").text(tFrequency);
  
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
        var tMinutesAway = tFrequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesAway);
        $(".arrow-minutesaway").html(tMinutesAway);
  
        // Next Train
        var nextTrain = moment().add(tMinutesAway, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
        
        $(".arrow-nextarrival").text(moment(nextTrain).format("hh:mm"));


  });