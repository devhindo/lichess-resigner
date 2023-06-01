chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({'activate': true});
});