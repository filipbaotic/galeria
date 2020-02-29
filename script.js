$(document).ready(function() {
    $(".toggle").click(function(e) {
        e.preventDefault();
        $("body").toggleClass("dark");
        $("html").toggleClass("dark");
    });
});