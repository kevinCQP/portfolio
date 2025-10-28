/* Skills */
// const skillsTech = document.querySelector('.skills-tech')

// const skills = [
//   {
//     path: 'assets/img/bash.svg',
//     name: 'Bash',
//   },
//   {
//     path: 'assets/img/vsc.svg',
//     name: 'VS Code',
//   },
//   {
//     path: 'assets/img/html.svg',
//     name: 'HTML',
//   },
//   {
//     path: 'assets/img/css.svg',
//     name: 'CSS',
//   },
//   {
//     path: 'assets/img/javascript.svg',
//     name: 'JavaScript',
//   }
// ]

// let html = ''

// for (const skill of skills) {
//   html += `
//   <div class='skill'>
//     <img src='${skill.path}' alt='${skill.name}'>
//     <h3>${skill.name}</h3>
//   </div>
// `
// }

//skillsTech.innerHTML = html
//nav

    const navbar = document.querySelector('.header__nav');
    const menu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.list-link');

    navbar.addEventListener('click', function (e) {
        if (e.target.closest('.btn-open')) {
            menu.classList.toggle('show-menu');
            console.log(menu)
        }
    
        if (e.target.closest('.btn-close')) {
            menu.classList.remove('show-menu');
            console.log(menu)
        }
    
        if (e.target.closest('.list-link')) {
            menu.classList.remove('show-menu');
    
            for (const link of links) {
                link.parentElement.classList.remove('active');
            }
    
            e.target.parentElement.classList.add('active');
        }
    });



//light_mode
    const btnLight = document.querySelector('.btn-theme')

// Comprobar si el modo light está activado
// getItem -> Obtener datos del localStorage
const theme = window.localStorage.getItem('theme')

if (theme) {
  document.body.classList.add('light')
  changeTheme(true)
} else {
  document.body.classList.remove('light')
  changeTheme(false)
}

btnLight.addEventListener('click', function () {
  document.body.classList.toggle('light')

  if (document.body.classList.contains('light')) {
    changeTheme(true)
  } else {
    changeTheme(false)
  }
})

function changeTheme (bool) {
  if (bool) {
    btnLight.firstElementChild.classList.remove('bxs-moon')
    btnLight.firstElementChild.classList.add('bxs-sun')
    // setItem -> Almacenar datos en el localStorage
    window.localStorage.setItem('theme', 'light')
  } else {
    btnLight.firstElementChild.classList.remove('bxs-sun')
    btnLight.firstElementChild.classList.add('bxs-moon')
    // removeItem -> Eliminar datos del localStorage
    window.localStorage.removeItem('theme')
  }
}
const text = "Frontend Developer"; 
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("role").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150); // velocidad (ms)
  } else {
    setTimeout(() => {
      document.getElementById("role").innerHTML = "";
      i = 0;
      typeWriter(); // repetir el efecto
    }, 2000); // tiempo de espera antes de reiniciar
  }
}
typeWriter();


  const clouds = document.querySelectorAll('.cloud');
  
  
 
  let cloudPositions = Array.from(clouds).map(() => Math.random() * window.innerHeight);

  function animate() {
    clouds.forEach((cloud, i) => {
      cloudPositions[i] += 1.5; // velocidad de las nubes
      if (cloudPositions[i] > window.innerHeight + 200) {
        cloudPositions[i] = -200;
        cloud.style.left = Math.random() * 90 + '%'; // nueva posición horizontal aleatoria
      }
      cloud.style.bottom = cloudPositions[i] + 'px';
    });

    requestAnimationFrame(animate);
  }

  animate();
   // Seleccionamos todos los paracaídas
const parachutes = document.querySelectorAll('.parachutist');

// Inicializamos posiciones aleatorias
let parachuteData = Array.from(parachutes).map(() => ({
  x: Math.random() * window.innerWidth,  // posición horizontal
  y: Math.random() * -window.innerHeight, // posición vertical inicial (fuera de pantalla)
  speedY: Math.random() * 1.5 + 0.5,      // velocidad de caída
  speedX: Math.random() * 0.5 - 0.25,     // desplazamiento lateral (diagonal)
  swing: Math.random() * 2 + 1,           // amplitud de oscilación
  angle: Math.random() * 360              // ángulo para la oscilación
}));

function animateParachutes() {
  parachuteData.forEach((data, i) => {
    const parachute = parachutes[i];

    // Actualizamos las posiciones
    data.y += data.speedY;
    data.x += data.speedX;
    data.angle += 0.03; // velocidad de oscilación

    // Movimiento oscilante
    const offsetX = Math.sin(data.angle) * data.swing;

    // Si el paracaídas sale de la pantalla, reiniciamos su posición arriba
    if (data.y > window.innerHeight + 100) {
      data.y = -100;
      data.x = Math.random() * window.innerWidth;
    }

    // Aplicamos las transformaciones
    parachute.style.transform = `translate(${data.x + offsetX}px, ${data.y}px)`;
  });

  requestAnimationFrame(animateParachutes);
}

animateParachutes();


