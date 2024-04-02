/* Open navbar func*/
function openNav() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth < 600) { // Adjust sizes for small screens
    document.getElementById("sidenav").style.width = "130px";
    document.getElementById("page-wrapper").style.marginLeft = "130px";
  } else if (viewportWidth >= 600 && viewportWidth < 1200) { // Adjust sizes for medium screens
    document.getElementById("sidenav").style.width = "200px";
    document.getElementById("page-wrapper").style.marginLeft = "200px";
  } else { // Default sizes for larger screens
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("page-wrapper").style.marginLeft = "250px";
  }

  document.getElementsByClassName("menu")[0].style.display = "none";
  /* Save navbar state */
  localStorage.setItem('navState', 'open');
}

/* Navbar transition */
function transitionEnd(event) {
  if (event.propertyName === "width" && event.target.id === "sidenav") {
      if (event.target.style.width === "0px") {
          /* Nav closed */
          document.querySelector(".menu").style.display = "block";
          document.querySelector("#page-wrapper").classList.remove('sidenav-open');
          /* Update localStorage */
          localStorage.setItem('navState', 'closed');
      } else {
          /* Nav opened */
          document.querySelector(".menu").style.display = "none";
          document.querySelector("#page-wrapper").classList.add('sidenav-open');
          /* Update localStorage */
          localStorage.setItem('navState', 'open');
      }
  }
}

/* Func for closing the navbar */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("page-wrapper").style.marginLeft = "0";
  document.querySelector(".menu").style.display = "block";
  /* Save navState when closed */
  localStorage.setItem('navState', 'closed');
}

/* Apply saved nav state*/
document.addEventListener('DOMContentLoaded', applyNavState);

/* Event listener for transition end */
document.getElementById("sidenav").addEventListener("transitionend", transitionEnd);
