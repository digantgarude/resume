document.addEventListener('DOMContentLoaded', function() {
    const skillsContainer = document.getElementById('skills-container');

    skills.forEach(skillCategory => {
        const categorySection = document.createElement('div');
        categorySection.innerHTML = `
            <div class="subheading mb-3">${skillCategory.category}</div>
            <ul class="list-inline">
                ${skillCategory.items.map(skill => `
                    <li class="list-inline-item skills-btn-look">${skill}</li>
                `).join('')}
            </ul>
        `;
        skillsContainer.appendChild(categorySection);
    });
});