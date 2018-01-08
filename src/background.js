chrome.tabs.onUpdated.addListener(function(id, info, tab){
  if (info.favIconUrl && /wikipedia\.org/.test(info.favIconUrl)) {
    chrome.pageAction.show(tab.id);
  }
});
