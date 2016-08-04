document.addEventListener('DOMContentLoaded', function() {
  // var button = document.getElementById('button');
  var action = document.getElementById('action');
  chrome.storage.sync.get('action', function(data) {
    if (data.action) {
      action.innerHTML = data.action;
    }
  });
  document.getElementById('button').addEventListener('click', toggleAction);
});

function toggleAction() {
  if (action.innerHTML.trim() === 'Disable') {
    action.innerHTML = 'Enable';
    chrome.storage.sync.set({'action': 'Enable'}, reload);
  } else {
    action.innerHTML = 'Disable';
    chrome.storage.sync.set({'action': 'Disable'}, reload);
  }
}

function log(content) {
  chrome.extension.getBackgroundPage().console.log(content);
}

function reload() {
  chrome.tabs.reload();
}
