onload = function () {
    for (var lnk = document.links, j = 0; j < lnk.length; j++)
        if (lnk [j].href.includes("http://",0)) {
            lnk [j].style.cssText = 'border-bottom:1px dotted  #000';
        } else {
            lnk [j].style.cssText = 'text-decoration: none';
        }
}

