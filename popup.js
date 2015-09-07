window.addEventListener("load", function() {
  var disabledBox = document.getElementById("extensionDisabled");
  var showMarkerBox = document.getElementById("showMarker");

  chrome.storage.local.get(null, function(data) {
    console.log(data);
    if(data["compassionomaticDisabled"] == true) {
      disabledBox.checked = true;
      chrome.browserAction.setIcon({ path: "icon24grey.png" });
    }
    if(data["compassionomaticShowMarker"] == true) {
      showMarkerBox.checked = true;
    }
  });

  disabledBox.addEventListener("change", function() {
    if(disabledBox.checked) {
      chrome.browserAction.setIcon({ path: "icon24grey.png" });
    }
    else {
      chrome.browserAction.setIcon({ path: "icon24.png" });
    }
    chrome.storage.local.set({ "compassionomaticDisabled": disabledBox.checked });
  });

  showMarkerBox.addEventListener("change", function() {
    chrome.storage.local.set({ "compassionomaticShowMarker": showMarkerBox.checked });
  });
});