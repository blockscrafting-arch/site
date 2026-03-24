Modern web development is about grabbing the visitors' attention. There are several ways of making your website more eye-catching and engaging. One of the most appealing methods is adding animated hero text to your landing page.

In this article I have compiled some of the most creative effects I've seen, to inspire you for your own projects in the future.

For each animation, I will provide a direct link, an interactive preview so you can get an initial impression on the fly as well as the author links, so you can explore more of their work, too.

## 1\. [Hover slider (dark/light)](https://codepen.io/ig_design/pen/MRbJWW)

By: [Ivan Grozdic](https://codepen.io/ig_design)

CodePen Embed - Hover slider (dark/light) - ver 3

```
  <div class="hero-center-section">
    <div class="left-text">nature</div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="img-wrap">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/nature.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-center-section">
    <div class="left-text">travel</div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="img-wrap">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/travel.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-center-section">
    <div class="left-text">fashion</div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="img-wrap">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/fashion.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-center-section">
    <div class="left-text">animals</div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="img-wrap">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/animals.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-center-section">
    <div class="left-text">business</div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="img-wrap">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/business.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-center-section">
    <div class="left-text">art</div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="img-wrap">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/art.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="section padding-top-bottom over-hide z-bigger">
    <ul class="slide-buttons">
      <li class="">
        <a href="#0" class="hover-target" data-hover="nature">nature</a>
      </li>
      <li class="">
        <a href="#0" class="hover-target" class="hover-target" data-hover="travel">travel</a>
      </li>
      <li class="">
        <a href="#0" class="hover-target" data-hover="fashion">fashion</a>
      </li>
      <li class="">
        <a href="#0" class="hover-target" data-hover="animals">animals</a>
      </li>
      <li class="">
        <a href="#0" class="hover-target" data-hover="business">business</a>
      </li>
      <li class="">
        <a href="#0" class="hover-target" data-hover="art">art</a>
      </li>
    </ul>
  </div>

  <!-- Page cursor
  ================================================== -->

  <div class='cursor' id="cursor"></div>
  <div class='cursor2' id="cursor2"></div>
  <div class='cursor3' id="cursor3"></div>

  <!-- Link to page
  ================================================== -->

  <a href="https://front.codes" class="link-to-page hover-target" target="_blank"><img src="https://assets.codepen.io/1462889/fcy.png" alt=""></a>

  <!-- Dark/light switch
  ================================================== -->

  <div class="bottom-right">
    <div class="switch">
      <div class="circle hover-target"></div>
    </div>
  </div>
```

```

/* Please ❤ this if you like it! */

/* ======================================== *
            BEST VIEWED FULLSCREEN
   https://codepen.io/ig_design/full/MRbJWW
 * ======================================== */

@import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext');

:root {
  --white: #ffffff;
  --black: #000000;
  --dark-blue: #1f2029;
  --dark-light: #424455;
  --red: #da2c4d;
  --yellow: #f8ab37;
  --grey: #ecedf3;
}

/* #Primary
================================================== */

body{
  width: 100%;
  height: 100vh;
  background: var(--dark-blue);
  overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 30px;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
p{
    font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 30px;
  color: var(--white);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
::selection {
  color: var(--white);
  background-color: var(--black);
}
::-moz-selection {
  color: var(--white);
  background-color: var(--black);
}
mark{
  color: var(--white);
  background-color: var(--black);
}
.color-yellow {
    color: var(--yellow);
}
.size-18{
    font-size: 18px;
}
.opacity-40{
  opacity: 0.4;
}
.opacity-60{
  opacity: 0.6;
}
.section {
    position: relative;
  width: 100%;
  display: block;
  z-index: 30 !important;
}
.over-hide {
    overflow: hidden;
}
.padding-top-bottom {
  padding-top: 90px;
  padding-bottom: 90px;
}
.hero-center-section{
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  z-index: 10;
  transform: translateY(-50%);
  opacity: 0;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.hero-center-section.show{
  opacity: 1;
}
.hero-center-section .left-text{
  position: absolute;
  top: -50%;
  left: -20px;
  height: 200%;
  z-index: 1;
    font-family: 'Poppins', sans-serif;
  font-weight: 900;
  text-align: center;
  -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    font-size: 7vw;
    line-height: 1;
    color: rgba(200,200,200,.1);
    background: linear-gradient(90deg, rgba(200,200,200,0), rgba(200,200,200,0.1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  line-height: 1;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.hero-center-section.show .left-text{
  left: 0;
}

.z-bigger {
  z-index: 30 !important;
}

.img-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.02);
  display: block;
  transform: scale(1.03);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.hero-center-section.show .img-wrap{
  transform: scale(1);
}
.img-wrap img {
  width: 100%;
  height: auto;
  display: block;
}

/* #Cursor
================================================== */
.cursor,
.cursor2,
.cursor3{
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: difference;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  z-index: 9999999;
}
.cursor{
  background-color: var(--white);
  height: 0;
  width: 0;
  z-index: 9999999;
}
.cursor2,.cursor3{
  height: 36px;
  width: 36px;
  z-index:99998;
  -webkit-transition:all 0.3s ease-out;
  transition:all 0.3s ease-out
}
.cursor2.hover,
.cursor3.hover{
  -webkit-transform:scale(2) translateX(-25%) translateY(-25%);
  transform:scale(2) translateX(-25%) translateY(-25%);
  border:none
}
.cursor2{
  border: 2px solid var(--white);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}
.cursor2.hover{
  background: rgba(255,255,255,1);
  box-shadow: 0 0 0 rgba(255, 255, 255, 0.2);
}

.link-to-page {
  position: fixed;
    top: 30px;
    right: 30px;
    z-index: 20000;
    cursor: pointer;
    width: 50px;
}
.link-to-page img{
  width: 100%;
  height: auto;
  display: block;
}
.slide-buttons{
  position: relative;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  width: 580px;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;
}
.slide-buttons li{
  position: relative;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  margin: 60px 0;
  display: block;
  list-style: none;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.slide-buttons li a{
  position: relative;
  display: inline-block;
    font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 100px;
  line-height: 1;
  text-transform: uppercase;
  -webkit-text-stroke: 2px var(--white);
    text-stroke: 2px var(--white);
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    color: transparent;
  opacity: 0.3;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.slide-buttons li.active a{
  opacity: 1;
}
.slide-buttons li a:hover{
  text-decoration: none;
}
.slide-buttons li a:focus,
.slide-buttons li a:active{
  border: none;
  outline: none;
  box-shadow: none;
}
.slide-buttons li a::before {
  position: absolute;
  top: 0;
  left: 0;
    font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 100px;
  line-height: 1;
  overflow: hidden;
  text-transform: uppercase;
  padding: 0;
  max-height: 0;
  -webkit-text-stroke: transparent;
    text-stroke: transparent;
    -webkit-text-fill-color: var(--white);
    text-fill-color: var(--white);
  color: var(--white);
  content: attr(data-hover);
  -webkit-transition: max-height 0.4s;
  -moz-transition: max-height 0.4s;
  transition: max-height 0.4s;
}
.slide-buttons li.active a::before,
.slide-buttons li a:active::before,
.slide-buttons li a:focus::before {
  max-height: 100%;
}

.bottom-right{
  position: fixed;
  bottom: 50px;
  right: 30px;
  z-index: 1000;
}
.switch,
.circle {
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.switch {
  width: 80px;
  height: 4px;
  border-radius: 27px;
  background-image: linear-gradient(298deg, var(--red), var(--yellow));
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
  opacity: 1;
  transform: translate(0);
    transition: all 300ms linear;
    transition-delay: 1900ms;
}
.circle {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--dark-light);
  box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
}
.circle:hover {
  box-shadow: 0 8px 8px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
}
.circle:before {
  position: absolute;
  font-family: 'unicons';
  content: '\eac1';
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  height: 40px;
  opacity: 1;
  color: var(--grey);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.circle:after {
  position: absolute;
  font-family: 'unicons';
  content: '\eb8f';
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  height: 40px;
  color: var(--yellow);
  opacity: 0;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.switched {
}
.switched .circle {
  left: 40px;
  box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
  background: var(--dark);
}
.switched .circle:hover {
  box-shadow: 0 8px 8px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
}
.switched .circle:before {
  opacity: 0;
}
.switched .circle:after {
  opacity: 1;
}
body.light{
  background: var(--white);
}
body.light p{
  color: var(--dark-blue);
}
body.light h3{
  color: var(--dark);
}
body.light .cursor,
body.light .cursor2,
body.light .cursor3{
  mix-blend-mode: difference;
  z-index: 9999999 !important;
}
body.light .cursor.hover,
body.light .cursor2.hover,
body.light .cursor3.hover{
}
body.light .cursor{
  background-color: var(--dark-blue);
}
body.light .cursor2{
  height: 16px;
  width: 16px;
  background-color: var(--dark-blue);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  mix-blend-mode: difference;
  border-color: transparent;
}
body.light .cursor.hover,
body.light .cursor2.hover,
body.light .cursor3.hover{
  opacity: 0;
}
body.light .cursor2.hover{
  background: rgba(0,0,0,1);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}
body.light .slide-buttons li a{
  -webkit-text-stroke: 2px var(--dark-blue);
    text-stroke: 2px var(--dark-blue);
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    color: transparent;
  opacity: 1;
}
body.light .slide-buttons li a::before {
  -webkit-text-stroke: transparent;
    text-stroke: transparent;
    -webkit-text-fill-color: var(--dark-blue);
    text-fill-color: var(--dark-blue);
  color: var(--dark-blue);
}
body.light .hero-center-section.show{
  margit-top: 0;
  opacity: 0.9;
}
body.light .hero-center-section .left-text{
    color: rgba(0,0,0,.16);
    background: linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.16));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* #Media
================================================== */

@media (max-width: 1199px) {
  .hero-center-section .left-text{
    font-size: 13vw;
  }
  .slide-buttons li{
    margin: 50px 0;
  }
  .slide-buttons li a{
    font-size: 80px;
  }
  .slide-buttons li a::before {
    font-size: 80px;
  }
}

@media (max-width: 991px) {
  .hero-center-section .left-text{
    font-size: 16vw;
  }
}

@media (max-width: 767px) {
  .cursor,
  .cursor2,
  .cursor3{
    display: none;
  }
  .hero-center-section .left-text{
    display: none;
  }
  .slide-buttons li{
    margin: 40px 0;
  }
  .slide-buttons li a{
    font-size: 60px;
    font-weight: 700;
  }
  .slide-buttons li a::before {
    font-size: 60px;
    font-weight: 700;
  }
}

@media (max-width: 575px) {
  .slide-buttons li a{
    font-size: 50px;
    font-weight: 700;
  }
  .slide-buttons li a::before {
    font-size: 50px;
    font-weight: 700;
  }
}
```

```

/* Please ❤ this if you like it! */

(function($) { "use strict";

  //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
    t.style.top = n.clientY + "px",
    e.style.left = n.clientX + "px",
    e.style.top = n.clientY + "px",
    i.style.left = n.clientX + "px",
    i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

  //Switch light/dark

  $(".switch").on('click', function () {
    if ($("body").hasClass("light")) {
      $("body").removeClass("light");
      $(".switch").removeClass("switched");
    }
    else {
      $("body").addClass("light");
      $(".switch").addClass("switched");
    }
  });

  $(document).ready(function() {

    /* Hero Case study images */

    $('.slide-buttons li:nth-child(1)').on('mouseenter', function() {
      $('.slide-buttons li.active').removeClass('active');
      $('.hero-center-section.show').removeClass("show");
      $('.hero-center-section:nth-child(1)').addClass("show");
      $('.slide-buttons li:nth-child(1)').addClass('active');
    })
    $('.slide-buttons li:nth-child(2)').on('mouseenter', function() {
      $('.slide-buttons li.active').removeClass('active');
      $('.hero-center-section.show').removeClass("show");
      $('.hero-center-section:nth-child(2)').addClass("show");
      $('.slide-buttons li:nth-child(2)').addClass('active');
    })
    $('.slide-buttons li:nth-child(3)').on('mouseenter', function() {
      $('.slide-buttons li.active').removeClass('active');
      $('.hero-center-section.show').removeClass("show");
      $('.hero-center-section:nth-child(3)').addClass("show");
      $('.slide-buttons li:nth-child(3)').addClass('active');
    })
    $('.slide-buttons li:nth-child(4)').on('mouseenter', function() {
      $('.slide-buttons li.active').removeClass('active');
      $('.hero-center-section.show').removeClass("show");
      $('.hero-center-section:nth-child(4)').addClass("show");
      $('.slide-buttons li:nth-child(4)').addClass('active');
    })
    $('.slide-buttons li:nth-child(5)').on('mouseenter', function() {
      $('.slide-buttons li.active').removeClass('active');
      $('.hero-center-section.show').removeClass("show");
      $('.hero-center-section:nth-child(5)').addClass("show");
      $('.slide-buttons li:nth-child(5)').addClass('active');
    })
    $('.slide-buttons li:nth-child(6)').on('mouseenter', function() {
      $('.slide-buttons li.active').removeClass('active');
      $('.hero-center-section.show').removeClass("show");
      $('.hero-center-section:nth-child(6)').addClass("show");
      $('.slide-buttons li:nth-child(6)').addClass('active');
    })
    $('.slide-buttons li:nth-child(1)').trigger('mouseenter')

  });

})(jQuery);
```

[![](https://assets.codepen.io/1462889/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1591537293&width=256)](https://codepen.io/ig_design)

This Pen is owned by [Ivan Grozdic](https://codepen.io/ig_design) on [CodePen](https://codepen.io/).



[See more by @ig\_design on CodePen](https://codepen.io/ig_design)

### External CSS

1. [https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css)
2. [https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/unicons.css](https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/unicons.css)

### External JavaScript

1. [https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js)

## 2\. [Fluid text hover](https://codepen.io/robin-dela/pen/KKPYoBq)

By: [Robin Delaporte](https://codepen.io/robin-dela)

CodePen Embed - Fluid text hover

```
<div class="mask">
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1040 205.1" style="enable-background:new 0 0 1040 205.1;" xml:space="preserve">
        <style type="text/css">
          .st0 {
            fill-rule: evenodd;
            clip-rule: evenodd;
          }
        </style>
        <g>
          <g>
            <path
              class="st0"
              d="M108.7,155.2l24.8,23.3c-2.1,3.1-4.9,6.2-8.3,9.2c-10.2,8.8-26.2,16.4-48.5,16.4C33.4,204.1,1,174.8,1,131.2
            c0-43.3,32.4-72.6,75.7-72.6c29.8,0,48.4,13.2,56.8,25.5l-28.7,26.7c-5.5-8-14.3-13.2-26.1-13.2c-18.3,0-32.4,12.6-32.4,33.6
            c0,3.7,0.4,7.2,1.3,10.4c1.5,5.9,4.4,10.8,8.2,14.5c5,4.9,11.6,8,19.1,8.7c1.2,0.1,2.5,0.2,3.8,0.2c10.5,0,18.7-4.6,24.2-11.1
            c0.7-0.8,1.3-1.6,1.8-2.4L108.7,155.2z"
            />
            <path
              class="st0"
              d="M239.9,59.4v42.5c-2.6-0.6-6.3-1.2-10.9-1.2c-11.5,0-26.7,4.9-32.4,12.6v88.3h-44.2V63.1h44.2V80
            C205.8,68.8,223.3,59.4,239.9,59.4z"
            />
            <path
              class="st0"
              d="M381.7,181.7c-9.3,9.7-21.1,16.9-34.5,20.4l0.7-0.1L381.7,181.7z"
            />
            <path
              class="st0"
              d="M539.8,92.8c-8.7-26-34.4-34.1-61.4-34.1c-21.2,0-45,6.3-62.8,21.5l7.2,12.6l8.6,15.2
            c11.2-9.5,25.5-14.6,39.3-14.6c17.8,0,28.1,8,28.1,20.1v16.6c-8.3-10.3-24.7-16.1-43-16.1c-7.1,0-14.8,1.2-21.9,4.1
            c-14,5.7-25.7,18-25.7,40.3c0,24.8,16.7,39,34.1,43.8c0.7,0.2,1.4,0.4,2.1,0.5c3.8,0.9,7.7,1.3,11.4,1.3c4.3,0,8.5-0.4,12.5-1.2
            c1.8-0.3,3.5-0.7,5.2-1.2c10.6-2.8,19.6-8.1,25.2-14.9v13.8h44.1V114C542.9,105.9,541.8,98.8,539.8,92.8z M498.8,165.1
            c-4.6,6.6-14.9,10-24.7,10c-11.8,0-22.1-5.2-22.1-16.1c0-10.9,10.3-16.1,22.1-16.1c9.8,0,20.1,3.4,24.7,9.8V165.1z"
            />
            <path
              class="st0"
              d="M605.3,201.1c-5.9-2.5-10.7-6.2-14.1-11.1C595.1,194.7,599.9,198.5,605.3,201.1z"
            />
            <path
              class="st0"
              d="M656.2,101.5h-28.1v19.6c-1.4-0.1-2.8-0.2-4.2-0.2c-18.2,0-33.7,11.5-39.6,27.5v-46.9h-22.9V63.1h22.9V25.2
            h43.9v37.9h28.1V101.5z"
            />
            <path
              class="st0"
              d="M660.2,195.9c-2.8,2.6-6.9,4.9-12.4,6.6c-5.1,1.5-11.3,2.5-18.7,2.6c12-1.5,22.4-7.9,29.1-17.2L660.2,195.9z"
            />
            <path
              class="st0"
              d="M725.5,26.2c0,14-11.2,25.5-25.2,25.5s-25.2-11.5-25.2-25.5S686.3,1,700.3,1S725.5,12.2,725.5,26.2z"
            />
            <polygon
              class="st0"
              points="891.5,63.1 879.4,93.8 873.7,108.5 837,201.6 790,201.6 760.2,125.9 747.6,93.8 735.6,63.1 782,63.1
            792.9,93.8 802.1,119.5 813.2,150.9 825.8,115.8 833.8,93.8 844.8,63.1    "
            />
            <path
              class="st0"
              d="M939.8,116.6c1.4-8,6.3-18.3,18-22.2c3-1,6.5-1.6,10.4-1.6c20.3,0,27.5,14.1,28.7,23.8H939.8z M968.2,204l2,0
            c21.2,0,44.1-6,57.9-18.4l-18.6-27.5c-7.7,7.5-24.6,11.8-34.4,11.8c-20.1,0-32.1-11.8-34.7-24.7h98.6v-9.5
            c0-47-29.8-77.2-70.8-77.2c-28.1,0-50.7,13.6-63.2,34.1c-2,3.3-3.8,6.8-5.2,10.5c-3.4,8.6-5.3,18-5.3,27.9
            c0,44.3,31.8,71.9,73.5,72.8L968.2,204z"
            />
          </g>
        </g>
        <polyline
          class="st0"
          points="678.2,201.4 678.2,63.1 722.3,63.1 722.3,201.4 "
        />
        <path
          class="st0"
          d="M395.3,135.8c0-10-1.3-19.2-3.8-27.5c-1.7-5.6-3.9-10.8-6.6-15.5c-12.1-21.6-33.9-34.1-60.4-34.1
        c-9.1,0-17.7,1.4-25.5,4.1c-25.9,11.5-43.9,37.5-43.9,67.8c0,37.8,28.1,69,64.5,73.5c3,0.4,6,0.5,9,0.5c6.4,0,12.7-0.8,18.6-2.4
        c13.3-3.5,25.2-10.7,34.5-20.4l-15.9-23.5c-7.7,7.5-24.7,11.8-34.4,11.8c-20.1,0-32.1-11.8-34.7-24.7h98.6V135.8z M296.1,116.6
        c1.7-10,9.2-23.8,28.4-23.8c6.4,0,11.5,1.4,15.5,3.6c8.7,4.8,12.4,13.5,13.1,20.2H296.1z"
        />
        <path
          class="st0"
          d="M658.1,187.8c-6.7,9.3-17.1,15.8-29.1,17.2h0c-1.7,0.2-3.4,0.3-5.2,0.3c-6.6,0-12.9-1.5-18.5-4.2
        c-5.5-2.7-10.3-6.5-14.1-11.1c0,0,0,0,0-0.1c-4.6-6.5-7-15.1-7-25.6v-15.9c6-16.1,21.4-27.5,39.6-27.5c1.4,0,2.8,0.1,4.2,0.2V152
        c0,7.1,3.6,12.6,9.8,13.8c0.8,0.1,1.6,0.2,2.5,0.2c4.9,0,9.7-1.7,11.2-3.4l1.9,7.4L658.1,187.8z"
        />
      </svg>
</div>
```

```
body {
  position: fixed;
  height: 100%;
  overflow: hidden;
}

canvas {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}

.mask {
  position: absolute;
  z-index: 2;
  background: white;
  height: 100vh;
  width: 100vw;
  mix-blend-mode: screen;
  /* display: none; */
}

svg {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

```
var vertex = `
    attribute vec2 uv;
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
var fragment = `
    precision highp float;
    precision highp int;
    uniform sampler2D tWater;
    uniform sampler2D tFlow;
    uniform float uTime;
    varying vec2 vUv;
    uniform vec4 res;
    uniform vec2 img;

    vec2 centeredAspectRatio(vec2 uvs, vec2 factor){
        return uvs * factor - factor /2. + 0.5;
    }

    void main() {

      // R and G values are velocity in the x and y direction
      // B value is the velocity length
      vec3 flow = texture2D(tFlow, vUv).rgb;

      vec2 uv = .5 * gl_FragCoord.xy / res.xy ;

      // vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
      vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
      myUV -= flow.xy * (0.15 * 1.2);

      vec2 myUV2 = (uv - vec2(0.5))*res.zw + vec2(0.5);
      myUV2 -= flow.xy * (0.125 * 1.2);

      vec2 myUV3 = (uv - vec2(0.5))*res.zw + vec2(0.5);
      myUV3 -= flow.xy * (0.10 * 1.4);

      vec3 tex = texture2D(tWater, myUV).rgb;
      vec3 tex2 = texture2D(tWater, myUV2).rgb;
      vec3 tex3 = texture2D(tWater, myUV3).rgb;

      gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
    }
`;
{
  var _size = [2048, 1638];
  var renderer = new ogl.Renderer({ dpr: 2 });
  var gl = renderer.gl;
  document.body.appendChild(gl.canvas);

  // Variable inputs to control flowmap
  var aspect = 1;
  var mouse = new ogl.Vec2(-1);
  var velocity = new ogl.Vec2();
  function resize() {
    gl.canvas.width = window.innerWidth * 2.0;
    gl.canvas.height = window.innerHeight * 2.0;
    gl.canvas.style.width = window.innerWidth + "px";
    gl.canvas.style.height = window.innerHeight + "px";

    var a1, a2;
    var imageAspect = _size[1] / _size[0];
    if (window.innerHeight / window.innerWidth < imageAspect) {
      a1 = 1;
      a2 = window.innerHeight / window.innerWidth / imageAspect;
    } else {
      a1 = window.innerWidth / window.innerHeight * imageAspect;
      a2 = 1;
    }
    mesh.program.uniforms.res.value = new ogl.Vec4(
      window.innerWidth,
      window.innerHeight,
      a1,
      a2
    );

    renderer.setSize(window.innerWidth, window.innerHeight);
    aspect = window.innerWidth / window.innerHeight;
  }
  var flowmap = new ogl.Flowmap(gl, {
    falloff: 0.3,
    dissipation: 0.92,
    alpha: 0.5
  });
  // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
  var geometry = new ogl.Geometry(gl, {
    position: {
      size: 2,
      data: new Float32Array([-1, -1, 3, -1, -1, 3])
    },
    uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
  });
  var texture = new ogl.Texture(gl, {
    minFilter: gl.LINEAR,
    magFilter: gl.LINEAR
  });
  var img = new Image();
  img.onload = () => (texture.image = img);
  img.crossOrigin = "Anonymous";
  img.src = "https://robindelaporte.fr/codepen/bg3.jpg";

  var a1, a2;
  var imageAspect = _size[1] / _size[0];
  if (window.innerHeight / window.innerWidth < imageAspect) {
    a1 = 1;
    a2 = window.innerHeight / window.innerWidth / imageAspect;
  } else {
    a1 = window.innerWidth / window.innerHeight * imageAspect;
    a2 = 1;
  }

  var program = new ogl.Program(gl, {
    vertex,
    fragment,
    uniforms: {
      uTime: { value: 0 },
      tWater: { value: texture },
      res: {
        value: new ogl.Vec4(window.innerWidth, window.innerHeight, a1, a2)
      },
      img: { value: new ogl.Vec2(_size[1], _size[0]) },
      // Note that the uniform is applied without using an object and value property
      // This is because the class alternates this texture between two render targets
      // and updates the value property after each render.
      tFlow: flowmap.uniform
    }
  });
  var mesh = new ogl.Mesh(gl, { geometry, program });

  window.addEventListener("resize", resize, false);
  resize();

  // Create handlers to get mouse position and velocity
  var isTouchCapable = "ontouchstart" in window;
  if (isTouchCapable) {
    window.addEventListener("touchstart", updateMouse, false);
    window.addEventListener("touchmove", updateMouse, { passive: false });
  } else {
    window.addEventListener("mousemove", updateMouse, false);
  }
  var lastTime;
  var lastMouse = new ogl.Vec2();
  function updateMouse(e) {
    e.preventDefault();

    if (e.changedTouches && e.changedTouches.length) {
      e.x = e.changedTouches[0].pageX;
      e.y = e.changedTouches[0].pageY;
    }
    if (e.x === undefined) {
      e.x = e.pageX;
      e.y = e.pageY;
    }
    // Get mouse value in 0 to 1 range, with y flipped
    mouse.set(e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height);
    // Calculate velocity
    if (!lastTime) {
      // First frame
      lastTime = performance.now();
      lastMouse.set(e.x, e.y);
    }

    var deltaX = e.x - lastMouse.x;
    var deltaY = e.y - lastMouse.y;

    lastMouse.set(e.x, e.y);

    var time = performance.now();

    // Avoid dividing by 0
    var delta = Math.max(10.4, time - lastTime);
    lastTime = time;
    velocity.x = deltaX / delta;
    velocity.y = deltaY / delta;
    // Flag update to prevent hanging velocity values when not moving
    velocity.needsUpdate = true;
  }
  requestAnimationFrame(update);
  function update(t) {
    requestAnimationFrame(update);
    // Reset velocity when mouse not moving
    if (!velocity.needsUpdate) {
      mouse.set(-1);
      velocity.set(0);
    }
    velocity.needsUpdate = false;
    // Update flowmap inputs
    flowmap.aspect = aspect;
    flowmap.mouse.copy(mouse);
    // Ease velocity input, slower when fading out
    flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
    flowmap.update();
    program.uniforms.uTime.value = t * 0.01;
    renderer.render({ scene: mesh });
  }
}
```

[![](https://assets.codepen.io/205826/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1705449245&width=256)](https://codepen.io/robin-dela)

This Pen is owned by [Robin Delaporte](https://codepen.io/robin-dela) on [CodePen](https://codepen.io/).



[See more by @robin-dela on CodePen](https://codepen.io/robin-dela)

### External CSS

This Pen doesn't use any external CSS resources.


### External JavaScript

1. [https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js)
2. [https://robindelaporte.fr/codepen/bundle.js](https://robindelaporte.fr/codepen/bundle.js)

## 3\. [CSS Perspective Text Hover](https://codepen.io/bosworthco/pen/YWBLpR)

By: [James Bosworth](https://codepen.io/bosworthco)

CodePen Embed - CSS Perspective Text Hover

```
<ul class="Words">
  <li class="Words-line">
    <p>&nbsp;</p>
    <p>CSS Only</p>
  </li>
  <li class="Words-line">
    <p>CSS Only</p>
    <p>Perspective</p>
  </li>
  <li class="Words-line">
    <p>Perspective</p>
    <p>Text Effect</p>
  </li>
  <li class="Words-line">
    <p>Text Effect</p>
    <p>by</p>
  </li>
  <li class="Words-line">
    <p>by</p>
    <p>James</p>
  </li>
  <li class="Words-line">
    <p>James</p>
    <p>Bosworth</p>
  </li>
  <li class="Words-line">
    <p>Bosworth</p>
    <p>&nbsp;</p>
  </li>
</ul>
```

```
/*
** Change this if you need to modify
** the amount of lines displayed
*/
$total-lines: 6;

/*
** Leave these unless you want
** to open a whole can of worms
*/
$left-offset: 29px;
$clip-height: 50px;
$line-height: $clip-height - 5px;

/*
** Set up the experiment
*/
html {
  background-color: #5138BE;
  height: 100%;
}

body {
  color: #FFFFFF;
  display: flex;
}

/*
** Apply styles to the parent element
*/
.Words {
  margin: 0 auto;
  padding: 80px 0;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 68px;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  // Sort out nasty text fuzz
  transform: translate3d(0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -webkit-font-kerning: normal;
  -webkit-text-size-adjust: 100%;
}

/*
** Apply common styles to each line of text
*/
.Words-line {
  height: $clip-height;
  overflow: hidden;
  position: relative;

  // Change the perspective of each alternating line
  &:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(.66667);
  }
  &:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.33333);
  }

  // Loop over the total lines and apply a left offset
  @for $i from 1 through $total-lines+1 {
    &:nth-child(#{$i}) {
      left: $left-offset * $i;
    }
  }
}

/*
** Fine-grained text styles
*/
p {
  height: $clip-height;
  line-height: $line-height;
  padding: 0 10px;
  transition: all .4s ease-in-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
}

/*
** The hover interaction
*/
.Words:hover {
  p {
    transform: translate3d(0, -($clip-height), 0);
  }
}
```

[![](https://assets.codepen.io/183516/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1504142390&width=256)](https://codepen.io/bosworthco)

This Pen is owned by [James Bosworth](https://codepen.io/bosworthco) on [CodePen](https://codepen.io/).



[See more by @bosworthco on CodePen](https://codepen.io/bosworthco)

### External CSS

1. [https://fonts.googleapis.com/css?family=Source+Sans+Pro:900](https://fonts.googleapis.com/css?family=Source+Sans+Pro:900)

### External JavaScript

1. [https://code.jquery.com/jquery-2.2.4.min.js](https://code.jquery.com/jquery-2.2.4.min.js)

## 4\. [Apple TV - Word Rotation](https://codepen.io/stevenlei/pen/RwpRgzy)

By: [Steven Lei](https://codepen.io/stevenlei)

404 on CodePen

# 404

I'm afraid you've found a page that doesn't exist on CodePen. That can happen when you follow a link to something that has since been deleted. Or the link was incorrect to begin with.

Sorry about that. We've logged the error for review, in case it's our fault.

- [Go to the homepage](https://codepen.io/)
- [Visit Documentation](https://blog.codepen.io/documentation/)

## 5\. [Spotlight Cursor Text](https://codepen.io/carolineartz/pen/rNaGQYo)

By: [Caroline Artz](https://codepen.io/carolineartz)

## 6\. [SVG Text Mask w/ Video Fill](https://codepen.io/dudleystorey/pen/QvvEYQ)

By: [Dudley Storey](https://codepen.io/dudleystorey)

## 7\. [SVG Text Animation w/ Stroke Offset](https://codepen.io/Ayachem/pen/KaLbZK)

By: [Mack Ayache](https://codepen.io/Ayachem)

## 8\. [Shattering Text Animation](https://codepen.io/ARS/pen/pjypwd)

By: [Arsen Zbidniakov](https://codepen.io/ARS)

* * *

Writing has always been my passion and it gives me pleasure to help and inspire people. If you have any questions, feel free to reach out!

Connect me on [Twitter](https://twitter.com/madzadev), [LinkedIn](https://www.linkedin.com/in/madzadev/) and [GitHub](https://github.com/madzadev)!

Visit my [Blog](https://madza.dev/blog) for more articles like this.

![pic](https://media2.dev.to/dynamic/image/width=256,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8j7kvp660rqzt99zui8e.png)

[Create template](https://dev.to/settings/response-templates)

Templates let you quickly answer FAQs or store snippets for re-use.

SubmitPreview [Dismiss](https://dev.to/404.html)

CollapseExpand

[![sehgalspandan profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)](https://dev.to/sehgalspandan)

[Spandan Sehgal](https://dev.to/sehgalspandan)

Spandan Sehgal



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)\\
Spandan Sehgal](https://dev.to/sehgalspandan)

Follow

17yo Dev & Technical Writer \| I simplify complex Tech, AI & Cybersec concepts \| Building high-value resource lists for learners \| Python & Web Dev


- Email


[spandansehgal@gmail.com](mailto:spandansehgal@gmail.com)

- Location



India


- Education



Gurugram


- Pronouns



he/him


- Work



Student


- Joined


Nov 15, 2021


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk5)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk5)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sehgalspandan/comment/1nkk5)

I just wanted to know if there is any way to get custom domain like .com , .in, etc for free .

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk7)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk7)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nkk7)

I created a discussion about this a while ago 😉

If you are interested, you can check [here](https://dev.to/madza/have-you-ever-used-free-domains-like-tk-ml-ga-cf-and-gq-30ga) 😉

CollapseExpand

[![sehgalspandan profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)](https://dev.to/sehgalspandan)

[Spandan Sehgal](https://dev.to/sehgalspandan)

Spandan Sehgal



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)\\
Spandan Sehgal](https://dev.to/sehgalspandan)

Follow

17yo Dev & Technical Writer \| I simplify complex Tech, AI & Cybersec concepts \| Building high-value resource lists for learners \| Python & Web Dev


- Email


[spandansehgal@gmail.com](mailto:spandansehgal@gmail.com)

- Location



India


- Education



Gurugram


- Pronouns



he/him


- Work



Student


- Joined


Nov 15, 2021


• [Apr 19 '22• Edited on Apr 19• Edited](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk9)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk9)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sehgalspandan/comment/1nkk9)

Thanks for responding.

I read your post and visited both sites I wanted a name techwithspandy with any domain but when I checked for availability the all of the domains aren't available..

Kindly help me thru it.

Thanks

[![sehgalspandan profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)](https://dev.to/sehgalspandan)

[Spandan Sehgal](https://dev.to/sehgalspandan)

Spandan Sehgal



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)\\
Spandan Sehgal](https://dev.to/sehgalspandan)

Follow

17yo Dev & Technical Writer \| I simplify complex Tech, AI & Cybersec concepts \| Building high-value resource lists for learners \| Python & Web Dev


- Email


[spandansehgal@gmail.com](mailto:spandansehgal@gmail.com)

- Location



India


- Education



Gurugram


- Pronouns



he/him


- Work



Student


- Joined


Nov 15, 2021


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkkb)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkkb)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sehgalspandan/comment/1nkkb)

Also I read that .tk .cf domains are not good for seo.

So any way to get good domain like .com, .tech, .xyz, etc for free with seo.

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkkc)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkkc)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nkkc)

Instead of searching just for a second level name, try including the top level name as well (.tk, .ml, .ga, .cf or .gq). So, instead of "techwithspandy" search for "techwithspandy.tk", etc.

[![sehgalspandan profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)](https://dev.to/sehgalspandan)

[Spandan Sehgal](https://dev.to/sehgalspandan)

Spandan Sehgal



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)\\
Spandan Sehgal](https://dev.to/sehgalspandan)

Follow

17yo Dev & Technical Writer \| I simplify complex Tech, AI & Cybersec concepts \| Building high-value resource lists for learners \| Python & Web Dev


- Email


[spandansehgal@gmail.com](mailto:spandansehgal@gmail.com)

- Location



India


- Education



Gurugram


- Pronouns



he/him


- Work



Student


- Joined


Nov 15, 2021


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkkd)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkkd)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sehgalspandan/comment/1nkkd)

ok , will check it

Thanks

![Sloan, the sloth mascot](https://media2.dev.to/dynamic/image/width=32,height=32,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fy5767q6brm62skiyywvc.png)

Comment deleted


[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 19 '22• Edited on Apr 19• Edited](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkkg)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkkg)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nkkg)

You can get some really cheap ones (other than .tk, .ml, .ga, .cf or .gq), just pick a registrar and check their prices. I would suggest [namecheap.com](https://namecheap.com/), but here is [discussion](https://dev.to/madza/what-s-your-favorite-domain-registrar-4dcl) with more alternatives 😉

[![sehgalspandan profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)](https://dev.to/sehgalspandan)

[Spandan Sehgal](https://dev.to/sehgalspandan)

Spandan Sehgal



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)\\
Spandan Sehgal](https://dev.to/sehgalspandan)

Follow

17yo Dev & Technical Writer \| I simplify complex Tech, AI & Cybersec concepts \| Building high-value resource lists for learners \| Python & Web Dev


- Email


[spandansehgal@gmail.com](mailto:spandansehgal@gmail.com)

- Location



India


- Education



Gurugram


- Pronouns



he/him


- Work



Student


- Joined


Nov 15, 2021


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkl0)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkl0)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sehgalspandan/comment/1nkl0)

See my main problem is that i am 14 yrs old and i cant spend money on this thing so i need some alternative for this.

namecheap.com also requires money.

Kindly guide me thru this .

[![sehgalspandan profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)](https://dev.to/sehgalspandan)

[Spandan Sehgal](https://dev.to/sehgalspandan)

Spandan Sehgal



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)\\
Spandan Sehgal](https://dev.to/sehgalspandan)

Follow

17yo Dev & Technical Writer \| I simplify complex Tech, AI & Cybersec concepts \| Building high-value resource lists for learners \| Python & Web Dev


- Email


[spandansehgal@gmail.com](mailto:spandansehgal@gmail.com)

- Location



India


- Education



Gurugram


- Pronouns



he/him


- Work



Student


- Joined


Nov 15, 2021


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkl1)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkl1)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sehgalspandan/comment/1nkl1)

And also if it is possible thru freenom.com

then kindly make a post on full procedure of it from getting the domain to adding it in vercel .

Thanks

You are awesome :)

[![marissab profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F118921%2Fe386d75b-00f1-4d2d-bc09-b2587ac41243.png)](https://dev.to/marissab)

[Marissa B](https://dev.to/marissab)

Marissa B



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F118921%2Fe386d75b-00f1-4d2d-bc09-b2587ac41243.png)\\
Marissa B](https://dev.to/marissab)

Follow

A 'driven' software engineer with a passion for cars and tabletop games. Get it, driven? Because cars and... Okay, I'll stick to writing code instead of puns. 🏁


- Location



Fargo ND


- Education



AAS Computer Programming


- Pronouns



she/her


- Work



Software Engineer


- Joined


Nov 30, 2018


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkmi)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkmi)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/marissab/comment/1nkmi)

Hey dude, just a heads up: it's not really appropriate to derail someone's post with begging them to hold your hand through an unrelated process and asking for their private contact info. Go look at the discussion they've linked and do some research on your own.

[![sehgalspandan profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)](https://dev.to/sehgalspandan)

[Spandan Sehgal](https://dev.to/sehgalspandan)

Spandan Sehgal



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753388%2F4476c55f-a52b-4007-a60a-f2c961a50d47.jpeg)\\
Spandan Sehgal](https://dev.to/sehgalspandan)

Follow

17yo Dev & Technical Writer \| I simplify complex Tech, AI & Cybersec concepts \| Building high-value resource lists for learners \| Python & Web Dev


- Email


[spandansehgal@gmail.com](mailto:spandansehgal@gmail.com)

- Location



India


- Education



Gurugram


- Pronouns



he/him


- Work



Student


- Joined


Nov 15, 2021


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkmp)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkmp)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/sehgalspandan/comment/1nkmp)

Ohk I am sorry for that and also thankz Mazda for the post I have figured out how to use it. I have now domain for free for a year.

Check it out :- techwithspandy.tk

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nknb)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nknb)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nknb)

Glad you got it figured out, pleasure to help 💯👍

CollapseExpand

[![miracleio profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F223230%2Fdf65afe6-a894-4b44-90b5-278da51b3b2c.png)](https://dev.to/miracleio)

[Miracleio](https://dev.to/miracleio)

Miracleio
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F223230%2Fdf65afe6-a894-4b44-90b5-278da51b3b2c.png)\\
Miracleio\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/miracleio)

Follow

Designer & Developer.
Passionate about crafting beautiful experiences ✨

🙌Stand in faith🙌


- Location



Port Harcourt, Nigeria


- Work



Frontend Developer at Alphas


- Joined


Sep 3, 2019


• [Apr 26 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1o002)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1o002)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/miracleio/comment/1o002)

Awesome list here [@madza](https://dev.to/madza)

Thanks for sharing ❤

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 26 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1o013)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1o013)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1o013)

My pleasure! 👍💯

CollapseExpand

[![kachidk profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F581416%2F2915c4ac-17eb-4f90-9190-6fd611c68c36.jpeg)](https://dev.to/kachidk)

[Nwanguma Victor](https://dev.to/kachidk)

Nwanguma Victor



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F581416%2F2915c4ac-17eb-4f90-9190-6fd611c68c36.jpeg)\\
Nwanguma Victor](https://dev.to/kachidk)

Follow

🕊


- Location



Lagos, Nigeria


- Work



Software Developer


- Joined


Feb 18, 2021


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nklh)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nklh)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/kachidk/comment/1nklh)

Madza shoots ... and he scores. Seriously your posts are simple and aesthetic. Nice one

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nklj)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nklj)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nklj)

Thank you so much, Victor! ✨💯👍

CollapseExpand

[![guscarpim profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F520818%2Fd6057406-4c64-4f96-acb7-fcbe89a76840.jpg)](https://dev.to/guscarpim)

[Gustavo Scarpim](https://dev.to/guscarpim)

Gustavo Scarpim



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F520818%2Fd6057406-4c64-4f96-acb7-fcbe89a76840.jpg)\\
Gustavo Scarpim](https://dev.to/guscarpim)

Follow

Front End Developer


- Location



São Paulo - Brazil


- Education



PUC


- Work



Front End Developer


- Joined


Nov 25, 2020


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk0)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk0)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/guscarpim/comment/1nkk0)

Nice job!

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 19 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk1)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nkk1)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nkk1)

