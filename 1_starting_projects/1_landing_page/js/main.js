/* Main Function That Runs Other Functions*/
function mainFunction() {
    load_partials();
    setTimeout('load_scripts()', 1000);
}




/* Function To Load External HTML _partials using Abstract Method */
function load_partials() {
    $("#nav").load("/1_starting_projects/1_landing_page/_partials/main_partials/0_navigation.html");
    $("#about").load("/1_starting_projects/1_landing_page/_partials/1_introduction.html");
    $("#my-life").load("/1_starting_projects/1_landing_page/_partials/2_my_life.html");
    $("#interests").load("/1_starting_projects/1_landing_page/_partials/3_my_interest.html");
    $("#norms").load("/1_starting_projects/1_landing_page/_partials/4_my_norms.html");

}



/* Function To Load External Javascript Files*/
function load_scripts() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');

    script.src = '/1_starting_projects/1_landing_page/js/jquery.min.js';
    head.appendChild(script);



}


(function ($) {
    // variables
    elementWidth = $('ul').width(),
        containerWidth = $('nav').width(),
        difference = elementWidth - containerWidth,
        finalWidth = difference * 1.5,
        element = $('ul');

    // active on click
    $('li').on('click', function () {
        $('li').removeClass('active');
        $(this).addClass('active');
    });

})(jQuery);


$(function () {

    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });

});



