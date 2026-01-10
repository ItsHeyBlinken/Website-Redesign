// Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        // Show success message
        showFormMessage(form, 'Thank you! Your message has been sent. We will contact you soon.', 'success');
        form.reset();
      } else {
        showFormMessage(form, 'Please fill in all required fields correctly.', 'error');
      }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(input);
      });

      input.addEventListener('input', function() {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
  });
});

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = '';

  // Remove previous error styling
  field.classList.remove('error');
  const existingError = field.parentElement.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  // Required field validation
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required.';
  }

  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address.';
    }
  }

  // Phone validation
  if (field.type === 'tel' && value) {
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
      isValid = false;
      errorMessage = 'Please enter a valid phone number.';
    }
  }

  // Show error if invalid
  if (!isValid) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = errorMessage;
    field.parentElement.appendChild(errorDiv);
  }

  return isValid;
}

function showFormMessage(form, message, type) {
  // Remove existing message
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create new message
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message ${type}`;
  messageDiv.textContent = message;
  form.insertBefore(messageDiv, form.firstChild);

  // Scroll to message
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}
