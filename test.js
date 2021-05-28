window.parent.addEventListener("message", function(event) {
  if (event.origin.indexOf('open.ac.uk') === -1) {
    // something from an unknown domain, let's ignore it
    return;
  }
  if (typeof event.data === 'string' && event.data.indexOf('getHeight') === 0) {
    var contain = window.parent.document.getElementById('mediaContainer');
    if (contain) {
      var height = contain.clientHeight;
      if (height) {
        event.source.postMessage('updateHeight:' + height, event.origin);
      }
    }
  }
});
