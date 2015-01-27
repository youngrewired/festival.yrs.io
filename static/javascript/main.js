$(document).ready(function() {

    $("#header #nav").hide();

    $("#header .menu").click(function() {
    	event.stopPropagation();
        $("#header #nav").slideToggle("slow");
    });

    $(document).click(function() {
    	$("#header #nav").slideUp("slow");
    });

});

$(function() {
    $('.banner').unslider({
        delay: 6000
    });
});

var unslider = $('.banner').unslider();

