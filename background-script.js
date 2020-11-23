"use strict";

browser.menus.create({
  id: "play_pause_menu_item",
  title: "Play/Pause Tab",
  documentUrlPatterns: ["https://*.youtube.com/*", "http://*.youtube.com/*"],
  contexts: ["tab"],
  onclick: (info, tab) => {
    executeContentScript(tab.id)
  }
});

async function executeContentScript(tabId) {
  await browser.tabs.executeScript(tabId, {
    file: "content-script.js"
  });
  browser.tabs.sendMessage(tabId, { message: "toggle-play-pause" });
}
