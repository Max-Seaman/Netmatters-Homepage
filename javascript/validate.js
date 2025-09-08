function validateFormJS() {
    const form = document.getElementById('contactform');
    if (!form) return false;

    let isValid = true;
    const requiredFields = ['name', 'email', 'phone', 'message'];

    // Clear previous error states
    form.querySelectorAll('.input-control').forEach(control => {
        control.classList.remove('error');
    });

    // Validate required fields
    requiredFields.forEach(fieldName => {
        const input = form.elements[fieldName];
        const value = input.value.trim();

        if (value === '') {
            setError(input);
            isValid = false;
        }

        if (fieldName === 'email' && value !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setError(input);
                isValid = false;
            }
        }

        if (fieldName === 'phone' && value !== '') {
            const phoneRegex = /^\+?\d(?:\d|\s){6,15}$/;
            if (!phoneRegex.test(value)) {
                setError(input);
                isValid = false;
            }
        }
    });

    // Optional company field
    const companyInput = form.elements['company'];
    if (companyInput) {
        companyInput.closest('.input-control').classList.remove('error');
    }

    return isValid; // crucial for onsubmit
}

function setError(input) {
    const inputControl = input.closest('.input-control');
    if (inputControl) inputControl.classList.add('error');
}