Thank you so much, Gustavo 💯👍✨

CollapseExpand

[![nxmxgoldxx profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753137%2F70f573fc-1386-4e8b-9621-1b32bf39dfde.png)](https://dev.to/nxmxgoldxx)

[Calenté Cardwell](https://dev.to/nxmxgoldxx)

Calenté Cardwell



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F753137%2F70f573fc-1386-4e8b-9621-1b32bf39dfde.png)\\
Calenté Cardwell](https://dev.to/nxmxgoldxx)

Follow

- Education



Skill Crush


- Work



Visual Designer and Web Developer


- Joined


Nov 14, 2021


• [Apr 22 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nn88)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nn88)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/nxmxgoldxx/comment/1nn88)

Very cool, thanks for sharing these great ideas!

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 22 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nn89)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nn89)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nn89)

My pleasure 👍💯🎉

CollapseExpand

[![jesseyeboah8 profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F741536%2F8da90387-6922-49cd-86da-14f7f2365b98.jpg)](https://dev.to/jesseyeboah8)

[Jesse Yeboah](https://dev.to/jesseyeboah8)

Jesse Yeboah



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F741536%2F8da90387-6922-49cd-86da-14f7f2365b98.jpg)\\
Jesse Yeboah](https://dev.to/jesseyeboah8)

Follow

A self thought software developer who is deeply in love with tech , interested in making life easy and always willing to learn more.


- Joined


Oct 31, 2021


• [Apr 21 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nme7)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nme7)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/jesseyeboah8/comment/1nme7)

