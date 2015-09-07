chrome.storage.local.get(null, function(data) {
  if(!(data["compassionomaticDisabled"] == true)) {
    if(data["compassionomaticShowMarker"] == true) {
      var marker = '*';
    }
    else {
      var marker = '';
    }
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
          var text = node.nodeValue;
          var replacedText = text.replace(/\bmigrant/g, marker + 'refugee').
                                  replace(/\bMigrant/g, marker + 'Refugee').
                                  replace(/\bMIGRANT/g, marker + 'REFUGEE');
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }
  }
});

