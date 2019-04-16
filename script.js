$(function() {
  //All JS goes within these brackets  
  
  $("#age-submit").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 5
    if ( age >= 5 ) {
      //if age is greater than 5 show the next question
      $("#answer").text("Yes! She's a lyrical genius");
      $("#age-form").hide();
      $("h1").hide();
      $("#club-img").attr("src", "https://dontreadthisordo.files.wordpress.com/2015/10/giphy2.gif");
    } else {
      $("#answer").text("Sad! Go listen to 'All Too Well' and come back.");
      $("#age-form").hide();
      $("h1").hide();
      $("#club-img").attr("src", "https://media.giphy.com/media/uPD6M9fj1elG/giphy.gif");
    }
    
  });

  $("#neil-submit").click(function(){
    var neilAlbumsString = $("#neil-albums").val();
    var neilAlbums = parseInt(neilAlbumsString);

    if ( neilAlbums > 5 ) {
      $("#neil-form").hide();
      $("#answer").text("Yes! She's a lyrical genius");
      $("#club-img").attr("src", "https://media.giphy.com/media/zyxiqEQb6wTSg/giphy.gif");
      
    }
  });

});



