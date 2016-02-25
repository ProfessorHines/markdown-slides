// Saves options to chrome.storage
function save_options() {
  var ratio = document.getElementById('ratio').value;
  var navScroll = document.getElementById('scroll').checked;
  var navTouch = document.getElementById('touch').checked;
  var navClick = document.getElementById('click').checked;
  chrome.storage.sync.set({
    presentationRatio: ratio,
    navScroll: scroll
    navTouch: touch
    navClick: click
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default values
  chrome.storage.sync.get({
    presentationRatio: '4:3',
    navScroll: true
    navTouch: true
    navClick: false
  }, function(items) {
    document.getElementById('ratio').value = items.presentationRatio;
    document.getElementById('scroll').checked = items.navScroll;
    document.getElementById('touch').checked = items.navTouch;
    document.getElementById('click').checked = items.navClick;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
