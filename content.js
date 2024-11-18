function isFarmTownWindowOpen() {
    return document.querySelector(".js-window-main-container.classic_window.farm_town");
}

function setupKeyboardNavigation() {
    document.addEventListener("keydown", (event) => {
        const farmTownWindow = isFarmTownWindowOpen();
        if (!farmTownWindow) return;

        if (event.key === "]") {
            const nextButton = document.querySelector(".btn_next");
            if (nextButton) nextButton.click();
        } else if (event.key === "[") {
            const prevButton = document.querySelector(".btn_prev");
            if (prevButton) prevButton.click();
        }
    });
}

function observeFarmTownChanges() {
    const observer = new MutationObserver(() => {
        const farmTownWindow = isFarmTownWindowOpen();
        if (farmTownWindow) {
            console.log("Farm town window detected.");
        }
    });

    observer.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true,
    });
}

setupKeyboardNavigation();
observeFarmTownChanges();
