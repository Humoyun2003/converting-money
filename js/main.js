var elForm = document.querySelector('.form');
elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    var senderValue = Number(document.querySelector('.input').value);
    var senderOption = document.querySelector('.sender_select').value;
    var calculated = senderValue;
    // Convert to UZS
    if (senderOption === 'usd') {
        calculated *= 10656;
    }
    else if (senderOption === 'rub') {
        calculated /= 0.00686886;
    }
    else if (senderOption === 'eur') {
        calculated *= 12587.61;
    }
    var returningOption = document.querySelector('.returning_select').value;
    var result = calculated;
    if (returningOption === 'usd') {
        result /= 10656;
    }
    else if (returningOption === 'rub') {
        result *= 0.00686886;
    }
    else if (returningOption === 'eur') {
        result /= 12587.61;
    }
    document.querySelector('.calculated_input').value = result.toFixed(2);
})

