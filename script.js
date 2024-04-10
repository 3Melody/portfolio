document.getElementById("navbar").addEventListener("click", function() {
    var navbarShow = document.querySelector('.navbar-showing');

    if (navbarShow.style.display == 'none') {
        navbarShow.style.display = 'block'; 
        
      }else {
        navbarShow.style.display = 'none';
      }
})

document.getElementById("close-nav").addEventListener("click", function() {
    var navbarShow = document.querySelector('.navbar-showing');
    console.log("clicked")

    if (navbarShow.style.display == 'none') {
        navbarShow.style.display = 'block'; 
        
      }else {
        navbarShow.style.display = 'none';
      }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  