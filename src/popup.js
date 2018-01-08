document.addEventListener('DOMContentLoaded', function() {
  var action = document.getElementById('action');
  chrome.storage.sync.get('action', function(data) {
    document.getElementById('button').addEventListener('click', toggleAction);
  });
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

function reload() {
  chrome.tabs.reload();
}
