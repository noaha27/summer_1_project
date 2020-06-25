
function onStart() {

    //Initialize Homescreen - Show The Initial Elements 
    hideAll();
    
    var firstTermElementId = $('#terms-list>*:first-child').attr('id');

    $('#' + firstTermElementId).addClass('clicked');
    $("#" + firstTermElementId + "Def").show();

    var terms = $(".terms");
    var result = "";

    for (var i = 0; i < terms.length; i++) {
        result = terms[i].id.toString();
        document.getElementById(result).addEventListener("click", jsEventHandler);

    }
   

}

// Hide All Function - To Hide Term And Definitions Elements 
function hideAll() {

    var terms = $(".terms");

    for (var i = 0; i < terms.length; i++) {
        // alert(    terms[i].id.toLowerCase() )
        $("#" + terms[i].id.toLowerCase() + "Def").hide();
    }

}



function setColor() {

    var terms = $(".terms");

    for (var i = 0; i < terms.length; i++) {
        $("#" + terms[i].id).removeClass('clicked');
    }

}


function jsEventHandler(e) {

    var id = e.target.id;
    var def = id + "Def";
    hideAll();
    setColor();
    $("#" + def).show();
   
    $("#" + id).addClass('clicked');
}




function showAlls(e) {

    var page = e.id.toString();

    $("#terms-data").empty();
    $("#defs-data").empty();

    if (page != "all-terms") 
    {
      
        $("#terms-data").load("/1_starting_projects/2_terms_page/_partials/terms_partials/" + page + ".html #terms-list");

        $("#defs-data").load("/1_starting_projects/2_terms_page/_partials/terms_partials/" + page + ".html #defs");
        
        setTimeout('onStart()', 200);
      
    } 
    else 
    {
        var allPages = document.getElementById("terms-dropdown");
        var pageElemenets = allPages.querySelectorAll("a")

        for (i = 0; i < pageElemenets.length; i++) {

            if (pageElemenets[i].id != "all-terms") {
              
                $("#terms-data").append($('<div>').load("/1_starting_projects/2_terms_page/_partials/terms_partials/" + pageElemenets[i].id + ".html #terms-list"));

                $("#defs-data").append($('<div>').load("/1_starting_projects/2_terms_page/_partials/terms_partials/" + pageElemenets[i].id + ".html #defs"));
            }
        }

        setTimeout('getAllTerms()', 200);
    }



}

function getAllTerms() {

    var temp, tempArr, tempTermsData,tempDefsData="";
    tempTermsData = $(" div #terms-list >*")
    tempDefsData = $(" div #defs  >*")

    $("#terms-data").empty();
    $("#defs-data").empty();

    $("#terms-data").append("<div id='terms-list'>");
    $("#defs-data").append("<div id='defs'>");

    $("#terms-list").append(tempTermsData);
    $("#defs").append(tempDefsData);

    
    onStart()

}



