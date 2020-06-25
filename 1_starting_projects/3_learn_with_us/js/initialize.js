

/* Main Function That Runs Other Functions*/
function mainFunction() {
    load_partials();
    setTimeout('loadDOM()', 150);
}

function loadDOM(){

    load_scripts();
    setTimeout(' load_styles()',150); 
}



/* Function To Load External HTML _partials using Abstract Method */
function load_partials() {
    $("#nav").load("/1_starting_projects/3_learn_with_us/_partials/main_partials/navigation.html");
    $("#header").load("/1_starting_projects/3_learn_with_us/_partials/main_partials/header.html");
  
   
   
    $("#main").load("/1_starting_projects/3_learn_with_us/_partials/main_partials/main.html");
    $(" #terms-section").load("/1_starting_projects/3_learn_with_us/_partials/project_partials/bridging_divide.html");
    
   
    $("#footer").load("/1_starting_projects/3_learn_with_us/_partials//main_partials/footer.html");
}



function load_subpartials(){
    
    $("#terms-section").load("/1_starting_projects/3_learn_with_us/_partials/project_partials/terms.html");
    $("#bridging-divide-section").load("/1_starting_projects/3_learn_with_us/_partials/project_partials/bridging_divide.html");
    $("#computational-thinking-life-section").load("/1_starting_projects/3_learn_with_us/_partials/project_partials/computational_thinking_life.html");
    $("#computational-thinking-cs-section").load("/1_starting_projects/3_learn_with_us/_partials/project_partials/computational_thinking_cs.html");
    $("#number-systems-section").load("/1_starting_projects/3_learn_with_us/_partials/project_partials/number_systems.html");
    $("#ascii-converter-section").load("/1_starting_projects/3_learn_with_us/_partials/project_partials/ascii-converter.html");

    $("#aside").load("/1_starting_projects/3_learn_with_us/_partials/main_partials/aside.html"); 
    $("#footer-subNavigation").load("/1_starting_projects/3_learn_with_us/_partials/main_partials/footer_navigation.html");

}




/* Function To Load External Stylesheets */
function load_styles() {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');


    style = document.createElement('link');
    style.href = '/1_starting_projects/3_learn_with_us/css/style.css';
    style.rel = 'stylesheet'
    head.appendChild(style);

    style.href = '/1_starting_projects/3_learn_with_us/css/main_partials/navigation.css';
    style.rel = 'stylesheet'
    head.appendChild(style);

    style = document.createElement('link');
    style.href = '/1_starting_projects/3_learn_with_us/css/main_partials/header.css';
    style.rel = 'stylesheet'
    head.appendChild(style);



    style = document.createElement('link');
    style.href = '/1_starting_projects/3_learn_with_us/css/main_partials/footer.css';
    style.rel = 'stylesheet'
    head.appendChild(style);

}




/* Function To Load External Javascript Files*/
function load_scripts() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');

    script.src = '/1_starting_projects/3_learn_with_us/js/min.js/jquery.min.js';
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
    script.src = '/1_starting_projects/3_learn_with_us/js/main.js';
    head.appendChild(script);

    
}



