var old = console.log;
var logger = document.getElementById('logBox');

var server = 'learnJS/';
console.log = function (message) {
    if (typeof message == 'object') {
        logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
    } else {
        logger.innerHTML += message + '<br />';
    }
}


var fn = '../script1.js';

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
   return result;
}


function loadScript(script) {
    var path = script+'.js';    
    document.getElementById('codeBox').innerHTML = loadFile(path);
    format();
}
