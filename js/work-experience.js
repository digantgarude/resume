document.addEventListener('DOMContentLoaded', function() {
    const pillsTab = document.getElementById('v-pills-tab');
    const pillsContent = document.getElementById('v-pills-tabContent');

    // Generate tabs and content for each work experience
    work.forEach((job, index) => {
        // Create tab
        const tabId = `v-pills-company-${index + 1}`;
        const tab = document.createElement('a');
        tab.className = `slide slide-btn ${index === 0 ? 'active' : ''}`;
        tab.id = `${tabId}-tab`;
        tab.setAttribute('data-toggle', 'pill');
        tab.href = `#${tabId}`;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-controls', tabId);
        tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        tab.textContent = job.company;
        pillsTab.appendChild(tab);

        // Create content
        const content = document.createElement('div');
        content.className = `tab-pane fade ${index === 0 ? 'active show' : ''}`;
        content.id = tabId;
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-labelledby', `${tabId}-tab`);

        // Populate content
        content.innerHTML = `
            <div class="resume-content">
                <h3 class="mb-0 sub-title-h3">${job.title}</h3>
                <div class="subheading mb-3">${job.company}</div>
                <ul class="mb-0 project-li">
                    ${job.work_done.map(work => `<li>${work}</li>`).join('')}
                </ul>
                ${job.technologies.length > 0 ? `
                    <p class="mt-3">Technologies / Frameworks worked on:</p>
                    <ul class="list-inline">
                        ${job.technologies.map(tech => `
                            <li class="list-inline-item skills-btn-look">${tech}</li>
                        `).join('')}
                    </ul>
                ` : ''}
                ${job.tools_services.length > 0 ? `
                    <p>Tools and services used:</p>
                    <ul class="list-inline">
                        ${job.tools_services.map(tool => `
                            <li class="list-inline-item skills-btn-look">${tool}</li>
                        `).join('')}
                    </ul>
                ` : ''}
            </div>
            <div class="resume-date text-md-right">
                <span class="text-dark">${job.dates}</span>
            </div>
        `;
        pillsContent.appendChild(content);
    });
});