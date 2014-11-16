updateBox = function() {

    countUrls(function(count){
        num_urls = count;

        //add code to edit number 


        document.getElementById("Later").onclick = function() {
            laterClick();
            //update picture
            num_urls = num_urls + 1;
        }
        document.getElementById("Now").onclick = function() {
            nowClick();
            if(num_urls > 0)
                num_urls = num_urls - 1;
        }
        document.getElementById("Clear").onclick = function() {
            clearUrls();
            num_urls = 0;
        }
    });

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

