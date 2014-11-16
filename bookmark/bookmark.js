updateBox = function() {
    var num_urls = 0;

    document.getElementById("Later").onclick = function() {
        laterClick();
        num_urls = num_urls - 1;
    }
    document.getElementById("Now").onclick = function() {
        nowClick(siteURL); 
        num_urls = num_urls + 1;
    }
    document.getElementById("ArraySize").onclick = function() {
        arraySize(printItem);
    }
    document.getElementById("PrintItems").onclick = function() {
        printItems(printItem);
    }

}

printItem = function(item, text) {
    var itembox = document.createElement('div');
    if (!text) {
        itembox.innerHTML = item;
    } else {
        itembox.innerHTML = text + " " + item
    }
    document.body.appendChild(itembox);
}

printUrl = function(siteURL) {
    var url_txtbox = document.createElement('div');
    var url_txt = "";
    url_txt += siteURL.toString();
    url_txtbox.innerHTML = url_txt;
    document.body.appendChild(url_txtbox);
}

document.addEventListener('DOMContentLoaded', function() {
    /* Print number of items you currently have. */

    updateBox();

    /* Here, feel free to load variables and things
        from outside scripts (just put in HTML first). */
    // var greeting = document.createElement('div');
    // greeting.innerHTML = test_num; // load variable from outside script
    // document.body.appendChild(greeting);
});

