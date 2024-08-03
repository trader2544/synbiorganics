document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const symptoms = document.getElementById('symptoms').value;
    const duration = document.getElementById('duration').value;
    const awareness = document.getElementById('awareness').value;
    const interest = document.getElementById('interest').value;
    const schedule = document.getElementById('schedule').value;

    // Validate form data
    if (symptoms && duration && awareness && interest && schedule) {
        // Show confirmation message
        document.getElementById('confirmationMessage').classList.remove('hidden');
        
        // Hide the form
        document.getElementById('appointmentForm').classList.add('hidden');
        
        // Here you would typically send the data to your server using an AJAX request.
        // For this example, we'll just log it to the console.
        console.log({
            symptoms,
            duration,
            awareness,
            interest,
            schedule
        });
    } else {
        alert('Please fill in all the fields.');
    }
});
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the confirmation message
    document.getElementById('confirmationMessage').classList.remove('hidden');

    // Redirect to book.html after a short delay
    setTimeout(function() {
        window.location.href = 'appoint.html';
    }, 3000); // 3 seconds delay before redirecting
});
