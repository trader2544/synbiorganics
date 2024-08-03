document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        questionButton.addEventListener('click', () => {
            const isActive = answer.style.display === 'block';

            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.display = 'none';
            });

            if (!isActive) {
                answer.style.display = 'block';
            }
        });
    });
});
