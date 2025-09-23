document.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.getElementById('project-container');

    projects.forEach(project => {
        const projectSection = document.createElement('div');
        projectSection.className = 'resume-content mb-5';
        
        projectSection.innerHTML = `
            <h3 class="mb-0 sub-title-h3">${project.title}</h3>
            ${project.details && project.details.length > 0 ? `
                <div class="mt-2">
                    <ul>
                    ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            ${project.technologies && project.technologies.length > 0 ? `
                <div class="mt-2">
                    <b>Technologies Used:</b>
                    ${project.technologies.map(tech => `${tech}`).join(', ')}    
                </div>
            ` : ''}
        `;
        
        projectContainer.appendChild(projectSection);
    });
});