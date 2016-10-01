
function youTubeAPICall(extension, params, onSuccess){
    var url_base = "https://www.googleapis.com/youtube/v3/";
    var key = chrome.runtime.getManifest()["api_key"];
    var reqUrl = url_base + extension + "?";

    for (var jkey in params) {
        if (params.hasOwnProperty(jkey)) {
            reqUrl += jkey + "=" + params[jkey] + "&";
        }
    }

    reqUrl+="key="+key;

    var req = new XMLHttpRequest();
    req.open('GET', reqUrl);
    req.responseType = 'json';
    req.onload = function(){
        onSuccess(req.response);
    };

    req.onerror = function(){
        console.log("ERROR");
        renderStatus('ERROR');
    };

    req.send();
}


