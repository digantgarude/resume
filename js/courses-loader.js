document.addEventListener('DOMContentLoaded', function() {
    const coursesContainer = document.getElementById('courses-container');

    // Create courses section
    const coursesSection = document.createElement('div');
    coursesSection.innerHTML = `
        <div class="subheading mb-3">Courses</div>
        <ul class="fa-ul mb-0 courses-part">
            ${courses.courses.map(course => `
                <li>
                    <i class="fa-li fa fa-trophy fa-icons-color"></i>
                    ${course}
                </li>
            `).join('')}
        </ul>

        <div class="subheading mb-3">Other Activities</div>
        <ul class="fa-ul mb-0 certifications-part">
            ${courses.other_activities.map(cert => `
                <li>
                    <i class="fa-li fa fa-trophy fa-icons-color"></i>
                    ${cert}
                </li>
            `).join('')}
        </ul>
    `;
    
    coursesContainer.appendChild(coursesSection);
});