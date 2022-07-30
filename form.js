const btn = document.querySelector('.btn');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');


// Contact Form ValidationStatus
btn.addEventListener('click', () => {
    if(firstName.value === '' || lastName.value === '') {
        alert('Please fill in all fields');
    }else {
        alert('Thank you for your submission');
    }
    // alert('Thank you for contacting us!');
})
