chrome.storage.sync.get('action', function(data) {
  // console.log('DATA', data);
  if (data.action === 'Disable' || !data.action) {
    document.body.innerHTML = document.body.innerHTML.replace(/\[\d{1,}\]|<sup.+\[.+citation needed.+\]<\/sup>/g, '');
  }
});
