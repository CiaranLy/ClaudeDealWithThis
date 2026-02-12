chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "send-to-claude",
    title: 'Send to Claude: "%s"',
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "send-to-claude" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText);
    chrome.tabs.create({
      url: `https://claude.ai/new?q=${query}`,
      active: false,
    });
  }
});
