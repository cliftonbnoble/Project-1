// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwkvCWqtOOsiEGvUDQgHRF0nGo83cJagQ",
    authDomain: "add-candidate.firebaseapp.com",
    databaseURL: "https://add-candidate.firebaseio.com",
    projectId: "add-candidate",
    storageBucket: "",
    messagingSenderId: "232644263654"
  };
  //firebase.initializeApp(config);
  var name = "";

  $("#addCandidate").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#input-area")
      .val()
      .trim();
    console.log(name);

    var database = firebase.database();
    database.ref().push({
      name: name,
      daded: firebase.database.ServerValue.TIMESTAMP
    });

    // database.ref().on(
    //     "value",
    //     function(snapshot) {    
    //       $("#name").append(snapshot.val().name); 
    //     },
    //     function(errorObject) {
    //       console.log("The read failed: " + errorObject.code);
    //     }
    //   );
  });

