chrome.tabs.onUpdated.addListener(function(id, info, tab){
  console.log('INFO', info.favIconUrl);
  if (info.favIconUrl && /wikipedia\.org/.test(info.favIconUrl)) {
    chrome.pageAction.show(tab.id);
  }
});
