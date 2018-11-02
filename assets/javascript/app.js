$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCznEGBuQ5QdfIoEa0cjP0Z5fcOFNwV4VE",
    authDomain: "traintimes-a614d.firebaseapp.com",
    databaseURL: "https://traintimes-a614d.firebaseio.com",
    projectId: "traintimes-a614d",
    storageBucket: "traintimes-a614d.appspot.com",
    messagingSenderId: "821140177715"
  };
  firebase.initializeApp(config);


  // Create a variable to reference the database
  var database = firebase.database();



  // GOTHAM RAIL //

  var tFrequency = 10;
  console.log(tFrequency);
  $(".gotham-frequency").text(tFrequency);

  // First time is 1:00 AM
  var firstTime = "01:00";

  // First Time (pushed back 1 year to make sure it comes before current time)
  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);

  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm a"));

  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);


  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);

  // Minutes Until Train
  var tMinutesAway = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesAway);
  $(".gotham-minutesaway").html(tMinutesAway);

  // Next Train
  var nextTrain = moment().add(tMinutesAway, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm a"));

  $(".gotham-nextarrival").text(moment(nextTrain).format("hh:mm a"));



  // THE METRO //

  var tFrequency = 15;
  console.log(tFrequency);
  $(".metro-frequency").text(tFrequency);

  // First time is 2:30 PM
  var firstTime = "02:30";

  // First Time (pushed back 1 year to make sure it comes before current time)
  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);

  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm a"));

  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);


  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);

  // Minutes Until Train
  var tMinutesAway = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesAway);
  $(".metro-minutesaway").html(tMinutesAway);

  // Next Train
  var nextTrain = moment().add(tMinutesAway, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm a"));

  $(".metro-nextarrival").text(moment(nextTrain).format("hh:mm a"));



  // ARROWHEAD //

  var tFrequency = 17;
  console.log(tFrequency);
  $(".arrow-frequency").text(tFrequency);

  // First time is 6:00 AM
  var firstTime = "06:00";

  // First Time (pushed back 1 year to make sure it comes before current time)
  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);

  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm a"));

  // Difference between the times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);


  // Time apart (remainder)
  var tRemainder = diffTime % tFrequency;
  console.log(tRemainder);

  // Minutes Until Train
  var tMinutesAway = tFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesAway);
  $(".arrow-minutesaway").html(tMinutesAway);

  // Next Train
  var nextTrain = moment().add(tMinutesAway, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm a"));

  $(".arrow-nextarrival").text(moment(nextTrain).format("hh:mm a"));



  // ADDING NEW TRAIN //

  // Button for adding trains
  $(".btn-primary").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#input-train").val().trim();
    var trainDestination = $("#input-destination").val().trim();
    var trainTime = $("#input-time").val().trim();
    var trainFrequency = $("#input-minutes").val().trim();

    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      time: trainTime,
      minutes: trainFrequency,
    
    };

    // Pushes new train info into Firebase
    database.ref().push(newTrain);

    // Logs everything to console
    console.log("NAME:" + newTrain.name);
    console.log("DESTINATION:" + newTrain.destination);
    console.log("FIRST TRAIN:" + newTrain.time);
    console.log("FREQUENCY:" + newTrain.minutes);
  
    // Clears all of the text-boxes
    $("#input-train").val("");
    $("#input-destination").val("");
    $("#input-time").val("");
    $("#input-minutes").val("");

  });

  // Adds train to the database and a new row 
  database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().minutes;

    // Train Info
    console.log("NAME:" + trainName);
    console.log("DESTINATION:" + trainDestination);
    console.log("FIRST TRAIN:" + trainTime);
    console.log("FREQUENCY:" + trainFrequency);


    // First Time (pushed back 1 year to make sure it comes before current time)
    var trainTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
    console.log(trainTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm a"));

    // Difference between the times
    var diffTime = moment().diff(moment(trainTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);


    // Time apart (remainder)
    var tRemainder = diffTime % trainFrequency;
    console.log(tRemainder);

    // Minutes Until Train
    tMinutesAway = trainFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesAway);
    $("<td>").text(tMinutesAway);

    // Next Train
    newNextTrain = moment().add(tMinutesAway, "minutes");
    console.log("ARRIVAL TIME: " + moment(newNextTrain).format("hh:mm a"));

    $("<td>").text(moment(newNextTrain).format("hh:mm a"));

    // Format the time
    var newNextTrainFormat = moment(newNextTrain).format("hh:mm a");


    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(newNextTrainFormat),
      $("<td>").text(tMinutesAway)
    );


    // Append the new row to the table
    $(".table-dark > tbody").append(newRow);


  })


});