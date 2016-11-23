chrome.storage.sync.get('action', function(data) {
  if (data.action === 'Disable' || !data.action) {
    document.body.innerHTML = document.body.innerHTML.replace(/\[\d{1,}\]|\[fn\s\d{1,}\]|<sup.+\[.+citation needed.+\]<\/sup>/g, '');
  }
});
