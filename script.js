//your JS code here. If required.

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('fname');

    inputField.addEventListener('blur', () => {
        const inputValue = inputField.value;
        const upperCaseValue = inputValue.toUpperCase();
        
        alert("Enter your name: " + upperCaseValue);
    });
});
