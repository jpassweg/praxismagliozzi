function updateTab() {
    tabsize = 220;
    screensize = $(window).width();

    $(".tab").each(function() { 
        var pos = $(this).position();
        //if(tabsize == 0) tabsize = pos.left + 20;
        var width = $(this).width();
        var newpos = tabsize - pos.left;
        $(this).css("left", newpos + "px");
        $(this).css("top", -30 + "px")
        $(this).css("width", (width - tabsize) + "px");
    });
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

$(document).ready(updateTab);
//$(window).on('resize', debounce(updateTab, 200));

