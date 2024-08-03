document.addEventListener('DOMContentLoaded', function() {
    const paymentMethodSelect = document.getElementById('payment-method');
    const cardDetails = document.getElementById('card-details');
    const mpesaDetails = document.getElementById('mpesa-details');

    paymentMethodSelect.addEventListener('change', function() {
        if (this.value === 'card') {
            cardDetails.style.display = 'block';
            mpesaDetails.style.display = 'none';
        } else if (this.value === 'mpesa') {
            cardDetails.style.display = 'none';
            mpesaDetails.style.display = 'block';
        }
    });
});
