// Page date
const date = new Date();
const year = date.getFullYear();

// Toggle button
const insertDate = document.querySelector('#insert-date');
insertDate.textContent = year;

const toggleMenu = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('display-links');
})

// Smooth scroll - John
// const scrollLinks = document.querySelectorAll('.scroll-link');

// scrollLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();

//     navLinks.classList.remove('display-links')

//     // atrubut to #home, #about etc;  slice(1) to home;
//     const id = e.target.getAttribute('href').slice(1);

//     // innterHTML pobierze home, innterText pobierze Home
//     // const id = e.target.innerHTML;
//     // console.log(id)

//     // nie zadziała querySelector
//     const element = document.getElementById(id);
//     let position = element.offsetTop - 130;
//     console.log(position)

//     window.scrollTo({
//       left: 0,

//       // początki sekcji muszą mieść taki sam górny padding
//       top: position,
//       behavior: "smooth"
//     })

//   })
// })

// Poprawiony John
const ul = document.querySelector('.nav-links');

ul.addEventListener('click', e => {
  //nie można kliknąć drugi raz w ten sam przycisk;
  e.preventDefault();
  navLinks.classList.remove('display-links');

  //id jest zmienne, w zależności od klikniętego przycisku;
  const id = e.target.getAttribute('href').slice(1);
  const element = document.getElementById(id);
  const position = element.offsetTop - 130;
  // console.log(position)

  scrollTo({
    left: 0,
    top: position,
    behavior: "smooth"
  })
})



// Smooth scroll - Mój - błąd, innerHTML pobiera to co jest pomiędzy <> <> a nie atrybut;
// const ul = document.querySelector('.nav-links');
//
// ul.addEventListener('click', e => {
//   //nie można kliknąć drugi raz w ten sam przycisk;
//   e.preventDefault();
//   navLinks.classList.remove('display-links');
//
//   //id jest zmienne, w zależności od klikniętego przycisku;
//   const id = e.target.innerHTML;
//   const element = document.getElementById(id);
//   const position = element.offsetTop - 130;
//   // console.log(position)
//
//   scrollTo({
//     left: 0,
//     top: position,
//     behavior: "smooth"
//   })
// })