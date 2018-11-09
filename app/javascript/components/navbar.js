function changeNavbarColorOnScroll() {
  const navbar = document.querySelector(".navbar-wagon")
  const navbarTitle = document.querySelector(".navbar-wagon-title h1")
  const navbarLink = document.querySelector(".navbar-wagon-link")

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight*0.3 && window.scrollY <= window.innerHeight) {
        navbarTitle.classList.add('hidden')
        navbarTitle.classList.add('ease')
      } else {
        navbarTitle.classList.remove('hidden')
        navbarTitle.classList.remove('ease')
      }
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-white')
        navbarTitle.classList.add('navbar-wagon-text-maroon')
        navbarLink.classList.add('navbar-wagon-text-maroon')
      } else {
        navbar.classList.remove('navbar-wagon-white')
        navbarTitle.classList.remove('navbar-wagon-text-maroon')
        navbarLink.classList.remove('navbar-wagon-text-maroon')
      }
    });
  }
}

export { changeNavbarColorOnScroll };
