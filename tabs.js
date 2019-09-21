function updateTab() {
    tabsize = 170;
	screensize = $(window).width();
	leftPadding = ((screensize - 808) / 2);

	$("#BerufserfahrungBig").css("padding-left", leftPadding + "px");

    $(".tab").each(function() { 
        var newpos = tabsize;
        $(this).css("left", newpos + "px");
        $(this).css("top", -30 + "px")
		$(this).css("width", (808 - tabsize) + "px");
	});
}

$(document).ready(updateTab);
$(window).on('resize', updateTab);

