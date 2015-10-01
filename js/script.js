$(document).ready(function() {
    $('td img').mouseenter(function() {
        $(this).fadeTo('fast', 1.25);
    });
    $('td img').mouseleave(function() {
        $(this).fadeTo('fast', 0.75);
    });
});