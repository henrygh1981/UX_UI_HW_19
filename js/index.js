console.log("index.js file for javascript is loaded correctly!");
$("#download_button").click(function() {
    alert("You clicked to download.");
});
$(document).ready(function(){
    $("#download_button").animate({
        width: "70%",
        opacity: 0.9,
        fontSize: "2em",
      }, 1000, function() {
        // Animation complete.
    });
    $("#download_button").hover(function(){
        alert("You entered button!");
        // $(".download-button").fadeToggle("slow");
    });
});