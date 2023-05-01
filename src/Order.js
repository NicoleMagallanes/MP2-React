import React from "react";
import Menu from "./Menu";
import Footer from './Footer';
import Header from './Header';
import './Header.css';
import './Order.css';
import './Checkout.css';
import {Commerce} from '@chec/commerce.js';
import $ from "jquery";
import { Spaces } from 'spaces/spaces';
function Order() {
    return (
        <>
            <head>
                <title>DOGGO</title>
                <link rel="shortcut icon" href="assets/pawicon.png" />
                <meta charSet="UTF-8" />
                <meta name="language" content="ES" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Dancing+Script:wght@400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/a1e09c300f.js" crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
                <link rel="stylesheet" href="assets/css/main.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                <script type="text/javascript" src="Main.js"></script>
                <link rel="stylesheet" href="Checkout.css" />
                <script src="https://unpkg.com/vendor.js@0.0.4/lib/vendor.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.pkgd.min.js" integrity="sha512-achKCfKcYJg0u0J7UDJZbtrffUwtTLQMFSn28bDJ1Xl9DWkl/6VDT3LMfVTo09V51hmnjrrOTbtg4rEgg0QArA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            </head>
            <Menu></Menu>
            <Header></Header>
            <section id="royal_canin"></section>

            <div class="container">
                <img src="https://i.ibb.co/1GPwPpt/Royal-Canin-Logo-svg.png" alt="Product Logo" width="160" height="70"></img>
                <div class="row">
                    <div class="col-md-3">
                        <div class="product-card">
                            <h3>Royal Canin Milk for Puppies</h3>
                            <img src="https://i.ibb.co/zfqH6nR/2013-reproduction-babydog-milk-400g.png" alt="Product Image"></img>
                            <p>Complete milk replacer feed for puppies from birth to weaning. (from 1 to 10 kg) and her puppies
                            </p>
                            <span class="price">₱450.00</span>
                            <a href="https://checkout.chec.io/KluWZq" data-chec-product-id="KluWZq" id="buy-now">Buy now</a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-card">
                            <h3>Royal Canin MiniStarter for Puppies</h3>
                            <img src="https://i.ibb.co/G9xGVN3/packshot-starter-mini-shn17.png" alt="Product Image"></img>
                            <p>Complete feed for dogs - For the small breed female dog (from 1 to 10 kg) and her puppies</p>
                            <span class="price">₱300.00</span>
                            <a href="https://checkout.chec.io/iGeD6B" data-chec-product-id="iGeD6B">Buy now</a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-card">
                            <h3>Royal Canin MiniStarter for Puppies</h3>
                            <img src="https://i.ibb.co/zfqH6nR/2013-reproduction-babydog-milk-400g.png" alt="Product Image"></img>
                            <p>Complete feed for dogs - For the small breed bitch (from 1 to 10 kg) and her puppies </p>
                            <span class="price">₱300.00</span>
                            <a href="https://checkout.chec.io/iGeD6B" data-chec-product-id="iGeD6B">Buy now</a>
                        </div>
                    </div>

                </div>
                <img src="https://i.ibb.co/1GPwPpt/Royal-Canin-Logo-svg.png" alt="Product Logo" width="160" height="70"></img>
                <div class="row">
                    <div class="col-md-3">
                        <div class="product-card">
                            <h3>Royal Canin Milk for Puppies</h3>
                            <img src="https://i.ibb.co/zfqH6nR/2013-reproduction-babydog-milk-400g.png" alt="Product Image"></img>
                            <p>Complete milk replacer feed for puppies from birth to weaning. (from 1 to 10 kg) and her puppies
                            </p>
                            <span class="price">₱450.00</span>
                            <a href="https://checkout.chec.io/KluWZq" data-chec-product-id="KluWZq" id="buy-now">Buy now</a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="product-card">
                            <h3>Royal Canin MiniStarter for Puppies</h3>
                            <img src="https://i.ibb.co/G9xGVN3/packshot-starter-mini-shn17.png" alt="Product Image"></img>
                            <p>Complete feed for dogs - For the small breed female dog (from 1 to 10 kg) and her puppies</p>
                            <span class="price">₱300.00</span>
                            <a href="https://checkout.chec.io/iGeD6B" data-chec-product-id="iGeD6B">Buy now</a>
                        </div>
                    </div>
                    <div class="col-md-3">

                        <div class="product-card">
                            <h3>Royal Canin MiniStarter for Puppies</h3>
                            <img src="https://i.ibb.co/zfqH6nR/2013-reproduction-babydog-milk-400g.png" alt="Product Image"></img>
                            <p>Complete feed for dogs - For the small breed bitch (from 1 to 10 kg) and her puppies </p>
                            <span class="price">₱300.00</span>
                            <a href="https://checkout.chec.io/iGeD6B" data-chec-product-id="iGeD6B">Buy now</a>
                        </div>
                    </div>
                </div>
            </div>
            <body class="spaces ">

                <div id="chec-basket" class="animated" onclick="cartShow()">
                    <span class="cart-icon">
                        <img src="https://i.ibb.co/4jM369V/shopping-cart-set-of-shopping-cart-icon-on-white-background-shopping-cart-icon-shopping-cart-design.jpg"
                            width="23"></img>
                    </span>
                    <span class="items" data-chec="cart-items">0 Items</span>
                    <span class="subtotal" data-chec="cart-subtotal">$0.00</span>
                    <a class="view-cart mobile-only" href="javascript:cartShow()">View Cart</a>
                </div>

                <section id="shopping-cart">
                    <aside id="cart-overview" class="inactive">

                        <div class="shopping-cart-wrap">
                            <a class="hide-cart mobile-only" href="javascript:cartHide()">Close Cart</a>
                            <h3 class="shopping-cart-title"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</h3>
                            <ul class="line-items">
                                <li class="empty">Cart is empty!</li>
                            </ul>
                            <div class="subtotal">
                                <h4>Subtotal</h4><span>-</span>
                            </div>
                            <div class="closing">
                                <a class="go-to-checkout" href="javascript:Spaces.goToCheckout()"><i class="fa fa-lock"></i>
                                    <b>Secure</b> Checkout</a>
                                <small class="secure">All transactions are safe & secured by 2048 bit SSL
                                    encryption.</small>
                            </div>
                        </div>

                        <div id="spaces-inline-checkout"></div>
                    </aside>

                    <div id="cart-active-overlay" onclick="cartHide()"></div>
                </section>

            </body>
            <Footer></Footer>
        </>
    )
};
    var CommercejsSpace = new Commerce('pk_test_5172082d11c86890854d9c1b25c6ab4c9aebba9bd9fcc', false, {
        url: 'https://api.chec.io',
        axiosConfig: {
            headers: {
                'Chec-Version': '2020-08-26',
            },
        },
    });
    CommercejsSpace.cart.retrieve().then(function (data) {
        Spaces.cartUpdate(data);
    });

    $(document).ready(function () {
        $('.product-details-overlay').on('click', function (el) {
            if ($(el.target).hasClass('product-details-overlay')) {
                hideProductDetailsModal();
            }
        });

        $('#search').hideseek({
            list: '.hideseek-data',
            nodata: 'No products found',
            attribute: 'text',
            highlight: false,
            ignore: 'ignore',
            navigation: false,
            ignore_accents: false,
            hidden_mode: false
        });
    });

    $('.hover-overlay').on("touchstart", function (e) {
        "use strict"; //satisfy the code inspectors
        var link = $(this); //preselect the link
        if (link.hasClass('hover')) {
            return true;
        } else {
            link.addClass("hover");
            $('.hover-overlay').not(this).removeClass("hover");
            e.preventDefault();
            return false; //extra, and to make sure the function has consistent return points
        }
    });

    function cartShow() {
        $('#shopping-cart #cart-active-overlay ').show();
        $('#shopping-cart #cart-overview').removeClass('inactive');
    }

    function cartHide() {
        $('#shopping-cart #cart-overview').addClass('inactive');
        $('#shopping-cart #cart-active-overlay ').hide();
    }

    function showProductDetailsModal(id) {
        $('.product[data-product-id=' + id + ']').addClass('details-modal');
        $('body').addClass('no-scroll');

        $('.product[data-product-id=' + id + '] .product-image--main').hide();
        $('.product[data-product-id=' + id + '] .product-images')
            .flickity({
                cellAlign: 'center',
                adaptiveHeight: true,
                wrapAround: true,
            });
    }

    function hideProductDetailsModal() {
        $('.product').removeClass('details-modal');
        $('body').removeClass('no-scroll');
        $('.product-image--main').show();
    }
    // Retrieve the customers current cart (tracked by their browser)
    Commerce.cart.retrieve().then(cart => console.log(cart));

    // Create a new cart rather than using any existing cart
    Commerce.cart.refresh().then(cart => console.log(cart));

    //Search Bar

    let input = document.getElementById("search");
    //get list of value
    let list = document.querySelectorAll(".list li");

    //function search on the list.
    function search() {
        for (let i = 0; i < list.length; i += 1) {
            //check if the element contains the value of the input
            if (list[i].innerText.toLowerCase().includes(input.value.toLowerCase())) {
                list[i].style.display = "block";
            } else {
                list[i].style.display = "none";
            }
        }
    }

    //to the change run search.
    input.addEventListener('input', search);

export default Order;