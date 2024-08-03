document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('sDPnCjZEzOqbAQz7l'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        emailjs.send('service_nzx6w0k', 'template_krkmosf', {
            name: name,
            email: email,
            message: message
        }).then((response) => {
            alert('Message sent successfully!');
        }, (error) => {
            alert('Failed to send message. Please try again later.');
        });
    });
});
