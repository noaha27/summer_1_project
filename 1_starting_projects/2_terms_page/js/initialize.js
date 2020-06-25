

/* Main Function That Runs Other Functions*/
function mainFunction() {
    load_partials();
    setTimeout('loadDOM()', 200);
}

function loadDOM(){
    
    load_styles(); 
    load_scripts();
    setTimeout('onStart()', 400);
    
}



/* Function To Load External HTML _partials using Abstract Method */
function load_partials() {
    $("#nav").load("/1_starting_projects/2_terms_page/_partials/main_partials/navigation.html");
    $("#header").load("/1_starting_projects/2_terms_page/_partials/main_partials/header.html");

    $("#main").load("/1_starting_projects/2_terms_page/_partials/main_partials/main.html");
    
    $("#footer").load("/1_starting_projects/2_terms_page/_partials/main_partials/main_partials/footer.html");
}



function load_subpartials(){
    $("#dropdown-container").load("/1_starting_projects/2_terms_page/_partials/main_partials/dropDown.html");
    $("#terms-data").load("/1_starting_projects/2_terms_page/_partials/terms_partials/intro_to_cs_terms.html #terms-list");
    $("#defs-data").load("/1_starting_projects/2_terms_page/_partials/terms_partials/intro_to_cs_terms.html #defs");
}


/* Function To Load External Stylesheets */
function load_styles() {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');

    style = document.createElement('link');
    style.href = '/1_starting_projects/2_terms_page/css/index.css';
    style.rel = 'stylesheet'
    head.appendChild(style);

    style.href = '/1_starting_projects/2_terms_page/css/main_partials/navigation.css';
    style.rel = 'stylesheet'
    head.appendChild(style);

    style = document.createElement('link');
    style.href = '/1_starting_projects/2_terms_page/css/main_partials/header.css';
    style.rel = 'stylesheet'
    head.appendChild(style);



    style = document.createElement('link');
    style.href = '/1_starting_projects/2_terms_page/css/main_partials/footer.css';
    style.rel = 'stylesheet'
    head.appendChild(style);

}




/* Function To Load External Javascript Files*/
function load_scripts() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');

    script.src = '/1_starting_projects/2_terms_page/js/min.js/jquery.min.js';
    head.appendChild(script);


    script = document.createElement('script');
    script.src = '/1_starting_projects/2_terms_page/js/min.js/bootstrap.min.js';
    head.appendChild(script);


    script = document.createElement('script');
    script.src = '/1_starting_projects/2_terms_page/js/min.js/popper.min.js';
    head.appendChild(script);

    script = document.createElement('script');
    script.src = '/1_starting_projects/2_terms_page/js/min.js/modernizr-2.6.2.min.js';
    head.appendChild(script);

    script = document.createElement('script');
    script.src = '/1_starting_projects/2_terms_page/js/min.js/jquery.isotope.min.js';
    head.appendChild(script);


   
    script = document.createElement('script');
    script.src = '/1_starting_projects/2_terms_page/js/main.js';
    head.appendChild(script);

    script = document.createElement('script');
    script.src = '/1_starting_projects/2_terms_page/js/initialize.js';
    head.appendChild(script);

   
   
    
}