This is craaaaazy🤯

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 21 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nmio)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nmio)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nmio)

Hopefully it helped 👍✨💯

CollapseExpand

[![dreams77 profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F726184%2F8a7b0941-1719-44c0-af3f-22b49199b623.jpeg)](https://dev.to/dreams77)

[Ahlam77](https://dev.to/dreams77)

Ahlam77



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F726184%2F8a7b0941-1719-44c0-af3f-22b49199b623.jpeg)\\
Ahlam77](https://dev.to/dreams77)

Follow

- Joined


Oct 15, 2021


• [Apr 20 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl76)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl76)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/dreams77/comment/1nl76)

This is awesome , good job.

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 20 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl7a)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl7a)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nl7a)

Thank you so much 👍💯

CollapseExpand

[![xarop_pa_toss profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F846006%2F2c58b26f-e07d-413c-8483-847e2e5d6447.jpeg)](https://dev.to/xarop_pa_toss)

[Ricardo Giro](https://dev.to/xarop_pa_toss)

Ricardo Giro



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F846006%2F2c58b26f-e07d-413c-8483-847e2e5d6447.jpeg)\\
Ricardo Giro](https://dev.to/xarop_pa_toss)

Follow

Got back into IT a year ago. Usually code in C# for an ERP customers and am making my own website with ASP.NET and other stuff I have no idea how to use... yet :)


- Location



Portimão, Portugal


- Education



Universidade Europeia, Lisbon


- Work



.NET Programmer at Infodinâmica


- Joined


Apr 11, 2022


• [Apr 22 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nmmj)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nmmj)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/xarop_pa_toss/comment/1nmmj)

