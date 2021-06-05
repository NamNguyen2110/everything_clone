const tabItems = document.querySelectorAll('.tab-item');
const tabsContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    // Grab content item from DOM
    console.log(this.id);
    const tabContenItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContenItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabsContentItems.forEach(item => item.classList.remove('show'));
}


tabItems.forEach(item => item.addEventListener('click', selectItem));