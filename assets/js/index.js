/* Skills */
const skillsTech = document.querySelector('.skills-tech')

const skills = [
  {
    path: 'assets/img/bash.svg',
    name: 'Bash',
  },
  {
    path: 'assets/img/vsc.svg',
    name: 'VS Code',
  },
  {
    path: 'assets/img/html.svg',
    name: 'HTML',
  },
  {
    path: 'assets/img/css.svg',
    name: 'CSS',
  },
  {
    path: 'assets/img/javascript.svg',
    name: 'JavaScript',
  }
]

let html = ''

for (const skill of skills) {
  html += `
  <div class='skill'>
    <img src='${skill.path}' alt='${skill.name}'>
    <h3>${skill.name}</h3>
  </div>
`
}

skillsTech.innerHTML = html
//nav
const navbar = document.querySelector('.nav')
const menu = document.querySelector('.header__menu')
const links = document.querySelectorAll('.list-link')
navbar.addEventListener('click', function (e) {
    if (e.target.closest('.btn-open')) {
      menu.classList.toggle('show-menu')
    }
  
    if (e.target.closest('.btn-close')) {
      menu.classList.remove('show-menu')
    }
})