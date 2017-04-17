document.addEventListener('DOMContentLoaded', function() {
  var testButton = document.getElementById('btn');
  testButton.addEventListener('click', function() {
    document.getElementById('txt').innerHTML = 'Text changed.';
    /*
    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      var para = document.createElement("p");
      var node = document.createTextNode("This is new.");
      para.appendChild(node);
      d.body.appendChild(para);
      f.submit();
    });
    */ 
  });
}, false);
