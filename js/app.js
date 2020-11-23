const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content Item 
function selectItem(e){
    // Remove Show 
    removeShow();

    // Remove Border 
    removeBorder();

    // Add border to current tab 
    this.classList.add('tab-border');

    // Grab content from DOM 
    const tabContent = document.querySelector(`#${this.id}-content`);
    tabContent.classList.add('show');
}

// Remove Border 
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

// Remove Show 
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}
// Listen for Tab Click 
tabItems.forEach(item => item.addEventListener('click', selectItem));