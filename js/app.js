const filter_buttons = document.querySelectorAll('.filter-btn');
const skills = document.querySelector('.skills');
const skill_bars = document.querySelectorAll('.skill-progress');
const records_section = document.querySelector('.records');
const record_numbers = document.querySelectorAll('.number');
const menu_container = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.links')


// filter portifolio images
filter_buttons.forEach(btn => btn.addEventListener('click', (e) => {
  filter_buttons.forEach(button => button.classList.remove('active'));
  btn.classList.add('active');

  let category = btn.dataset.filter;
  $('.grid').isotope({
    filter: category
  })
}))

$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  transitionDuration: `0.5s`
});

// check if we reached the a specific area
function checkSkroll(element){
  let rect = element.getBoundingClientRect();
  if(window.innerHeight >= rect.top + element.offsetHeight){
    return true
  }
  else return false;
}

function skillAnimation(){
  if(!checkSkroll(skills)) return;
  skill_bars.forEach(skill => {
    skill.style.width = skill.dataset.progress;
  })
};

function countUp(){
  if(!checkSkroll(records_section)) return;
  record_numbers.forEach(number =>{
    const updateCount = ()=> {

      let currentNumber = +number.innerText;
      let maxNumber = +number.dataset.number
      let speed = 100;
      const increment = Math.ceil(maxNumber / speed);
      
      if(currentNumber < maxNumber){
        number.innerText = currentNumber + increment;
        setTimeout(updateCount, 30)
      }
      else{
        number.innerText = maxNumber
      }
    }

    setTimeout(updateCount, 400)
  })
}


window.addEventListener('scroll', () => {
  skillAnimation();
  countUp();
})

// Testimonials Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,
  autoplay:{
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


// Navbar

menu_container.addEventListener('click', e => {
  menu.classList.toggle('close');
  document.body.classList.toggle('full-nav');
  navLinks.classList.toggle('open')
})