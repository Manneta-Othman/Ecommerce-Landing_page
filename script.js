var swiper = new Swiper(".home .home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* menu */

  let menu = document.querySelector('header .bottom-bar .departments');
  let dropRight = document.querySelector('.home .menu');

  menu.onclick = ( ) => {
    dropRight.classList.toggle('active');
  }





  /* women DropDown */

  let dropDown = document.querySelector('.header-bottom .women-dropdown');
  let womenMenu = document.querySelector('.bottom-left .women');
  let menuIcon = document.querySelector('.header-bottom .logo i');


  womenMenu.onclick = () => {
    dropDown.classList.toggle('active');
  }


  menuIcon.onclick = ( ) => {
    dropDown.classList.toggle('active');
  }