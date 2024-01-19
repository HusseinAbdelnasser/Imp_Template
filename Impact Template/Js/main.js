// welcome height

$(function(){

    var winH = $(window).height();

    $('.welcome').height(winH);
});

// putting active class on nav item


$(function(){

    $('.navbar .nav-item').on("click", function(){

        $(this).addClass('active').siblings().removeClass('active');
    });
});


/*
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.navbar .nav-item a [href*=' + id + ']').classList.add('active');
      })
    }
  })
}
*/

// navbar background color changing with scroll

$(function () {
  
    $(window).scroll(function(){
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >=550) {

            navbar.addClass('scrolled');

        } else {

            navbar.removeClass('scrolled');
        }
        
    });
});


// clients section

$(document).ready(function(){
    $(' .clients .slick-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    
});


// stats section


let nums = document.querySelectorAll(".stats  .num");
let section = document.querySelector(".clients");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}



// testemonials section

$(document).ready(function(){
  $(' .testemonials .slick-slider').slick({
      dots:true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
  
});


// portfolio section

$(function(){

  $('.portfolio ul li').on("click", function(){

      $(this).addClass('active').siblings().removeClass('active');
      $(".shuffle_images .col-lg-4").fadeOut(500);
      $($(this).data('filter')).fadeIn(1500);
  });
  
});



// scroll to top
 
$(function(){

  $(window).on("scroll", function(){

      if($(window).scrollTop() >= 700){
          $(".scroll").fadeIn(1000)

      }else{
          
          $(".scroll").fadeOut(1000)
      }
  });

  $(".scroll").on("click", function(){

      $("html , body").animate({
          scrollTop:0
      }, 1000)
  });
      
});


// Fancy Box

$('[data-fancybox="gallery"]').fancybox({
   loop:true,
   keyboard: true,
   buttons: [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "download",
    "thumbs",
    "close"
  ],
});



// Portfolio Api

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "Js/portfolio.json");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    console.log(jsData);
    for(let i = 0; i < jsData.length; i++){

      let boxElement = document.createElement("div");
      boxElement.className = jsData[i].class;

      let imageDiv = document.createElement("div");
      imageDiv.className = "image";
      let link = document.createElement("a")
      link.setAttribute("data-fancybox", "gallery");
      link.href = jsData[i].image;
      link.setAttribute("data-caption", jsData[i].alt);
      let image = document.createElement("img");
      image.src = jsData[i].image;
      image.setAttribute("alt", jsData[i].alt);
      image.className = "img-fluid";
      link.appendChild(image);
      imageDiv.appendChild(link);
      boxElement.appendChild(imageDiv);

      let bodyDiv = document.createElement("div");
      bodyDiv.className = "body"
      let h5 = document.createElement("h5");
      let h5Text = document.createTextNode(jsData[i].h5);
      h5.appendChild(h5Text);
      let par = document.createElement("p");
      let parText = document.createTextNode(jsData[i].p);
      par.appendChild(parText);
      bodyDiv.appendChild(h5);
      bodyDiv.appendChild(par);
      boxElement.appendChild(bodyDiv);

      document.querySelector(".shuffle_images").appendChild(boxElement)
    }

  
  }
};





