document.addEventListener("DOMContentLoaded", function () {
   // make it as accordion for smaller screens
   if (window.innerWidth < 992) {

      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
         everydropdown.addEventListener('hidden.bs.dropdown', function () {
            // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
               // hide every submenu as well
               everysubmenu.style.display = 'none';
            });
         })
      });

      document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
         element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if (nextEl && nextEl.classList.contains('submenu')) {
               // prevent opening link if link needs to open dropdown
               e.preventDefault();
               if (nextEl.style.display == 'block') {
                  nextEl.style.display = 'none';
               } else {
                  nextEl.style.display = 'block';
               }

            }
         });
      })
   }
   // end if innerWidth
});

// Scroll-top button 
//Get the button:
mybutton = document.getElementById("scroll-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
   } else {
      mybutton.style.display = "none";
   }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.querySelectorAll('.horizontal-rule button').forEach(button => {
   button.addEventListener('click', e => {
      const theme = e.target.className;
      const link = document.createElement("link");
      link.href = `./src/style-${theme}.css`
      link.type = "text/css";
      link.rel = "stylesheet";
      link.media = "screen,print";

      document.getElementsByTagName("head")[0].appendChild(link);

      if (theme === "gold"){
         document.getElementById('navbar').classList.remove('navbar-dark');
         document.querySelector(':root').style.setProperty('--prime-color', 'gold');
      } else if (theme === "red"){
         document.querySelector(':root').style.setProperty('--prime-color', 'brown');
         document.getElementById('navbar').classList.add('navbar-dark');
      } else if (theme === "blue") {
         document.querySelector(':root').style.setProperty('--prime-color', '#0d6efd');
         document.getElementById('navbar').classList.add('navbar-dark');
      }
   })
})