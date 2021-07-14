console.log("index.js file for javascript is loaded correctly!");

$(document).ready(function(){
    $("#download_button_div").show();
    $("#download_button_div").animate(
        {
            bottom: "0px"
        },
        1000, 
        function() {
            console.log("Animation complete.");
        }
    );
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
    $( "li" ).hover(
        function() {
            $(this).css({
                "background-color": "#E9B30F",
                "text-decoration": "underline"
            });
            // $( this ).append( $( "<span> ***</span>" ) );
        }, function() {
            $(this).css({
                "background-color": "#3B87CB",
                "text-decoration": "inherit"
            });
            // $( this ).find( "span" ).last().remove();
        }
    );
    $( "#download_button" ).hover(
        function() {
            $(this).css({
                "background-color": "#E9B30F",
            });
        }, function() {
            $(this).css({
                "background-color": "#73CF06",
            });
        }
    );
});