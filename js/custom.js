
let navlinks = document.querySelectorAll(".nav-item");
navlinks.forEach(a=>{
  a.addEventListener('click',function(){
    navlinks.forEach(a=>a.classList.remove('active'));

    const modalToogle = document.querySelector(".offcanvas")
    document.querySelector(".offcanvas").classList.toggle("show")
    document.querySelector(".offcanvas-backdrop")?.remove()
    this.classList.add('active')
    modalToogle.removeAttribute("aria-modal")
    modalToogle.removeAttribute("role")
  })})






  document.getElementById("tgl_btn").addEventListener('click', () => {
    const modalToogle = document.querySelector(".offcanvas")
    document.querySelector(".offcanvas").classList.toggle("show")
    document.querySelector(".offcanvas-backdrop").remove()
  })

  document.querySelector('.btn-close').addEventListener('click', () => {
    const modalToogle = document.querySelector(".offcanvas")
    document.querySelector(".offcanvas").classList.toggle("show")
    document.querySelector(".offcanvas-backdrop").remove()
  })

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
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
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
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

    var topbtn = $('#top_btn')

    topbtn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });


    $(document).ready(function(){
      $('.nav_btn').click(function(){
          $('.side-menu').toggleClass('menu-show')
      })
      $('.backdrop').click(function(){
          $('.side-menu').removeClass('menu-show')
      })
      $('.close_btn').click(function(){
          $('.side-menu').removeClass('menu-show')
      })
      $('.nav-item').click(function(){
          $('.side-menu').removeClass('menu-show')
      })
      $(window).scroll(function(){
          if ($(document).scrollTop() > 500){
              $('.scroll_top').css("display","flex")
          } else {
              $('.scroll_top').css("display","none")
          }
      })
  })