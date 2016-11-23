document.addEventListener('DOMContentLoaded', function() {
  var action = document.getElementById('action');
  chrome.storage.sync.get('action', function(data) {
    switch (data.action) {
      case 'Disable':
        removeCitation();
      case 'Enable':
        action.innerHTML = data.action;
    }
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

function removeCitation() {
  document.body.innerHTML = document.body.innerHTML.replace(/\[\d{1,}\]|<sup.+\[.+citation needed.+\]<\/sup>/g, '');
}
