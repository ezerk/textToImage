document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let type = form.type.value;
        let random = form.random.checked;
        if (!random) {
            httpGetAsync('/oath/asText?type=' + type, previewResult);
        }
        else {
            previewResult(false, type)
        }
        event.preventDefault();
    }, false);
});

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function previewResult(text, type) {
    var preview = document.querySelector('#preview');
    preview.style.display = "block";
    preview.style.minHeight = "120px";
    var img = preview.querySelector("img");
    img.src = location.protocol + '//' + window.location.host + "/oath?type=" + (type ? type : "") + (text ? "&oath=" + text : "") + "&r=" + Math.random().toString(36).substring(10);
    var codePreview = document.querySelector('#code-wrap');
    codePreview.style.display = "block";
    codePreview.querySelector("#code-preview").innerText = img.src;
}

function copyCode() {
    var range = document.createRange();
    range.selectNodeContents(document.querySelector("#code-preview"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    document.querySelector("#copy-code").innerText = "Copied!"
    setTimeout(function(){    document.querySelector("#copy-code").innerText = "Copy your oath!"
    },1000)
}