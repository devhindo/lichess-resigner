// code for the extension panel

const enableExtensionCheckbox = document.getElementById("toggle") as HTMLInputElement;


chrome.storage.sync.get("enabled", ({ enabled }) => {
    enableExtensionCheckbox.checked = enabled;
});

enableExtensionCheckbox.addEventListener("change", () => {
    chrome.storage.sync.set({ enabled: enableExtensionCheckbox.checked });
});
