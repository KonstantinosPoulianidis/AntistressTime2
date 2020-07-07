/*!
ΣΧΟΛΗ ΕΠΙΣΤΗΜΩΝ ΠΛΗΡΟΦΟΡΙΑΣ ΤΜΗΜΑ ΕΦΑΡΜΟΣΜΕΝΗΣ ΠΛΗΡΟΦΟΡΙΚΗΣ
ΠΡΟΓΡΑΜΜΑ ΜΕΤΑΠΤΥΧΙΑΚΩΝ ΣΠΟΥΔΩΝ ΣΤΗΝ ΕΦΑΡΜΟΣΜΕΝΗ ΠΛΗΡΟΦΟΡΙΚΗ ΜΕ ΚΑΤΕΥΘΥΝΣΗ ΤΗΝ ΕΠΙΣΤΗΜΗ ΚΑΙ ΤΕΧΝΟΛΟΓΙΑ Η/Υ

Εργασία Προόδου στο μάθημα
Ανάπτυξη Εφαρμογών Ιστού και Κινητών Συσκευών
με τίτλο:ANTI – STRESS TIME
του
ΚΩΝΣΤΑΝΤΙΝΟΥ ΠΟΥΛΙΑΝΙΔΗ
Επιβλέπων Καθηγητής: κ. ΚΑΣΚΑΛΗΣ ΘΕΟΔΩΡΟΣ 
Θεσσαλονίκη ΙΟΥΝΙΟΣ-ΙΟΥΛΙΟΣ 2020*/

    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    $("#AlertX").click(function(){ 
                
                
        swal({
            title: "Προσοχή!",
            text: "Η συσκευή καρδιακών παλμών δεν εντοπίστηκε. Είστε σίγουροι ότι θέλετε να προχωρήσετε;",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Λυπούμαστε πολύ! Η διαδικασία δεν μπορεί να ολοκληρωθεί...", {
                icon: "error",
              });
            } else {
              swal("Πραγματοποιείται ακύρωση, παρακαλώ περιμένετε...");
            }
          });
     })

    
    






    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
