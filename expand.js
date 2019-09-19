expanded = false;

function expand() {
    collapsible = document.getElementById("BerufserfahrungCollapse");
    collapseicon = document.getElementById("collapseicon");
    if(expanded == true) {
        collapseicon.classList.remove('glyphicon-chevron-up');
        collapseicon.classList.add('glyphicon-chevron-down');
        collapsible.style.maxHeight = 0;
        expanded = false;
    } else {
        collapseicon.classList.remove('glyphicon-chevron-down');
        collapseicon.classList.add('glyphicon-chevron-up');
        collapsible.style.maxHeight = collapsible.scrollHeight + "px";
        expanded = true;
    }
}