async function handleBgScriptMessage(request, sender, sendResponse) {
  switch(request.message) {
    case "toggle-play-pause":
      handleTogglePlayPause();
      browser.runtime.onMessage.removeListener(handleBgScriptMessage);
      break;
    default:
      console.log(`Got an unknown messsage: ${request.message}`)
  }
}

async function handleTogglePlayPause() {
  let video = document.querySelector("video");
  if (video.src) {
    video.paused ? await video.play() : await video.pause();
  }
}

browser.runtime.onMessage.addListener(handleBgScriptMessage);
