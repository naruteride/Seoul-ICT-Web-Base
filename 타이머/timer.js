let countDownDate = new Date("2023-08-01T12:45:42").getTime();
setInterval(() => {
    if (countDownDate - new Date().getTime() < 0) {
        document.querySelector(".preview-join-button").click();
    }
}, 30000);