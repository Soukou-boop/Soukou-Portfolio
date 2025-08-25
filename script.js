// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
  
    // Function to update the transform property of the slides container
    function showSlide(index) {
      slidesContainer.style.transform = `translateX(${-index * 100}%)`;
    }
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  });

 
  // cars infos 
  document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides2');
    const slides = document.querySelectorAll('.slide2');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
  
    // Function to update the transform property of the slides container
    function showSlide(index) {
      slidesContainer.style.transform = `translateX(${-index * 100}%)`;
    }
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  });



  // slide counter 
  document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides3');
    const slides = document.querySelectorAll('.slide3');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
  
    // Function to update the transform property of the slides container
    function showSlide(index) {
      slidesContainer.style.transform = `translateX(${-index * 100}%)`;
    }
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  });

  

  // Select all elements with the class 'box'
const title = document.querySelectorAll('.maincontainercarsT');


function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8; // 80% of viewport height

    title.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// Run on page load and scroll
window.addEventListener('scroll', checkBoxes);
checkBoxes(); // Run once to check the initial state


// dropdownmenu

const togglebtn = document.querySelector('.toggle_btn')
const togglebtnMenu = document.querySelector('.toggle_btn i')
const dropdownmenu = document.querySelector('.dropdownmenu')

    togglebtn.onclick = function () {
    dropdownmenu.classList.toggle('open')
    const isOpen = dropdownmenu.classList.contains('open')

        togglebtnMenu.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }




 