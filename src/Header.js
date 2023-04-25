import React, { useEffect } from 'react';
import $ from 'jquery';

function Header() {
    useEffect(() => {
      // Detect onclick event
      if (window.matchMedia("(max-width: 920px)").matches === false) {
        $(".ham").on("click", function() {
          $("menu").css("right", "0px");
          $(".overlay").css("opacity","1");
          $(".overlay").css("z-index","99");
        });
        $(".close").on("click", function() {
          $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $("menu").css("right", "-500px");
          $(".overlay").css("opacity","0");
          $(".overlay").css("z-index","-1");
        });
        $(".overlay").on("click", function() {
          $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $("menu").css("right", "-500px");
          $(".overlay").css("opacity","0");
          $(".overlay").css("z-index","-1");
        });
      } else {
        $(".ham").on("click", function() {
          $("menu").css("right", "0px");
          $(".overlay").css("opacity","1");
          $(".overlay").css("z-index","9");
        });
        $(".close").on("click", function() {
          $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $("menu").css("right", "-120%");
          $(".overlay").css("opacity","0");
          $(".overlay").css("z-index","-1");
        });
        $(".overlay").on("click", function() {
          $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $("menu").css("right", "-120%");
          $(".overlay").css("opacity","0");
          $(".overlay").css("z-index","-1");
        });
      }
  
      // Scroller Nav
      window.onscroll = function() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          $("nav").css("background-color","var(--primary)");
          $("nav").css("box-shadow","0px 6px 16px -6px var(--dark)");
          $(".social_icons").addClass("social_icon");
          $(".social_icons").removeClass("social_icons");
          $(".google_play").children("strong").hide("slow");
          $(".google_play").children("img").css("margin-right","0px");
        } else {
          $("nav").css("background-color","transparent");
          $("nav").css("box-shadow","0px 0px 0px 0px var(--dark)");
          $(".social_icon").addClass("social_icons");
          $(".social_icon").removeClass("social_icon");
          $(".google_play").children("strong").show("slow");
          $(".google_play").children("img").css("margin-right","10px");
        }
      };
  
      // DETECT ESC KEY PRESSED
      document.onkeydown = function(evt) {
        evt = evt || window.event;
        // Check if the key pressed is the Escape key
  if (evt.keyCode === 27) {
      $(".contact").hide().css("top","-100%").fadeOut('100');
      $("menu").css("right", "-500px");
      $(".overlay").css("opacity","0");
      $(".overlay").css("z-index","-1");
      }
      };
      // Smooth Scrolling
  $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 600, 'linear');
    });
  
  }, []);
  
  return (
  <header>
   <><nav>
            <section className="flex_content">
                <a href="index.html"><img src="https://i.ibb.co/6Ry23nX/DOGGO-2.png" alt="Logo" /></a>
            </section>
            <section className="flex_content">
                <a href="javascript:void(0)" className="ham"><i className="fa fa-bars"></i></a>
            </section>
        </nav>
            <menu id="menu">
                <a href="javascript:void(0)" className="close"><i className="fa fa-times"></i></a>
                <section className="flex_content">
                    <a href="index.html"><img src="https://i.ibb.co/kmyW81G/DOGGO-3.png" /></a>
                </section>
                <br />
                <ul>
                    <li><a href="#" target="_blank"><i className="fa fa-map-o"></i> 753 Gaffney Rd Fairbanks, AK 99701</a></li>
                    <li><a href="emailto:support@sp.domain"><i className="fa fa-envelope-o"></i> support@sp.domain</a></li>
                    <li><a href="tel:1234567890"><i className="fa fa-headphones"></i> 123-456-7890</a></li>
                </ul>
                <br />
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li className="dropdown">
                        <a href="javascript:void(0)">Categories</a>
                        <aside>
                            <a href="categories.html">Brands</a>
                            <a href="#">Category two</a>
                            <a href="#">Category three</a>
                            <a href="#">Category four</a>
                        </aside>
                    </li>
                    <li><a href="order.html">Order</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About us</a></li>
                    <li className="fixed_flex"><a href="signup.html" className="btn btn_1 chat_popup">Sign Up</a> <a href=""
                        className="btn btn_2 chat_popup">Order now</a> </li>
                </ul>
            </menu>
            <header className="flex">
                <section className="flex_content">
                    <article>
                        <h1 className="cursive big">
                            Carefully Crafted Recipe and broth for your Dog!<br />
                            <strong className="title">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get it <b>today!</b>
                            </strong>
                        </h1>
                    </article>
                </section>
                <section className="flex_content">
                    <figure>
                        <img src="https://i.ibb.co/xL9CZ66/MOBILE-VIEW-ORDERS.png" alt="" loading="lazy" />
                    </figure>
                    <figure>
                        <img src="https://i.ibb.co/sgm9mwv/Header-Right-1.png" alt="" />
                    </figure>
                    <aside className="tag fixed_flex">
                        <img
                            src="https://i.ibb.co/sqcHnmx/167-1676470-paw-clip-art-dog-paw-print-clip-art-removebg-preview.png"
                            alt=""
                        />
                        <strong>
                            <h6>Dog Food</h6>
                            <p>Order today</p>
                        </strong>
                    </aside>
                </section>
            </header>
            <script type="text/javascript" src="assets/js/main.js"></script>
        </>
  </header>
  );
  }

export default Header;