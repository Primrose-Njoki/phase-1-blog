// 1. Smooth Scrolling Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 2. Click Demo Box
  const clickDemo = document.getElementById('click-demo');
  clickDemo.addEventListener('click', function() {
    this.textContent = 'Clicked!';
    this.style.backgroundColor = '#e91e63';
  });
  
  // 3. Mouse Events Demo
  clickDemo.addEventListener('mouseenter', () => {
    clickDemo.style.transform = 'scale(1.1)';
  });
  
  clickDemo.addEventListener('mouseleave', () => {
    clickDemo.style.transform = 'scale(1)';
  });
  
  // 4. Form Submission
  const form = document.getElementById('subscribe-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thanks for subscribing with ${email}!`);
    this.reset();
  });
  
  // 5. Keyboard Events
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.body.style.backgroundColor = '#f0f0f0';
      setTimeout(() => {
        document.body.style.backgroundColor = '';
      }, 500);
    }
  });
  
  // 6. Event Delegation Example
  document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.createElement('ul');
    taskList.innerHTML = `
      <h3>Try clicking these tasks:</h3>
      <li>Learn event bubbling</li>
      <li>Practice event delegation</li>
      <li>Build a custom event system</li>
    `;
    document.querySelector('main').appendChild(taskList);
  
    taskList.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
      }
    });
  });