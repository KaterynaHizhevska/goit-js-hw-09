const form = document.querySelector('.contact-form');
const STORAGE_KEY = 'contact-form-state';

const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const { email, message } = JSON.parse(savedData);
      emailInput.value = email || '';
      messageInput.value = message || '';
    } catch (error) {
      console.error('Error parsing form data from localStorage', error);
    }
  }
}

function saveFormData() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function clearForm() {
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!email || !message) {
    alert('Будь ласка, заповніть всі поля.');
    return;
  }

  console.log({ email, message });
  clearForm();
}

form.addEventListener('input', saveFormData);
form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', loadFormData);