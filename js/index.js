console.log("index.js file for javascript is loaded correctly!");
$("#download_button").mouseenter(function() {
    // alert("You clicked to download.");
    // $(".download-button").fadeToggle("fast");
    // $("p").fadeToggle("fast");
});

$(document).ready(function(){
    $("#download_button_div").show();
    $("#download_button_div").animate({
        bottom: "0px",
      }, 1000, function() {
        // Animation complete.
    });
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
    /*
    $("#download_button").mouseenter(function(){
        // alert("You entered button!");
        // $(".download-button").fadeToggle("slow");
        $(".download-button").attr('style', 'background-color: blue !important');
    });
    */
});