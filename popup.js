chrome.tabs.getSelected(null, function(tab) {
        var tabId = tab.id;
        var tabUrl = tab.url;
        //console.log(tab);
        var myImg = document.getElementById('qrLink');
        myImg.src = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl="+tabUrl+"&choe=UTF-8&chld=L";
});