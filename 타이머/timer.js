let countDownDate = new Date("Jul 25, 2023 12:45:42").getTime();
setInterval(() => {
    if (countDownDate - new Date().getTime() < 0) {
        document.querySelector(".preview-join-button").click();
    }
}, 1000);