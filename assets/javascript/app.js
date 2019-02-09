$(document).ready(function(){ 
let candImages = ["assets/images/cory-booker.jpg", "assets/images/Kamala-Harris.jpg", "assets/images/Elizabeth-Warren.jpg", "assets/images/John-Delaney.jpg", "assets/images/Julián-Castro's.jpg", "assets/images/Kirsten-Gillibrand.jpg", "assets/images/Pete-Buttigieg.jpg", "assets/images/Tulsi-Gabbard.jpg" ]
// let candImages = {
//   "CoryBooker": "assets/images/cory-booker.jpg",
//   "KamalaHarris": "assets/images/Kamala-Harris.jpg"
// }

  function renderCandidateInfo(){
    $(".moreInfo").on("click", function(){
      $(".prez-area").empty();
      $(".prez-area2").empty();
      // $(".bio-area").empty();
      // $(".twitter-area").empty();
    var candidate = $(this).attr("data-name");

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + candidate + "&api-key=FkV6Md7HbnoRa4uzeePtTkOSYzxAAQ9w";
    console.log(queryURL);
    //YzYzVpon6QGyoii9V759VlLYlGRd2D8hq7Gx9gPM
    //newsapi.org 
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      let headlineDiv = "";
      let headline = "";
      let leadParagraph = "";
      let webUrl = "";
      let headlineURL = "";
      let href = "";
      // Creating an element to have the rating displayed
      var pOne = "";
      for (let index = 0; index < 4; index++) {
        headlineDiv = $(".prez-area");
        headlineURL = $(".prez-area");
        headline = response.response.docs[index].headline.main;
        console.log(headline);
        leadParagraph = response.response.docs[index].lead_paragraph;
        webUrl = response.response.docs[index].web_url;
        href = $("<a>").text(headline);
        pOne = $("<h5>").text(headline);
        href.attr("href", webUrl);
        href.attr("target", "_blank");
        href.attr("<br>");
        headlineDiv.append(pOne);
        headlineDiv.append(leadParagraph);
        headlineURL.append(href);
        console.log("HeadLine URL: ", headlineURL);
        //headlineDiv.append("<br>");
     
     
      }
      // // Retrieving the URL for the image
      // var imgURL = "https://nytimes.com/" + response.response.docs[0].multimedia[0].url;
      // // Creating an element to hold the image
      // var image = $("<img>").attr("src", imgURL);
      // image.attr("alt", "booker");
      // var candidate = $("#candidate");
      // // Appending the image
      // candidate.append(image);

    });
    var candidate2 = $(this).attr("data-name2");
    var queryURL2 = "https://cors-anywhere.herokuapp.com/http://www.opensecrets.org/api/?method=candSummary&cid=" + candidate2 + "&cycle=2020&apikey=9d3b5a4831d53ccd6a5a909d96139c38&output=json";
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(response) {
      console.log(JSON.parse(response));
      var resp = JSON.parse(response);
      //var bio = $("#bio");
      let cash_on_hand = resp.response.summary["@attributes"].cash_on_hand; 
      let debt = resp.response.summary["@attributes"].debt;
      let spent = resp.response.summary["@attributes"].spent;
      console.log("cash on hand ", cash_on_hand);
      let candInfo = $('.prez-area2');
      candInfo.addClass("h2");
      candInfo.append("Debt: $" + debt); 
      candInfo.append("<div>");
      candInfo.append("Spent: $" + spent); 
      candInfo.append("<div>");
      candInfo.append("Cash on hand: $" + cash_on_hand); 
    });

  });
  }
  renderCandidateInfo();
// Click function to jump to anchor point
$(".moreInfo").on("click", function () {
console.log("data-name");
console.log("THIS: ", this);
var candImg = $(this).attr("data-name3");
    let newImage = $('<img>');
    // let image = candImages[1];
    newImage.attr('src', candImg);
    // newImage.addClass("float-center");
    newImage.addClass("thumbnail");
    $('.prez-area').append(newImage);
    var element = document.getElementById("content");
    element.scrollIntoView({behavior: "smooth", block: "start"});
})

});