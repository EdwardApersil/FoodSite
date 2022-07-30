const email = document.querySelector('.email');
const btn = document.querySelector('#btn');

email.addEventListener('keyup', () => {
    if(email.value === '') {
        btn.disabled = true;
    }else {
        btn.disabled = false;
    }
});

// btn.textContent = 'Thanks';

btn.addEventListener('click', () => {
    if(email.value === '') {
        alert('Please subscribe to our newsletter');
    }else {
        alert('Thank you for subscribing!');
    }
    // alert('Thank you for contacting us!');
});

