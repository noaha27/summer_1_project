/* Main Function That Runs Other Functions*/
function mainFunction() {
    load_partials();
    setTimeout('loadDOM()', 150);

}

function loadDOM(){
    load_styles(); 
    load_scripts();
    setTimeout('onContentLoad();', 250);
}


/* Function To Load External HTML _partials using Abstract Method */
function load_partials() {
    $("#nav").load("/1_starting_projects/4_invoice/_partials/navigation.html");
    $("#header").load("/1_starting_projects/4_invoice/_partials/header.html");
    $("#main").load("/1_starting_projects/4_invoice/_partials/main.html");
    $("#footer").load("/1_starting_projects/4_invoice/_partials/footer.html");
}

function load_subpartials(){
    $("#calculator-container").load("/5_computational_thinking_cs");
}

/* Function To Load External Stylesheets */
function load_styles() {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');

    style.href = '/1_starting_projects/4_invoice/css/_partials/navigation.css';
    style.rel = 'stylesheet'
    head.appendChild(style);
}


/* Function To Load External Javascript Files*/
function load_scripts() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');

    script.src = '/1_starting_projects/4_invoice/js/jquery.min.js';
    head.appendChild(script);

    script = document.createElement('script');
    script.src = '/1_starting_projects/4_invoice/js/bootstrap.min.js';
    head.appendChild(script);

    script = document.createElement('script');
    script.src = '/1_starting_projects/3_learn_with_us/js/min.js/bootstrap.min.js';
    head.appendChild(script);


    script = document.createElement('script');
    script.src = '/1_starting_projects/3_learn_with_us/js/min.js/popper.min.js';
    head.appendChild(script);

    script = document.createElement('script');
    script.src = '/1_starting_projects/3_learn_with_us/js/min.js/modernizr-2.6.2.min.js';
    head.appendChild(script);

    script = document.createElement('script');
    script.src = '/1_starting_projects/3_learn_with_us/js/min.js/jquery.isotope.min.js';
    head.appendChild(script);


    script = document.createElement('script');
    script.src = '/1_starting_projects/4_invoice/js/invoice.js';
    head.appendChild(script);

}
