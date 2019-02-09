$(document).ready(function(){ 
  $(".moreInfo").on("click", function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKMEPrgX65DV8SM-AHeOB2mgVAF0XewPE",
    authDomain: "whosrunning-88d3e.firebaseapp.com",
    databaseURL: "https://whosrunning-88d3e.firebaseio.com",
    projectId: "whosrunning-88d3e",
    storageBucket: "whosrunning-88d3e.appspot.com",
    messagingSenderId: "541971799460"
  };
  firebase.initializeApp(config);

    let cid = "";
    let fname= "";
    let lname = "";
    let bio = "";
    
    // $("#user-input1").on("click", function(event) {
    //   // Don't refresh the page!
    //   event.preventDefault();
  
      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      // cid = $("#cid")
      //   .val()
      //   .trim();
      // fname = $("#fname")
      //   .val()
      //   .trim();
      // lname = $("#lname")
      //   .val()
      //   .trim();
      // bio = $("#bio")
      //   .val()
      //   .trim();
  
    // //   database.ref().push({
    // //     cid: cid,
    // //     fname: fname,
    // //     lname: lname,
    // //     bio: frequency,
    // //     daded: firebase.database.ServerValue.TIMESTAMP
    // //   });
    // });
  
  
  // Create a variable to reference the database
  var database = firebase.database();
  
  
    database.ref().child("whosrunning-88d3e").orderByChild("cid").equalTo("N00035267").on(
      "value",
      function(snapshot) {  
        console.log(snapshot);
        
        //var name = snapshot.val().fname + " "  + snapshot.val().lname;
        console.log("name " + name);
        $(".bio-area").append(snapshot.val().cid);
        console.log(cid);
        
        // $("#fname").append(snapshot.val().fname);
        // $("#lname").append(snapshot.val().lname);
        //$(".bio-area").append(name);
       // $(".bio-area").append(snapshot.val().bio);  
        //console.log("bio " + bio);
        

      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
    database.ref().child("whosrunning-88d3e").orderByChild("cid").equalTo("N00035267").on("child_added", function (snapshot) { 
            $(".bio-area").append(snapshot.val().cid);
            $(".bio-area").append(snapshot.val().fname);
            $(".bio-area").append(snapshot.val().lname);
            $(".bio-area").append(snapshot.val().bio);
     
      })
  //   firebase.database().ref().on("child_added", function (snapshot) { 
  //       $(".bio-area").append(snapshot.val().cid);
  //       $(".bio-area").append(snapshot.val().fname);
  //       $(".bio-area").append(snapshot.val().lname);
  //       $(".bio-area").append(snapshot.val().bio);
 
  // })
});
  
});
    
  
  