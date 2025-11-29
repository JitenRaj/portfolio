document.addEventListener("DOMContentLoaded", () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      renderHero(data.hero);
      renderServices(data.services);
      renderProjects(data.projects);
      renderAbout(data.about);
      renderContact(data.contact);
    })
    .catch(error => console.error('Error loading data:', error));
});

// 1. Render Hero Section
function renderHero(hero) {
  const container = document.getElementById('hero-content');
  container.innerHTML = `
    <h1>${hero.greeting} <span></span></h1>
    <h1>${hero.intro} <span></span></h1>
    <h1><strong>${hero.name}</strong> <span></span></h1>
    <a href="${hero.ctaLink}" type="button" class="cta">${hero.ctaText}</a>
  `;
}

// 2. Render Services Section
function renderServices(services) {
  document.getElementById('service-intro').textContent = services.topText;
  
  const container = document.getElementById('services-container');
  services.items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('service-item');
    div.innerHTML = `
      <div class="icon"><img src="${item.icon}"/></div>
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
    `;
    container.appendChild(div);
  });
}

// 3. Render Projects Section
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  projects.forEach((project, index) => {
    const div = document.createElement('div');
    div.classList.add('project-item');
    
    div.innerHTML = `
      <div class="project-info">
        <h1>Project ${index + 1}</h1>
        <h2>${project.title}</h2><br>
        <p>${project.subtitle}</p>
        <p><br>${project.desc}</p>
        <a href="${project.link}" class="insta">${project.linkText}</a>
      </div>
      <div class="project-img">
        <img src="${project.img}" alt="img">
      </div>
    `;
    container.appendChild(div);
  });
}

// 4. Render About Section
function renderAbout(about) {
  document.getElementById('about-img').src = about.image;
  document.getElementById('about-title').textContent = about.title;
  document.getElementById('about-bio').innerHTML = about.bio;
}

// 5. Render Contact Section
function renderContact(contact) {
  const container = document.getElementById('contact-container');
  
  // Phone
  const phoneHTML = contact.phone.map(num => `<h2>${num}</h2>`).join('');
  // Email
  const emailHTML = contact.email.map(mail => `<h2>${mail}</h2>`).join('');
  
  container.innerHTML = `
    <div class="contact-item">
      <div class="icon"><img src="img/call.png"/></div>
      <div class="contact-info">
        <h1>Phone</h1>
        ${phoneHTML}
      </div>
    </div>
    <div class="contact-item">
      <div class="icon"><img src="img/mail.png"/></div>
      <div class="contact-info">
        <h1>Email</h1>
        ${emailHTML}
      </div>
    </div>
    <div class="contact-item">
      <div class="icon"><img src="img/map.png"/></div>
      <div class="contact-info">
        <h1>Location</h1>
        <h2>${contact.location}</h2>
      </div>
    </div>
  `;
}