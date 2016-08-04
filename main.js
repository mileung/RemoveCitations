chrome.storage.sync.get('action', function(data) {
  if (data.action === 'Disable' || !data.action) {
    document.body.innerHTML = document.body.innerHTML.replace(/\[\d{1,}\]|<sup.+\[.+citation needed.+\]<\/sup>/g, '');
  }
});


// var sups = document.getElementsByTagName('sup');
// for (var i = 0; i < sups.length; i++) {
//   sups[i].innerHTML = '';
// }
