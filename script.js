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

    if (navbarShow.style.display == 'none') {
        navbarShow.style.display = 'block'; 
        
      }else {
        navbarShow.style.display = 'none';
      }
})


function loadContent(page) {

  document.getElementById('content').innerHTML = `<h2>${page}</h2>`;
}

document.getElementById('home').addEventListener('click', function() {
  loadContent('Home');
});

document.getElementById('about').addEventListener('click', function() {
  loadContent('About');
});

document.getElementById('contact').addEventListener('click', function() {
  loadContent('Contact');
});
