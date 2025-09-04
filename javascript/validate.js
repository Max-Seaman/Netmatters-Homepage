const form = document.getElementById('contactform');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const form = event.target;
    const requiredFields = [
        'name',
        'email',
        'phone',
        'message',
    ]
    let isValid = true;

    // Clear previous states
    form.querySelectorAll('.input-control').forEach(control => {
        control.classList.remove('error', 'success');
    });
      
    // Validation for each field in the array
    for (let fieldName of requiredFields) {
        const input = form.elements[fieldName];
        const value = input.value.trim();

        if (value === '') {
            setError(input);
            isValid = false;
        } else {
            setSuccess(input);
        }

        if (fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value !== '' && !emailRegex.test(value)) {
                setError(input);
                isValid = false;
            }
        }
    }

    // Separate validation for the phone number as its not a required field
    const phoneInput = document.getElementById('phone');
    const phoneValue = telephoneInput.value.trim();
    const phoneRegex = /^\+?\d(?:\d|\s){6,15}$/;
    if (phoneValue === '') {
        // If field is cleared, remove both error and success classes
        const inputControl = phoneInput.parentElement;
        inputControl.classList.remove('error', 'success');
    } else if (!phoneRegex.test(phoneValue)) {
        setError(phoneInput);
        isValid = false;
    } else {
        setSuccess(phoneInput);
    }

    // Alert message when everything is correct
    if (isValid) {
        alert('Form submitted successfully!');
        // will add form.submit() here when needed 

        // Reset the form fields
        form.reset();

        // Remove success classes
        const inputControls = form.querySelectorAll('.input-control');
        for (const control of inputControls) {
            control.classList.remove('success');
        }
    }

});

// Functions for the error and success messages
function setError(input) {
    const inputControl = input.parentElement;
    inputControl.classList.remove('success');
    inputControl.classList.add('error');
}

function setSuccess(input) {
    const inputControl = input.parentElement;
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}