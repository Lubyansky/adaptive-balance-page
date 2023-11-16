const dropdownListner = function (dropdownElement) {

    const dropdownListsList = document.querySelectorAll(".footer__list");
    const parentNode = dropdownElement.parentElement

    for (let dropdownList of dropdownListsList) {
        if(parentNode.contains(dropdownList)){
            parentNode.classList.contains('block') ? parentNode.classList.remove('block') : parentNode.classList.add('block');
        }
    }
};

const setDropdownListner = function(dropdownElementsList, boundDropdownListnerArray){
    for (let dropdownElement of dropdownElementsList) {
        dropdownElement.addEventListener('click', boundDropdownListnerArray.get(dropdownElement))
    }
};

const removeDropdownListner = function(dropdownElementsList, boundDropdownListnerArray){
    for (let dropdownElement of dropdownElementsList) {
        dropdownElement.removeEventListener('click', boundDropdownListnerArray.get(dropdownElement));
    }
};

const dropdownElementsList = document.getElementsByClassName('footer__title');

const boundDropdownListnerArray = new Map()
for (let dropdownElement of dropdownElementsList) {
    boundDropdownListnerArray.set(dropdownElement, dropdownListner.bind(null, dropdownElement));
}

if (window.innerWidth <= 600) {
    setDropdownListner(dropdownElementsList, boundDropdownListnerArray);
}

window.addEventListener('resize', function () {
    if (window.innerWidth <= 600) {
        setDropdownListner(dropdownElementsList, boundDropdownListnerArray);
    } else {
        removeDropdownListner(dropdownElementsList, boundDropdownListnerArray);
    }
});