Wow mate, just wow. This whole thing seems like magic to me. The designs the animations, the creativity. This is too cool :D

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 22 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nmmk)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nmmk)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nmmk)

Thanks for checking them out 😉👍

CollapseExpand

[![lukasw12v profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F802417%2F53083ec7-e041-40b5-83e5-fdc101d69180.png)](https://dev.to/lukasw12v)

[lukas](https://dev.to/lukasw12v)

lukas



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F802417%2F53083ec7-e041-40b5-83e5-fdc101d69180.png)\\
lukas](https://dev.to/lukasw12v)

Follow

I'm a dev for 6 Years, yeahh that's it


- Joined


Jan 24, 2022


• [Apr 20 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl7e)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl7e)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/lukasw12v/comment/1nl7e)

gsap is just pure love

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 20 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl7f)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl7f)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nl7f)

Awesome to hear you liked it 👍💯✨

CollapseExpand

[![svgatorapp profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F828467%2F79df0dd5-4164-4455-a0ee-de9033771245.jpg)](https://dev.to/svgatorapp)

[SVGator](https://dev.to/svgatorapp)

SVGator



[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F828467%2F79df0dd5-4164-4455-a0ee-de9033771245.jpg)\\
SVGator](https://dev.to/svgatorapp)

Follow

SVGator is a #nocode online tool designed to simplify the way you animate scalable vector graphics (SVG).


- Email


[contact@svgator.com](mailto:contact@svgator.com)

- Location



San Francisco, CA


- Joined


Mar 10, 2022


• [Apr 20 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl9h)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nl9h)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/svgatorapp/comment/1nl9h)

