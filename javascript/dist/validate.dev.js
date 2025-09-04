"use strict";

var form = document.getElementById('contactform');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var form = event.target;
  var requiredFields = ['name', 'email', 'phone', 'message'];
  var isValid = true; // Clear previous states

  form.querySelectorAll('.input-control').forEach(function (control) {
    control.classList.remove('error', 'success');
  }); // Validation for each field in the array

  for (var _i = 0, _requiredFields = requiredFields; _i < _requiredFields.length; _i++) {
    var fieldName = _requiredFields[_i];
    var input = form.elements[fieldName];
    var value = input.value.trim();

    if (value === '') {
      setError(input);
      isValid = false;
    } else {
      setSuccess(input);
    }

    if (fieldName === 'email') {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (value !== '' && !emailRegex.test(value)) {
        setError(input);
        isValid = false;
      }
    }
  } // Separate validation for the phone number as its not a required field


  var phoneInput = document.getElementById('phone');
  var phoneValue = telephoneInput.value.trim();
  var phoneRegex = /^\+?\d(?:\d|\s){6,15}$/;

  if (phoneValue === '') {
    // If field is cleared, remove both error and success classes
    var inputControl = phoneInput.parentElement;
    inputControl.classList.remove('error', 'success');
  } else if (!phoneRegex.test(phoneValue)) {
    setError(phoneInput);
    isValid = false;
  } else {
    setSuccess(phoneInput);
  } // Alert message when everything is correct


  if (isValid) {
    alert('Form submitted successfully!'); // will add form.submit() here when needed 
    // Reset the form fields

    form.reset(); // Remove success classes

    var inputControls = form.querySelectorAll('.input-control');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = inputControls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var control = _step.value;
        control.classList.remove('success');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}); // Functions for the error and success messages

function setError(input) {
  var inputControl = input.parentElement;
  inputControl.classList.remove('success');
  inputControl.classList.add('error');
}

function setSuccess(input) {
  var inputControl = input.parentElement;
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
}
//# sourceMappingURL=validate.dev.js.map
