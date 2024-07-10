document.addEventListener("DOMContentLoaded", function() {
    const birthDate = new Date('1990-02-20');
    const startEmbeddedDate = new Date('2020-09-01');
    const ageElement = document.getElementById('age');
    const ExpEmbeddedElement = document.getElementById('experience-embedded');
    const themeToggleLink = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const containerElement = document.querySelector('.container');
    const headerInfoElements = document.querySelectorAll('.header-info h1, .header-info h2');
    const sectionHeaders = document.querySelectorAll('.profile h2, .experience h2, .education h2, .sidebar h3');
    const jobHeaders = document.querySelectorAll('.job h3, .details h3');
    const dateElements = document.querySelectorAll('.date');
    const linkElements = document.querySelectorAll('.contact-info a, .download-link a, .theme-switcher a, footer');

    function calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age + ' y.o.';
    }

    function calculateExpEmbedded(startEmbeddedDate) {
        const today = new Date();
        let experience = today.getFullYear() - startEmbeddedDate.getFullYear();
        const monthDiff = today.getMonth() - startEmbeddedDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startEmbeddedDate.getDate())) {
            experience--;
        }
        return experience + '+';
    }

    function toggleTheme() {
        bodyElement.classList.toggle('dark-mode');
        containerElement.classList.toggle('dark-mode');
        headerInfoElements.forEach(el => el.classList.toggle('dark-mode'));
        sectionHeaders.forEach(el => el.classList.toggle('dark-mode'));
        jobHeaders.forEach(el => el.classList.toggle('dark-mode'));
        dateElements.forEach(el => el.classList.toggle('dark-mode'));
        linkElements.forEach(el => el.classList.toggle('dark-mode'));

        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleLink.textContent = 'Light Mode';
        } else {
            themeToggleLink.textContent = 'Dark Mode';
        }
    }

    ageElement.textContent = calculateAge(birthDate);
    ExpEmbeddedElement.textContent = calculateExpEmbedded(startEmbeddedDate);
    themeToggleLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleTheme();
    });
});
