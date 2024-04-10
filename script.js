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