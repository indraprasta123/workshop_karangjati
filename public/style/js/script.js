//ham-menu 

$(document).ready(function(){
    $(".head").show();
    $("#show-menu").click(function(){  
      if($(".head").hasClass('close-menu')) {
        $(".head").removeClass('close-menu');
        $("body").removeClass("rm-scroll");
        $(".head__menu__list").addClass('animation');
        
      }
      else {
        $("body").addClass("rm-scroll");
        $(".head").addClass('close-menu');
        $(".head__menu__list").removeClass('animation');
        $(".head__menu__list").removeClass('animated');
      }
    });
    $(".p-home").addClass("p-home--animation");
});

var swiper = new Swiper('.swiper-container.box', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  effect: 'coverflow',
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.2,
      slideShadows: true,
  }
});

  //animasi scrool
  const elementsHome = document.querySelectorAll('.animation');

  let options = {
    root: null,
  }
  const callbacks = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('animated');
      }
    });
  }

  const observerHome = new IntersectionObserver(callbacks, options);
  elementsHome.forEach(item => {
    observerHome.observe(item);
  });
  
//caraousel price-list

$('.p-pricelist__wed-day__slider , .p-pricelist__engagement__slider , .p-pricelist__prewedding__slider , .p-pricelist__wisuda__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  dots: true,
  fade: true,
  cssEase: 'linear'
});

//pg-portfolio
$('.pg-portfolio__wedding__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  dots: true,
  fade: true,
  cssEase: 'linear'
});

//accordion 
document.querySelectorAll(".footer__shorcut__menu , .footer__portfolio__menu").forEach((item) => {
  item.querySelector(".footer__shorcut__accordion , .footer__portfolio__accordion").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

