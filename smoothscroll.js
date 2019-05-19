$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 900, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
    } // End if
    });
})


$(window).scroll(function() {
    if($(window).width() > 1366) {
        $(".slideopacityanim_wrapper").addClass("slideanim")
        
    } else {
        $(".slideopacityanim_wrapper").addClass("slideopacityanim")
    }
});


$(window).scroll(function() {
    if($(window).width() > 768) {
        $(".slideopacityanim").each(function() {
            var pos = $(this).offset().top;
        
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slideopacity");
            }
        });
    }  else {
        $(".slideopacityanim").removeClass("slideopacityanim")
    }
});

$(window).scroll(function() {
    if($(window).width() > 768) {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;
        
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    } else {
        $(".slideanim").removeClass("slideanim")
    }
});