// code that runs in the current opened tab
/*
var timers = document.getElementsByClassName("time") as HTMLCollectionOf<HTMLElement>;
var timer = timers[1] as HTMLElement;
const isTenth = timer.getElementsByTagName("tenths")
if(isTenth.length > 0) {
    var sec = isTenth[0]?.textContent;
    const newSec = sec?.slice(1);
    var secInt = parseInt(newSec ?? '0');
    if(secInt == 3) {
        // resign
        var resignElements = document.getElementsByClassName("resign") as HTMLCollectionOf<HTMLElement>;
        var resignButton = resignElements[0] as HTMLElement;
        resignButton.click();
        resignButton.click();
    }
}
*/
console.log("extension loaded - lichess resigner");






const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            const elements = document.getElementsByClassName("time");
            const timer = elements[1];
            const isTenth = timer.getElementsByTagName("tenths");
            if (isTenth.length > 0) {
                console.log("checking if tenth is available");
                const timerString = timer.textContent;
                const [minutes, secondsWithMilliseconds] = timerString?.split(':') as  string[];
                const [seconds, milliseconds] = secondsWithMilliseconds.split('.') as string[];

                const minutesInt = parseInt(minutes, 10);
                const secondsInt = parseInt(seconds, 10);
                const millisecondsInt = parseInt(milliseconds, 10);
                if(secondsInt < 2) {
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