Absolutely love these! Always a pleasure to check out your posts! <3

CollapseExpand

[![madza profile image](https://media2.dev.to/dynamic/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)](https://dev.to/madza)

[Madza](https://dev.to/madza)

Madza
[![Subscriber](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/++)

[![](https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F159737%2F10b8de99-9383-42da-80e2-851af40d5d0f.png)\\
Madza\\
![](https://assets.dev.to/assets/subscription-icon-805dfa7ac7dd660f07ed8d654877270825b07a92a03841aa99a1093bd00431b2.png)](https://dev.to/madza)

Follow

Discussions. 💬 Tools. 🛠 Resources. 📚 All things productivity. 🎯🚀💯


- Email


[hi@madza.dev](mailto:hi@madza.dev)

- Joined


Apr 23, 2019


• [Apr 20 '22](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nlao)

Dropdown menu

- [Copy link](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#comment-1nlao)
- Hide

- [Report abuse](https://dev.to/report-abuse?url=https://dev.to/madza/comment/1nlao)

Thank you so much, SVGator! 😍✨

[View full discussion (42 comments)](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo/comments)

Some comments may only be visible to logged-in visitors. [Sign in](https://dev.to/enter) to view all comments.



Are you sure you want to hide this comment? It will become hidden in your post, but will still be visible via the comment's [permalink](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo#).


Hide child comments as well

Confirm


For further actions, you may consider blocking this person and/or [reporting abuse](https://dev.to/report-abuse)

![DEV Community](https://media2.dev.to/dynamic/image/width=190,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8j7kvp660rqzt99zui8e.png)

We're a place where coders share, stay up-to-date and grow their careers.


[Log in](https://dev.to/enter?signup_subforem=1) [Create account](https://dev.to/enter?signup_subforem=1&state=new-user)

![](https://assets.dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg)![](https://assets.dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg)![](https://assets.dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg)![](https://assets.dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg)![](https://assets.dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg)