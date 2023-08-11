const today = new Date();
const yyyy = today.getFullYear();
const MM = (today.getMonth() + 1).toString().padStart(2, '0');
const dd = (today.getDate()).toString().padStart(2, '0');

const countDownDate = new Date(`${yyyy}-${MM}-${dd}T12:45:42`).getTime();

let interval = setInterval(() => {
    if (countDownDate - new Date().getTime() < 0) {
        document.querySelector(".preview-join-button").click();
        clearInterval(interval);
    }
}, 30000);