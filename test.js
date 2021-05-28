window.addEventListener("message", function(event) {
  if (event.origin.idexOf('open.ac.uk') === -1) {
    // something from an unknown domain, let's ignore it
    return;
  }
  if (event.data.indexOf('getHeight') === 0) {
    var wrap = document.getElementById('wrap');
    if (wrap) {
      var height = wrap.clientHeight;
      if (height) {
        event.source.postMessage('updateHeight:' + height, event.origin);
      }
    }
  }
});
