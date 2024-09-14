browser.contextMenus.create({
  id: "open-with-scihub",
  title: "Open with Sci-Hub",
  contexts: ["link"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-with-scihub") {
    const scihubUrl = "https://sci-hub.se/";
    const targetUrl = info.linkUrl;
    const fullUrl = scihubUrl + targetUrl;
    browser.tabs.create({ url: fullUrl });
  }
});

