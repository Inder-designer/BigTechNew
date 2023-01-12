console.log('external');

  var today = new Date();
  var yesterday = new Date(today);
  let data =  yesterday.setDate(today.getDate() - 1)
  let newData = new Date(data)
  console.log(newData,"newdata")

  console.log( yesterday.setDate(today.getDate() - 1))

  
$(document).ready(function () {
        $(".slider_outer").slick({
          dots: false,
          infinite: true,
          speed: 300,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false,
                dots: true,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
        $(".team-slider").slick({
          dots: false,
          infinite: true,
          speed: 300,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      });
      window.onload = function () {
        Particles.init({
          selector: ".particles",
          color: "#75A5B7",
          maxParticles: 150,
          speed: 1,
          connectParticles: false,
          responsive: [
            {
              breakpoint: 768,
              options: {
                maxParticles: 80,
              },
            },
            {
              breakpoint: 375,
              options: {
                maxParticles: 50,
              },
            },
          ],
        });
      };
      $(document).ready(function () {
        $(".nav_btn").click(function () {
          $(".side-menu").toggleClass("menu-show");
        });
        $(".backdrop").click(function () {
          $(".side-menu").removeClass("menu-show");
        });
        $(".close_btn").click(function () {
          $(".side-menu").removeClass("menu-show");
        });
        $(".nav-item").click(function () {
          $(".side-menu").removeClass("menu-show");
        });
        $(window).scroll(function(){
          if ($(document).scrollTop() > 450){
            $('.blog-header').addClass('sticky_header')
          } else{
            $('.blog-header').removeClass('sticky_header')
          }
        })
      });
      document .getElementById("myForm").addEventListener("submit", function (event) {
          event.preventDefault();
          $.ajax({
            url: "https://api.apispreadsheets.com/data/IYpnrJf4SLCZZXkC/",
            type: "post",
            data: $("#myForm").serializeArray(),
            success: function () {
              alert("Message Submit :)");
            },
            error: function () {
              alert("There was an error :(");
            },
          });
          event.target.reset();
        });

let navlinks = document.querySelectorAll(".nav-item");
navlinks.forEach(a=>{
  a.addEventListener('click',function(){
    navlinks.forEach(a=>a.classList.remove('active'));
  })})

  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "02/10/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
         
          //seconds
        }, 0)
    }());
      
