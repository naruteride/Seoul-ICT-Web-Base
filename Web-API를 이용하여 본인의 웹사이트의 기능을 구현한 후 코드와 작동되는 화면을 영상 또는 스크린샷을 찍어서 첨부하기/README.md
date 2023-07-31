![이미지](./화면%20캡처%202023-07-31%20104329.png "이미지")
![이미지](./화면%20캡처%202023-07-31%20104416.png "이미지")

```js
function addCheckboxEventListeners() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', handleCheckboxClick);
    });
}

function handleCheckboxClick(event) {
    const label = event.target.parentElement;
    
    const isChecked = event.target.checked;
    
    if (isChecked) {
        label.classList.add('highlight');
    } else {
        label.classList.remove('highlight');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    addCheckboxEventListeners();
});
```