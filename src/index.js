import validCard from './validator';
import './style.css';

const input = document.getElementById('card-input');
const button = document.getElementById('validate-btn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const cardNumber = input.value;
  const isValid = validCard(cardNumber);

  result.textContent = isValid ? 'Card number is valid ✅' : 'Invalid card number ❌';
  result.className = isValid ? 'valid' : 'invalid';
});
