chrome.storage.onChanged.addListener(({ enabled }) => {
    if (enabled) {
        lichessResigner();
    }
});

chrome.storage.sync.get("enabled", ({ enabled }) => {
    if (enabled) {
        lichessResigner();
    }
});

function lichessResigner() {

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const elements = document.getElementsByClassName("time");
                const timer = elements[1];
                const isTenth = timer.getElementsByTagName("tenths");
                if (isTenth.length > 0) {
                    console.log("checking if tenth is available");
                    const timerString = timer.textContent;
                    const [minutes, secondsWithMilliseconds] = timerString?.split(':') as string[];
                    const [seconds, milliseconds] = secondsWithMilliseconds.split('.') as string[];

                    const minutesInt = parseInt(minutes, 10);
                    const secondsInt = parseInt(seconds, 10);
                    const millisecondsInt = parseInt(milliseconds, 10);
                    if (secondsInt < 2) {
                        var resignElements = document.getElementsByClassName("resign") as HTMLCollectionOf<HTMLElement>;
                        var resignButton = resignElements[0] as HTMLElement;
                        resignButton.click();
                        resignButton.click();
                    }
                } else {
                    console.log("checking");
                }
            }
        });
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
}